// Change Navbar color 

window.addEventListener("scroll", () =>{
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0)
})


//FAQ Question Answers function

let faqBtns = document.querySelectorAll('.faq')

faqBtns.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')

        // change icon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus' 
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})


// Navbar Hamburger click function (show/hide)

let menu = document.querySelector('.nav__menu');
let menuBtn = document.querySelector('#open-menu-btn');
let cMenuBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex';
    cMenuBtn.style.display = 'block';
    menuBtn.style.display = 'none';
})

cMenuBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    cMenuBtn.style.display = 'none';
    menuBtn.style.display = 'block';
})