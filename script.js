// ==========================================
// 1. Alternador de Tema (Dark / Light Mode)
// ==========================================
function initThemeToggle() {
  const themeBtn = document.querySelector('#theme-toggle');
  if (!themeBtn) return;

  // Carrega a preferência salva no navegador
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ==========================================
// 2. Requisição Assíncrona (Fetch API)
// ==========================================
async function buscarDados(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Falha ao buscar dados:', error);
    return null;
  }
}

// ==========================================
// 3. Validação Simples de Formulário
// ==========================================
function initFormValidation() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput || !emailInput.value.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    console.log('Formulário enviado com sucesso!');
    form.reset();
  });
}

// ==========================================
// Inicialização do Script
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initFormValidation();
});
