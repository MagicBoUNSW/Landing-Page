/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


// build the navigaton bar



const navbarColor = document.querySelector('#navbar__list');
const html = document.querySelector('html')
html.style.scrollBehavior= "smooth";
const navbar = document.querySelector("#navbar__list");
for(let i = 1; i <= 4; i++) {
    const menuBar = document.createElement('li')
    const clickable = document.createElement('a')
    clickable.setAttribute('href', `#section${i}`)
    clickable.innerHTML = `Section ${i}`
    clickable.style.cssText = "text-decoration: none; color: white"
    menuBar.appendChild(clickable)
    navbar.appendChild(menuBar)
    menuBar.style.cssText = "margin-right: 20px; margin-top: 10px; margin-left: 20px; font-size: 1.5em;"
    clickable.addEventListener('mouseover',function(){
        clickable.style.color='#41aea9'
    })
    clickable.addEventListener('mouseout', function(){
        clickable.style.color="white"
    })
    clickable.addEventListener('click', function(){
        clickable.style.color="red"
    })
}
navbar.style.textAlign = "left";
navbarColor.style.backgroundColor = "rgba(0,13,60,1)";


// Scroll top button

const scrollTop = document.createElement('div');
const button = document.createElement('a');
scrollTop.innerHTML = '<img src="scroll-icon/up-arrow.png">';
scrollTop.style.cssText = "width: 20px; height: 20px; position: fixed; bottom: 100px; right: 150px; display: none; cursor: pointer"
scrollTop.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


document.body.appendChild(scrollTop);
window.onscroll = function(){
    if(document.documentElement.scrollTop > 10) {
        scrollTop.style.display='block'
    } else {
        scrollTop.style.display='none'
    } 
}


