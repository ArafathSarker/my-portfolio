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


 document.querySelector(".fa-bars").addEventListener('click',()=>{
  if(document.querySelector(".link-div").className == "link-div"){
    document.querySelector(".navigation-bar").after(document.querySelector(".link-div"));
    document.querySelector(".link-div").classList.add("column-nav"); 
    
  }
      
    else document.querySelector(".link-div").classList.remove("column-nav");

 });






  



