
// Obtener todos los elementos con la clase "github-icon"
const githubIcons = document.querySelectorAll('.github-icon');

// Iterar sobre cada icono de GitHub
githubIcons.forEach(icon => {
    // Agregar un manejador de eventos de clic a cada icono
    icon.addEventListener('click', () => {
        // Obtener la URL del repositorio del atributo "data-repo" del icono
        const repoUrl = icon.dataset.repo;
        // Abrir la URL del repositorio en una nueva pestaña
        window.open(repoUrl, '_blank');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.addEventListener("click", function() {
            const description = this.getAttribute("data-description");
            const workDescription = document.querySelector(".work-description");
            workDescription.innerHTML = description;
        });
    });
});

function toggleModal() {
  const modal = document.querySelector('.modal');
  const sections = document.querySelectorAll('section:not(.modal)');

  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'block';
    sections.forEach(section => {
      section.style.opacity = '0.1'; /* Aplica transparencia */
      section.style.pointerEvents = 'none'; /* Desactiva eventos de ratón */
    });
  } else {
    modal.style.display = 'none';
    sections.forEach(section => {
      section.style.opacity = '1'; /* Restablece la opacidad */
      section.style.pointerEvents = 'auto'; /* Restablece los eventos de ratón */
    });
  }
}

function closeAndNavigate() {
  const modal = document.querySelector('.modal');
  const sections = document.querySelectorAll('section:not(.modal)');
  
  modal.style.display = 'none';
  sections.forEach(section => {
    section.style.opacity = '1'; /* Restablece la opacidad */
    section.style.pointerEvents = 'auto'; /* Restablece los eventos de ratón */
  });
}
