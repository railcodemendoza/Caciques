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
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Ajusta este valor según lo necesites
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
