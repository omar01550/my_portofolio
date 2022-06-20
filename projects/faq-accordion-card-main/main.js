




let btn=document.querySelector(".q button");
let p=document.querySelector(".answer");





document.documentElement.addEventListener('click',function(e){
  if(e.target.classList.contains("show")){
     let parentId=e.target.parentNode.parentNode.id;
     let text=document.querySelector(`#${parentId} p`)

      text.classList.toggle('hidden');






  }
});



//add new qs
let addNew=document.querySelector('.add-new');
addNew.oclick=function() {
   console.log(true);

}

setting.style.right="-100%";
//functions
function handelSetting() {
     settingIcon.onclick=function(){
        setting.style.right="0";
     }

      closeIcon.onclick=function(){
           setting.style.right="-100%";
      }


}


let thems=document.querySelector('.thems');
let colorBolet=document.querySelectorAll('.thems li');
themsPage();
function themsPage(){
    colorBolet.forEach((ele, i) => {
         ele.onclick=function(){
            console.log(documentElement.style);
         }


    });

}
