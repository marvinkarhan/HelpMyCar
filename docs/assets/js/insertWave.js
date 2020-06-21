let lightEl = document.getElementsByClassName('light');

for (const el of lightEl) {
    // insert top wave
    let top = document.createElement('img');
    top.src = 'assets/wave_top.svg';
    top.className = 'top-wave';
    el.insertBefore(top, el.firstChild);

    // insert bottom wave
    let bottom = document.createElement('img');
    bottom.src = 'assets/wave_bottom.svg';
    bottom.className = 'bottom-wave';
    el.appendChild(bottom);
}