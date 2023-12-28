let  sections = document.querySelectorAll('section');
window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
<<<<<<< HEAD
        let offset = sec.offsetTop - 290 ;
=======
        let offset = sec.offsetTop - 200 ;
>>>>>>> 8bc07ad7a90951ac1774ba50cd9e009b50b6af75
        let height = sec.offsetHeight;

        if(top >= offset && top <offset + height){
            sec.classList.add('show-animate')
        }else{
            sec.classList.remove('show-animate')
        }
    })
}
