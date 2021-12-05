
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
