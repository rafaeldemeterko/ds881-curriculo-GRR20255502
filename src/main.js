import './styles.css';

const cards = document.querySelectorAll('.status-grid article');

cards.forEach((card, index) => {
  card.style.setProperty('--entry-delay', `${index * 80}ms`);
});
