document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.numero');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calcula la velocidad del incremento
            const increment = target / 50;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Ajusta el tiempo para el efecto deseado
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
