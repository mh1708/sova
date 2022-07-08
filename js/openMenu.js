window.addEventListener("DOMContentLoaded", function() {
    var button__bars = document.querySelector(".button__bars");
    var toggle__img = document.querySelector(".button__bars--icon");
    var navbar = document.querySelector(".header__list");
    var btn__down = document.querySelector(".nav__down");
    var sub__menu = document.querySelector(".sub__menu");
    var btn__right = document.querySelector(".nav__right")
    var sub__menu_2 = document.querySelector(".sub__menu .sub__menu");
    button__bars.addEventListener("click", function() {
        if (toggle__img.className != "cancel") {
            toggle__img.src = "images/cancel_1.svg";
            toggle__img.className = "cancel";
            navbar.classList.add("show");
           
            
        } else if (toggle__img.className == "cancel") {
            toggle__img.src = "images/bars.svg";
            toggle__img.className = "menu";
            navbar.classList.remove("show");
        }
    })
    btn__down.addEventListener("click", function(){
        this.classList.toggle("turn_up");
        sub__menu.classList.toggle("show");
    })
    btn__right.addEventListener("click",function(){
        this.classList.toggle("turn_down");
        sub__menu_2.classList("show");

    })
  

})