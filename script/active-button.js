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





  



