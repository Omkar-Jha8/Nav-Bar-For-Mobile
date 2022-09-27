window.addEventListener('load', () => {
    var main_bar = document.querySelector('.main-bar');
    main_bar.style.visibility = "hidden"
})
var onNavBar = () => {
    var i = document.querySelector('.fa-bars')
    var i2 = document.querySelector('.fa-xmark')
    var main_bar = document.querySelector('.main-bar');
    if (main_bar.style.visibility == "hidden") {
        main_bar.style.visibility = "visible";
        main_bar.style.animationName = "nav-bar-ani"
        main_bar.style.animationIterationCount = "1"
        i2.style.visibility = "visible"
        i.style.visibility = "hidden"
    }
    else if (main_bar.style.visibility != 'hidden') {
        i2.style.visibility = "hidden"
        i.style.visibility = "visible"
        main_bar.style.visibility = "hidden"

    }
}