const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica o modo atual ao carregar (pode incluir suporte para preferência do sistema)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Alternar para Modo Claro';
}

// Alterna entre os modos
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Atualiza o texto do botão
  const isDarkMode = body.classList.contains('dark-mode');
  toggleButton.textContent = isDarkMode
    ? 'Alternar para Modo Claro'
    : 'Alternar para Modo Noturno';

  // Salva a preferência no localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});