let statusArray = [
    {name: 'status-open', el: document.getElementById('status-open'), visibility: 'visible'},
    {name: 'status-in-progress', el: document.getElementById('status-in-progress'), visibility: 'hidden'},
    {name: 'status-vehicle-on-the-way', el: document.getElementById('status-vehicle-on-the-way'), visibility: 'hidden'},
    {name: 'status-closed', el: document.getElementById('status-closed'), visibility: 'hidden'}
];

statusArray.forEach(status => {
    status.el.style.visibility = status.visibility;
});

let isAnimationInteractedWith = false;

setInterval(() => {
    if (!isAnimationInteractedWith) {
        nextStatus();
    }
}, 3000);

document.getElementById('status-wrapper').addEventListener('mouseover', 
() => isAnimationInteractedWith = true);

document.getElementById('status-wrapper').addEventListener('mouseout', 
() => isAnimationInteractedWith = false);

let btnLeft = () => {
    buttonPressed();
    previousStatus();
};

let btnRight = () => {
    buttonPressed();
    nextStatus();
};

let animationTimeout;

let buttonPressed = () => {
    isAnimationInteractedWith = true;
    window.clearTimeout(animationTimeout);
    animationTimeout = window.setTimeout(() => isAnimationInteractedWith = false, 3000);
};

// cycles to next status
let nextStatus = () => {
    statusArray.filter(status => status.visibility === 'visible').forEach(status => {
        // hide current shown element
        status.visibility = 'hidden';
        status.el.style.visibility = 'hidden';
        // show next element
        let nextStatus = statusArray[(statusArray.indexOf(status) + 1) % statusArray.length];
        nextStatus.el.style.visibility = 'visible';
        nextStatus.visibility ='visible';
    });
};

let previousStatus = () => {
    statusArray.filter(status => status.visibility === 'visible').forEach(status => {
        // hide current shown element
        status.visibility = 'hidden';
        status.el.style.visibility = 'hidden';
        // show previous element
        let index = (statusArray.indexOf(status) - 1) % statusArray.length;
        let nextStatus = statusArray[index < 0 ? statusArray.length-1 : index];
        nextStatus.el.style.visibility = 'visible';
        nextStatus.visibility ='visible';
    });
};