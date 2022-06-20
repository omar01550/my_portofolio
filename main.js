//controls

let controlBtns=document.querySelectorAll(".control");
let allSection=document.querySelectorAll(".section");


controlBtns.forEach((button, i) => {
  button.onclick=function(){
      controlBtns.forEach((button, i) => {
           button.classList.remove("active-control")
      });

      button.classList.add("active-control");
      removeAllSections();
      addActiveSection(button)

  }
});


//when i click on button
//loop all section remove active section


function removeAllSections(){
   allSection.forEach(section =>{
      section.classList.remove("active-section");

   })

}




function addActiveSection(button){
   document.getElementById(button.dataset.id).classList.add("active-section");

}



//click on view my-work
let viewMyWork=document.querySelector(".view-my-work");
let projectsBtn=document.querySelector(".projects-control");
viewMyWork.onclick=function(){
    projectsBtn.click();
}
