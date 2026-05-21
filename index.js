const misImagenes = [
    "./imagen.jpeg", "img/imagen2.jpeg", "img/imagen3.jpeg",
    "img/imagen4.jpeg"
];

const btnVerMas = document.getElementById('vermas');
const popupGaleria = document.getElementById('popup-galeria');
const contenedorGrid = document.getElementById('contenedor-grid');
const lightboxIndividual = document.getElementById('lightbox-individual');
const imagenMaximizada = document.getElementById('imagen-maximizada');

misImagenes.forEach(ruta => {
    const img = document.createElement('img');
    img.src = ruta;
    img.addEventListener('click', () => {
        imagenMaximizada.src = ruta;
        lightboxIndividual.classList.add('activo');
    });
    contenedorGrid.appendChild(img);
});

btnVerMas.addEventListener('click', () => popupGaleria.classList.add('activo'));

document.querySelector('.cerrar-galeria').addEventListener('click', () => popupGaleria.classList.remove('activo'));

document.querySelector('.cerrar-lightbox').addEventListener('click', () => lightboxIndividual.classList.remove('activo'));
