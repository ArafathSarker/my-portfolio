const links = document.querySelectorAll('.link-div a');
const  address = window.location.pathname.substring(window.location.pathname.search('/')+1);
links.forEach(link => {
    if(link.getAttribute("href") ==address){
      link.classList.add("active");
    }
  });