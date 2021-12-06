
//--------------------------------------------------------
const showMenu = (nav_toogle, nav_menu) =>{
    const toggle = document.getElementById(nav_toogle)
    const nav = document.getElementById(nav_menu)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show_menu')
        })
    }
}
showMenu('nav_toggle','nav_menu')

//------------------------------------------------------------
const navLink = document.querySelectorAll('nav_link')

function linkAction(){
    const nav_menu = document.getElementById('nav_menu')
    nav_menu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//-------------------------------------------------------------
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav__menu a[href*=' + Home + ']').classList.add('active_link')
        }else{
            document.querySelector('nav__menu a[href*=' + Home + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
//-----------------------------------------------------------------
function scrollToTop(){
    const scrollTop = document.getElementById('scrolltotop');
    if(this.scrollX >=150) scrollTop.classList.add('show_scroll'); else scrollTop.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollTop)
//-----------------------------------------------------------------
const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'light_sun'


const selectedTheme = localStorage.getItem('selected_theme')
const selectedIcon = localStorage.getItem('selected_icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})

