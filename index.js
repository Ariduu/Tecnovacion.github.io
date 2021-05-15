window.onscroll = function(){
  if(document.documentElement.scrollTop > 300){
    document.querySelector('.botonContainer')
    .classList.add('show')
  }
  else{
    document.querySelector('.botonContainer')
    .classList.remove('show')
  }
}

document.querySelector('.botonContainer')
.addEventListener('click', () => {  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

document.querySelector('.verMas input')
.addEventListener('click', () => {
  window.scrollTo({
    top: 740,
    behavior: "smooth"
  })  
})