const image= document.querySelectorAll('.control-img-socialmedia');




//Functions

// <--Footer-->
image.forEach((socialmedia) => {
    socialmedia.addEventListener('mouseenter',()=>{
        socialmedia.classList.add('floating_img')

    })
    socialmedia.addEventListener('mouseleave',()=>{
        socialmedia.classList.remove('floating_img')
    })

});