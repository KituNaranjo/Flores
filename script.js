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

const audio = document.getElementById('miCancion');
