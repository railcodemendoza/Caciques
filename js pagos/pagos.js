document.querySelectorAll('.botonseleccion').forEach(button => {
    button.onclick = () => {
        document.querySelectorAll('.botonseleccion').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    };
});

document.querySelectorAll('.botonseleccionmonto').forEach(button => {
    button.onclick = () => {
        document.querySelectorAll('.botonseleccionmonto').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    };
});