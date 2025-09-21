document.addEventListener("DOMContentLoaded", () => {

  // --------------------------
  // Highlight active link
  // --------------------------
  const links = document.querySelectorAll('.link-div a');
  const address = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
  links.forEach(link => {
    if(link.getAttribute("href") === address){
      link.classList.add("active");
    }
  });

  // --------------------------
  // Mobile nav toggle
  // --------------------------
  if(window.innerWidth <= 768){
    const parent = document.querySelector(".link-div");
    if(parent){
      const newIcon = document.createElement('i');
      newIcon.className = "fa-solid fa-bars three-dot";
      parent.before(newIcon);

      newIcon.addEventListener('click', () => {
        const linkDiv = document.querySelector(".link-div");
        if(linkDiv){
          if(!linkDiv.classList.contains("column-nav")){
            document.querySelector(".navigation-bar")?.after(linkDiv);
            linkDiv.classList.add("column-nav");
          } else {
            linkDiv.classList.remove("column-nav");
          }
        }
      });
    }
  }

  // --------------------------
  // Project card carousel
  // --------------------------
  const container = document.querySelector(".main-card");
  const nextBtns = document.querySelectorAll(".next-fun");
  const prevBtns = document.querySelectorAll(".prev-fun");

  function wrapSecondChild() {
    if(!container) return;
    container.querySelectorAll("a").forEach(a => {
      const img = a.querySelector("img");
      if(img) a.replaceWith(img);
    });

    const secondChild = container.children[1];
    if(!secondChild) return;

    const img = secondChild.querySelector("img");
    if(!img) return;

    const a = document.createElement("a");
    a.href = "./projects.html";
    img.before(a);
    a.appendChild(img);
  }

  wrapSecondChild();

  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if(!container) return;
      const lastCard = container.lastElementChild;
      container.prepend(lastCard);
      wrapSecondChild();
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if(!container) return;
      const firstCard = container.firstElementChild;
      container.appendChild(firstCard);
      wrapSecondChild();
    });
  });

  // --------------------------
  // Intersection animations
  // --------------------------
  const shape = document.querySelector(".u-shapesvg");
  const sectionTwo = document.getElementById("background-two");
  const aboutMe = document.querySelector('.about-me');
  const btnToggle = document.querySelector(".toggle-btn");
  const about = document.querySelector(".about");

  if(sectionTwo){
    const observerTwo = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          if(shape) shape.style.animation = "none";
          if(aboutMe) aboutMe.style.animation="none";
          if(about) about.style.animation="none";
          if(btnToggle) btnToggle.style.animation="none";

          void shape?.offsetWidth;
          void aboutMe?.offsetWidth;
          void btnToggle?.offsetWidth;
          void about?.offsetWidth;

          if(about) about.style.animation = "aboutAnimation 1s ease-in-out forwards";
          if(aboutMe) aboutMe.style.animation="AboutMeAnimation 1s ease-in-out forwards"; 
          if(btnToggle) btnToggle.style.animation="AboutMeAnimation 1s ease-in-out forwards";    
          if(shape) shape.style.animation = "uShapeAnimation 1s ease-in-out forwards";

          observerTwo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observerTwo.observe(sectionTwo);
  }

  const sectionThree = document.getElementById("background-three");
  const projectIntro1 = document.querySelector('.project-intro > :nth-child(1)');
  const projectIntro2 = document.querySelector('.project-intro > :nth-child(2)');
  const ProjectCard1 = document.querySelector(".project-card1");
  const ProjectCard2 = document.querySelector(".project-card2");
  const ProjectCard3 = document.querySelector(".project-card3");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn"); 

  if(sectionThree){
    const observerThree = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          [projectIntro1, projectIntro2, ProjectCard1, ProjectCard2, ProjectCard3, prevButton, nextButton].forEach(el => {
            if(el) el.style.animation = "none";
          });

          void projectIntro1?.offsetWidth;
          void projectIntro2?.offsetWidth;
          void ProjectCard1?.offsetWidth;
          void ProjectCard2?.offsetWidth;
          void ProjectCard3?.offsetWidth;
          void prevButton?.offsetWidth;
          void nextButton?.offsetWidth;

          if(prevButton) prevButton.style.animation="prevBtnAnimation 1s ease-in-out forwards";
          if(nextButton) nextButton.style.animation="nextBtnAnimation 1s ease-in-out forwards";
          if(ProjectCard1) ProjectCard1.style.animation ="projectCardsAnimation 1s ease-in-out forwards";
          if(ProjectCard2) ProjectCard2.style.animation ="projectCardsAnimation1 1s ease-in-out forwards";
          if(ProjectCard3) ProjectCard3.style.animation ="projectCardsAnimation2 1s ease-in-out forwards";
          if(projectIntro1) projectIntro1.style.animation = "ProjectIntroHAnimation 1s ease-in-out forwards";
          if(projectIntro2) projectIntro2.style.animation = "ProjectIntroPAnimation 1s ease-in-out forwards";

          observerThree.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observerThree.observe(sectionThree);
  }

  // --------------------------
  // Toggle content function
  // --------------------------
  function toggleContent() {
    const moreContent = document.getElementById("more-content");
    if(!moreContent) return;
    if(moreContent.style.display === "none" || moreContent.style.display === ""){
      moreContent.style.display = "block";
      if(about) about.classList.add("push-up");
      if(aboutMe) aboutMe.classList.add("push-up");
      if(btnToggle) btnToggle.classList.add('push-up');
      btnToggle.textContent = "Show Less";
    } else {
      moreContent.style.display = "none";
      if(about) about.classList.remove("push-up");
      if(aboutMe) aboutMe.classList.remove("push-up");
      if(btnToggle) btnToggle.classList.remove('push-up');
      btnToggle.textContent = "Show More";
    }
  }

  window.toggleContent = toggleContent; // make accessible in HTML onclick

  // --------------------------
  // Project image slider
  // --------------------------
  const preBtn = document.querySelector(".prev-bro");
  const nexBtn = document.querySelector(".next-bro");
  const projectImage  = document.querySelector(".projectImage");
  const imageList = ["mealmate1.png","mealmate2.png","mealmate3.png","mealmate4.png"
    ,"mealmate5.png","mealmate6.png","mealmate7.png","mealmate8.png","mealmate9.png"
  ,"mealmate10.png","mealmate11.png"];
  let index = 0;

  if(projectImage) projectImage.src = "../views/mealmate/" + imageList[index];

  function clickNext(){
    if(!projectImage) return;
    index = (index + 1) % imageList.length;
    projectImage.src = "../views/mealmate/" + imageList[index];
  }

  function clickPrev(){
    if(!projectImage) return;
    index = (index - 1 + imageList.length) % imageList.length;
    projectImage.src = "../views/mealmate/" + imageList[index];
  }

  if(nexBtn) nexBtn.addEventListener("click", clickNext);
  if(preBtn) preBtn.addEventListener("click", clickPrev);

  // --------------------------
  // Update year
  // --------------------------
  const year = document.querySelector('.year');
  if(year) year.textContent = `${new Date().getFullYear()}`;

});
