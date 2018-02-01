const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.6;



// Set first img image

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click',imgClick));

function imgClick( e ) {

    // Reset opacity img
    imgs.forEach(img => img.style.opacity = 1)

    // Change curent image to src of cliked imgae
    current.src = e.target.src;


    // AddclassFadeIn 
    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'),500)
    // Change opacity click 
    e.target.style.opacity = opacity;
}
console.log(current);
