let isDarkSection = false;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    
      let el = document.getElementById(entry.target.id + '-nav');

      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        if (entry.target.classList.contains('dark')) {
          el.style.color = '#FFF';
          el.style.borderColor = '#FFF';
        } else {
          el.style.color = '#000';
          el.style.borderColor = '#000';
        }
        el.style.fontWeight = 700;
        el.style.borderWidth = '2px';
      } else {
        el.style.color = '#707070';
        el.style.borderColor = '#707070';
        el.style.fontWeight = 400;
        el.style.borderWidth = ' 1px';
      }
  });
}, {threshold: 0.5});

observer.observe(document.getElementById('product'));
observer.observe(document.getElementById('technologies'));
observer.observe(document.getElementById('architecture'));
observer.observe(document.getElementById('process'));
observer.observe(document.getElementById('team'));