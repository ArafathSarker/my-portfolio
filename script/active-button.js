const links = document.querySelectorAll('.link-div a');
const  address = window.location.pathname.substring(window.location.pathname.search('/')+1);
links.forEach(link => {
    if(link.getAttribute("href") ==address){
      link.classList.add("active");
    }
  });


if(window.innerWidth<=768){
 const parent = document.querySelector(".link-div");
 const newIcon = document.createElement('i');
 newIcon.setAttribute("class","fa-solid fa-bars");
 parent.before(newIcon);
 newIcon.classList.add("three-dot");
 }


const faBar = document.querySelector(".fa-bars");
if(faBar){
faBar.addEventListener('click',()=>{
  if(document.querySelector(".link-div").className == "link-div"){
    document.querySelector(".navigation-bar").after(document.querySelector(".link-div"));
    document.querySelector(".link-div").classList.add("column-nav"); 
    
  }
      
    else document.querySelector(".link-div").classList.remove("column-nav");

 });
}

const nextBtns = document.querySelectorAll(".next-fun");
const prevBtns = document.querySelectorAll(".prev-fun");
const container = document.querySelector(".main-card");

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const lastCard = container.lastElementChild;
    container.prepend(lastCard); // move last to first
  });
});


prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const firstCard = container.firstElementChild;
    container.appendChild(firstCard); // move first to last
  });
});

  



document.addEventListener("DOMContentLoaded", function() {
    const shape = document.querySelector(".u-shapesvg");
    const section = document.getElementById("background-two");
    const aboutMe = document.querySelector('.about-me');
    const btn = document.querySelector(".toggle-btn");
    const about = document.querySelector(".about");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Restart animation
                shape.style.animation = "none"; 
                aboutMe.style.animation="none";
                about.style.animation = "none";
                btn.style.animation="none";
                void aboutMe.offsetWidth; 
                void shape.offsetWidth; 
                void btn.offsetWidth;   
                void about.offsetWidth;
                about.style.animation = "aboutAnimation 1s ease-in-out forwards";
                aboutMe.style.animation = "AboutMeAnimation 1s ease-in-out forwards"; 
                btn.style.animation = "AboutMeAnimation 1s ease-in-out forwards";    
                shape.style.animation = "uShapeAnimation 1s ease-in-out forwards";
               observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
 const projectIntro1 = document.querySelector('.project-intro > :nth-child(1)');
    const projectIntro2 = document.querySelector('.project-intro > :nth-child(2)');
    const section = document.getElementById("background-three");
    const ProjectCard1 = document.querySelector(".project-card1");
    const ProjectCard2 = document.querySelector(".project-card2");
    const ProjectCard3 = document.querySelector(".project-card3");
    const prevButton = document.querySelector(".prev-btn");
    const nextBtutton = document.querySelector(".next-btn"); 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              projectIntro1.style.animation="none";
              projectIntro2.style.animation="none";
              ProjectCard1.style.animation="none";
              ProjectCard2.style.animation="none";
               ProjectCard3.style.animation="none";
               prevButton.style.animation="none";
               nextBtutton.style.animation="none";
               void projectIntro1.offsetWidth;
                void projectIntro2.offsetWidth;
                void ProjectCard1.offsetWidth;
                void ProjectCard2.offsetWidth;
                void ProjectCard3.offsetWidth;
                void prevButton .offsetWidth;
                void nextBtutton.offsetWidth;
                prevButton.style.animation="prevBtnAnimation 1s ease-in-out forwards";
                nextBtutton.style.animation="nextBtnAnimation 1s ease-in-out forwards";
                ProjectCard1.style.animation ="projectCardsAnimation 1s ease-in-out forwards";
                ProjectCard2.style.animation ="projectCardsAnimation1 1s ease-in-out forwards";
                ProjectCard3.style.animation ="projectCardsAnimation2 1s ease-in-out forwards";
                projectIntro1.style.animation = "ProjectIntroHAnimation 1s ease-in-out forwards";
                projectIntro2.style.animation = "ProjectIntroPAnimation 1s ease-in-out forwards";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});


function toggleContent() {
    const moreContent = document.getElementById("more-content");
    const aboutMe = document.querySelector('.about-me');
    const about = document.querySelector(".about");
    const btn = document.querySelector(".toggle-btn");
    
    if (moreContent.style.display === "none") {
      moreContent.style.display = "block";
      about.classList.add("push-up");
      aboutMe.classList.add("push-up");
      btn.classList.add('push-up');
      btn.textContent = "Show Less";
    } else {
      moreContent.style.display = "none";
      about.classList.remove("push-up");
      aboutMe.classList.remove("push-up");
      btn.classList.remove('push-up');
      btn.textContent = "Show More";
    }
  }

const year = document.querySelector('.year');
year.textContent = `${new Date().getFullYear()}`;





  



