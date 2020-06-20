let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      let el = document.getElementById(entry.target.id + '-nav');
      // manage style changes
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        // emphasize element
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
        // revert effect
        el.style.color = '#969696';
        el.style.borderColor = '#969696';
        el.style.fontWeight = 400;
        el.style.borderWidth = ' 1px';
      }
  });
}, {threshold: 0.5});

// observe sections
const pageSections = document.getElementById('content-wrapper').children;
for (let index = 1; index < pageSections.length; index++) {
  observer.observe(pageSections[index]);
}