const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');
const body = document.body;

// Carregar preferência salva
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  icon.textContent = '🌙'; // Ícone de lua
}

// Alternar entre os modos
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Alternar ícones
  const isDarkMode = body.classList.contains('dark-mode');
  icon.textContent = isDarkMode ? '🌙' : '🌞';

  // Salvar a preferência
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});