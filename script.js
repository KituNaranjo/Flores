const envelope = document.getElementById('envelope');
const modal = document.getElementById('letter-modal');
const closeBtn = document.querySelector('.close');

envelope.addEventListener('click', () => {
  envelope.classList.add('open'); // efecto ligero de abrir
  setTimeout(() => {
    modal.style.display = 'flex'; // muestra la carta
  }, 300);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  envelope.classList.remove('open'); 
});

window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.display = 'none';
    envelope.classList.remove('open');
  }
});

const openButton = document.getElementById('open-button');
const closeButton = document.querySelector('.close');
const miCancion = document.getElementById('miCancion');

openButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  miCancion.currentTime = 0; // empieza desde el inicio
  const playPromise = miCancion.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("No se pudo reproducir la canción:", error);
    });
  }
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  miCancion.pause();
});
