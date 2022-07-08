window.addEventListener("DOMContentLoaded",function(){
 


// menu 

const button__favorite = document.querySelector('.button__favorite')
const header__favor = document.querySelector('.header__favor')
const button__user = document.querySelector('.button__user')
const header__user = document.querySelector('.header__user')

button__favorite.addEventListener('click', () => {
    header__favor.classList.toggle('show');
    header__user.classList.remove('show');
    search.classList.remove('active');


})
button__user.addEventListener('click', () => {
    header__user.classList.toggle('show');
    header__favor.classList.remove('show');
    search.classList.remove('active');
})

const slider = document.getElementById("range");
const output = document.getElementById("panel__opt");
  

  

});
    
    
  

  
 
 
    
  
 
  
 


