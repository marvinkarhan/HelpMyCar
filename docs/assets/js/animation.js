let animations = [
    {classSelector: 'slide-in-from-left', animation: 'animation-slide-in-from-left', duration: 1000, reverse: 'animation-slide-out-in-from-left'},
    {classSelector: 'scale-up-bottom', animation: 'animation-scale-up-bottom', duration: 800, reverse: 'animation-scale-down-up-bottom'},
    {classSelector: 'slide-up-bottom', animation: 'animation-slide-up-bottom', duration: 1200, reverse: 'animation-slide-down-up-bottom'}
];

function animateAll(animationTechnique = 'animation') {
    animations.forEach((animation) => {
        let elements = document.getElementsByClassName(animation.classSelector);
        for (const el of elements) {
            el.classList.add(animation[animationTechnique]);
            setTimeout(() => {
                el.classList.remove(animation[animationTechnique]);
            }, animationTechnique === 'reverse' ? animation.duration * 2 : animation.duration);
        }    
    });
}

function reverseAnimateAll() {
    animateAll('reverse');
}

animateAll();
