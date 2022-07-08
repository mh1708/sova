window.addEventListener("DOMContentLoaded", function() {
    // tabs
    var tabLinks = document.querySelectorAll(".tab__links");
    var tabcontent = document.querySelectorAll(".tab__content");

    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });

    function openTabs(el) {
        var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
        var type = btn.dataset.type; // lấy giá trị trong data-electronic // lấy giá trị trong data-electronic
        console.log(type);
        tabcontent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + type).classList.add("active");

        btn.classList.add("active");
    }




    // open search
    const search = document.querySelector('.header__use-search');
    const button__search = document.querySelector('.button__search');
    const input = document.querySelector('.form__search-input');
    const button__favorite = document.querySelector('.button__favorite')
    const header__favor = document.querySelector('.header__favor')
    const button__user = document.querySelector('.button__user')
    const header__user = document.querySelector('.header__user')


    button__search.addEventListener('click', () => {
        search.classList.toggle('active');
        input.focus();
    })
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
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    var acc = document.getElementsByClassName("accordion__button");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

     
     
 
 
 
}, false)