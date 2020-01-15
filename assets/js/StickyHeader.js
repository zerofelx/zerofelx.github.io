var Header = document.getElementById('Header')
var altura = Header.offsetHeight

window.addEventListener("scroll", () => {
    if(window.pageYOffset > altura) {
        Header.classList.add('Fixed')
        Header.classList.remove('Return')
    } else {
        Header.classList.add('Return')
        Header.classList.remove('Fixed')
    }
})