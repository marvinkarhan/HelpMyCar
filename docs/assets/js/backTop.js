let landingPageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let backTopAnchor = document.getElementById('back-top');

        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            backTopAnchor.style.bottom = '-35px';
        } else {
            backTopAnchor.style.bottom = '5px';
        }
    });
}, { threshold: 0.5 });

landingPageObserver.observe(document.getElementById('landing-page'));