
//https://www.w3schools.com/jsref/prop_style_transform.asp
//found this article about how to transform 2d images using dom model


const COOKIE_NAMES = {
    High_contrast: 'tarot_high_contrast',
    Hover_effects: 'tarot_hover_effects'
}


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

        Cookies.set(COOKIE_NAMES.Hover_effects, 'enabled', {expires: 365});
    } else {
        allImages.forEach(function(singleImage){
            singleImage.removeEventListener('mouseenter', scaleUp);
            singleImage.removeEventListener('mouseleave', scaleDown);
        });

        animateBtn.textContent = 'Add Hover Effects To Images';

        Cookies.set(COOKIE_NAMES.Hover_effects, 'disabled', {expires: 365});

    }
}

function toggleHighContrast() {
    const constrastBtn = document.getElementById('contrastBtn');
    const body = document.body;
    const nav = document.querySelector('.nav');

    if (constrastBtn.textContent === 'High Contrast Mode') {
        body.style.backgroundColor = '#360825';
        nav.style.backgroundColor = '#131710';
        constrastBtn.textContent = 'Regular Contrast Mode';
        Cookies.set(COOKIE_NAMES.High_contrast, 'enabled', {expires: 365});
    } else {
        body.style.backgroundColor = '';
        nav.style.backgroundColor = '';
        constrastBtn.textContent = 'High Contrast Mode';
        Cookies.set(COOKIE_NAMES.High_contrast, 'disabled', {expires: 365});

    }
}

function applyHighContrastSettings() {
    const savedSetting = Cookies.get(COOKIE_NAMES.High_contrast);
    if (savedSetting === 'enabled') {
        const constrastBtn = document.getElementById('contrastBtn');
        const body = document.body;
        const nav = document.querySelector('.nav');
        body.style.backgroundColor = '#360825';
        nav.style.backgroundColor = '#131710';
        constrastBtn.textContent = 'Regular Contrast Mode';
    }
}

function applyHoverEffectsSettings() {
    const savedSetting = Cookies.get(COOKIE_NAMES.Hover_effects);
    if (savedSetting === 'enabled') {
        const animateBtn = document.getElementById('animateBtn');
        let allImages = document.querySelectorAll('img');

        allImages.forEach(function(singleImage) {
            singleImage.addEventListener('mouseenter', scaleUp)
            singleImage.addEventListener('mouseleave', scaleDown)
        });
        animateBtn.textContent = 'Remove Hover Effects from Images'
    }
}

function loadSavedSettings() {
    applyHighContrastSettings();
    applyHoverEffectsSettings();
}

document.addEventListener('DOMContentLoaded', loadSavedSettings)