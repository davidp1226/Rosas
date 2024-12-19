const rosas = document.querySelectorAll('.rosa');

rosas.forEach(rosa => {
    rosa.addEventListener('click', () => {
        rosa.style.display = 'none';
    });
});
