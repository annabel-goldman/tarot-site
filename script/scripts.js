
//https://www.w3schools.com/jsref/prop_style_transform.asp
//found this article about how to transform 2d images using dom model



function scaleUp(){
    this.style.transform = 'scale(1.1)';
}

function scaleDown(){
    this.style.transform = 'scale(1)';
}

//https://javascript.info/mouse-events-basics
//event listeners disucssed in comments section of this!!

function hoverEffects() {
    const animateBtn = document.getElementById('animateBtn');
    let allImages = document.querySelectorAll('img');


    if (animateBtn.textContent === 'Add Hover Effects To Images') {
        console.log("here!!")
        allImages.forEach(function(singleImage){
            singleImage.addEventListener('mouseenter', scaleUp);
            singleImage.addEventListener('mouseleave', scaleDown);
        });
        animateBtn.textContent = 'Remove Hover Effects from Images'
    } else {
        allImages.forEach(function(singleImage){
            singleImage.removeEventListener('mouseenter', scaleUp);
            singleImage.removeEventListener('mouseleave', scaleDown);
        });

        animateBtn.textContent = 'Add Hover Effects To Images'

    }
}

function toggleHighContrast() {
    const constrastBtn = document.getElementById('contrastBtn');
    const body = document.body;
    const nav = document.querySelector('.nav');

    if (constrastBtn.textContent === 'High Contrast Mode') {
        body.style.backgroundColor = '#360825';
        nav.style.backgroundColor = '#131710';
        constrastBtn.textContent = 'Regular Contrast Mode'
    } else {
        body.style.backgroundColor = '';
        nav.style.backgroundColor = '';
        constrastBtn.textContent = 'High Contrast Mode'
    }
}