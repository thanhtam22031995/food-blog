const button = document.querySelector('#magicBox')
const menu = document.querySelector('#magicMenu')
if (button) {
    button.addEventListener('click', (e) => {
        // boxx.classList.add('active')
        button.classList.toggle('active')
        if (menu) {
            menu.classList.toggle('activemenu')
        }
    })
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}