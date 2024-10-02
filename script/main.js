document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.numero');

  const startCounting = (counter) => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / 50;

          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 40); // Ajusta el tiempo para el efecto deseado
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCounting(entry.target);
              observer.unobserve(entry.target); // Deja de observar una vez que el conteo ha comenzado
          }
      });
  }, {
      threshold: 0.5
  });

  counters.forEach(counter => {
      observer.observe(counter);
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});



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


const carousel = document.querySelector('.carousel-static');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Detiene la función si no se está haciendo click
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // El número multiplica la cantidad de desplazamiento
    carousel.scrollLeft = scrollLeft - walk;
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      email: document.getElementById('email').value,
      number: document.getElementById('number').value,
      mensaje: document.getElementById('mensaje').value
  };

  fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});

// Función para enviar el correo
// Función para enviar el correo
function sendEmail(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

  let params = {
      name: document.getElementById("name").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("mensaje").value,
  };

  // Simulando el envío de correo con EmailJS
  emailjs.send("service_59kqwnd", "template_kqqz95h", params)
      .then(function(response) {
          // Mostrar el modal de éxito
          openModal();
          // Limpiar el formulario después de enviar el correo
          document.getElementById("contactForm").reset();
      })
      .catch(function(error) {
          alert("Error al enviar el email: " + error);
      });
}

// Función para abrir el modal
function sendEmail(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

  let params = {
      name: document.getElementById("name").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("mensaje").value,
  };

  // Simulando el envío de correo con EmailJS
  emailjs.send("service_59kqwnd", "template_kqqz95h", params)
      .then(function(response) {
          // Mostrar el modal de éxito
          openModal();
          // Limpiar el formulario después de enviar el correo
          document.getElementById("contactForm").reset();
      })
      .catch(function(error) {
          alert("Error al enviar el email: " + error);
      });
}

// Función para abrir el modal
function openModal() {
  document.getElementById("successModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de él (opcional)
window.onclick = function(event) {
  const modal = document.getElementById("successModal");
  if (event.target === modal) {
      closeModal();
  }
}
