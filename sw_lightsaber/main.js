const blade = document.querySelector('.blade');
const switchBtn = document.querySelector('.switch-btn');
const colorBtns = document.querySelectorAll('.color-btn');

// Toggle lightsaber activation
switchBtn.addEventListener('click', function () {
    blade.classList.toggle('blade-height');
});

// Change lightsaber color
colorBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        colorBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        // Change the CSS variable for blade color
        const color = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--blade-color', color);
    });
});