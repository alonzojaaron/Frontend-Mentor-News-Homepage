// ! HAMBURGER NAV

const hamburgerIcon = document.querySelector('.hamburger')
const navCategories = document.querySelector('.list-items')

hamburgerIcon.addEventListener('click', () => {

    navCategories.classList.toggle('active')


    if(navCategories.className.includes('active')){
        hamburgerIcon.src = `images/icon-menu-close.svg`

    } else {
        navCategories.classList.remove('active')
        hamburgerIcon.src = `images/icon-menu.svg`
    }

})



