const button = document.querySelector('#magicBox')
const menu = document.querySelector('#magicMenu')
if (button) {
    button.addEventListener('click', (e) => {
        // boxx.classList.add('active')
        button.classList.toggle('menu-btn--active')
        if (menu) {
            menu.classList.toggle('activemenu')
        }
    })
}


