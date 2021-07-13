
const navToggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');



navToggler.addEventListener('click', ()=>{
    nav.classList.toggle('hide');
    // nav.style.transform = 'translateX(270px)';
    navToggler.classList.toggle('show');
});

window.addEventListener('resize', ()=>{
    let w = window.innerWidth;
   
    if(w < 1000){
    nav.classList.add('hide');
    }
})
