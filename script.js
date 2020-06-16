let intersectionOptions = {
  threshold: 0.5
}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.target.id + '-nav');
    console.log(document.getElementById(entry.target.id + '-nav'));
    let el = document.getElementById(entry.target.id + '-nav');
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      el.style.color = '#000000';
      el.style.borderColor = '#000000';
      el.style.fontWeight = 700;
    } else {
      el.style.color = '#707070';
      el.style.borderColor = '#707070';
      el.style.fontWeight = 400;
    }
  });
}, intersectionOptions);

observer.observe(document.getElementById('product'));
observer.observe(document.getElementById('technologies'));
observer.observe(document.getElementById('architecture'));
observer.observe(document.getElementById('process'));
observer.observe(document.getElementById('team'));
