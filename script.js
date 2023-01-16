let allDiv = document.querySelectorAll(".alldiv")
let div1 = document.querySelector(".div1")
let action = document.querySelectorAll(".action")
let initialValue = 0
div1.innerText = initialValue
function handleBtnClick(event){
     if(event.target.classList.contains("div7")){
      return  div1.innerText = eval( div1.innerText ) 
     }
     if(event.target.classList.contains("refresh")){
      return div1.innerText = initialValue
     }
     if(div1.innerText == initialValue){
      div1.innerText = event.target.innerText
     }else{
     div1.innerText += event.target.innerText
     }
}
allDiv.forEach((btn)=>{
    btn.addEventListener("click", handleBtnClick)
})
