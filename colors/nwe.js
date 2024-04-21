
if(localStorage.length>0){
    document.body.style.background = localStorage.color
}

function setColor(color){
    document.body.style.background = color
  localStorage.setItem('color',color)
}