// Menu Responsivo Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em algum link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Acordeão do FAQ (Dúvidas Frequentes)
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
        
        const span = item.querySelector('span');
        span.textContent = parent.classList.contains('active') ? '-' : '+';
    });
});

// Modal de Agendamento
const modal = document.getElementById('consultaModal');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora da caixa
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Simulação de envio do formulário do Modal
const modalForm = document.getElementById('modalForm');
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve para confirmar seu agendamento.');
    modalForm.reset();
    closeModal();
});