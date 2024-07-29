document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2000);

    const mosquitoes = document.querySelectorAll('.mosquito');
    mosquitoes.forEach(mosquito => {
        moveMosquito(mosquito);
    });

    function moveMosquito(mosquito) {
        const maxX = window.innerWidth - mosquito.clientWidth;
        const maxY = window.innerHeight - mosquito.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        const speed = Math.random() * 10 + 5;

        let deltaX = (Math.random() - 0.5) * 2 * speed;
        let deltaY = (Math.random() - 0.5) * 2 * speed;

        if (Math.random() < 0.5) {
            deltaX = -deltaX;
        }

        if (Math.random() < 0.5) {
            deltaY = -deltaY;
        }

        function updateMosquitoPosition() {
            let x = parseFloat(mosquito.style.left) || randomX;
            let y = parseFloat(mosquito.style.top) || randomY;

            x += deltaX;
            y += deltaY;

            if (x < 0 || x > maxX) {
                deltaX = -deltaX;
            }

            if (y < 0 || y > maxY) {
                deltaY = -deltaY;
            }

            mosquito.style.left = x + 'px';
            mosquito.style.top = y + 'px';

            requestAnimationFrame(updateMosquitoPosition);
        }

        updateMosquitoPosition();
    }
});
