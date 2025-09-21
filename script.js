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

const envelopeButton = document.getElementById('open-button');
const audio = document.getElementById('miCancion');

  envelopeButton.addEventListener('click', () => {
    modal.style.display = 'flex';  // abre la carta
    audio.play();                  // reproduce la canción
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';  // cierra la carta
    audio.pause();                  // pausa la canción
    audio.currentTime = 0;          // reinicia la canción
  });

  // Opcional: cerrar modal al dar click fuera del contenido
  window.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.style.display = 'none';
      audio.pause();
      audio.currentTime = 0;
    }
  });