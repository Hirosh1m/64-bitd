// Função para atualizar contador de caracteres em campos de texto
function setupCharCounter(inputId, counterId) {
    const input = document.getElementById(inputId);
    const counter = document.getElementById(counterId);

    if (!input || !counter) return;

    input.addEventListener('input', function() {
        const maxLength = this.maxLength;
        const currentLength = this.value.length;
        counter.textContent = `${currentLength}/${maxLength}`;
    });
}

// Função para alternar entre formulários (ex: usar e-mail no lugar de celular)
function toggleEmailInput() {
    const celularInput = document.getElementById('celular');
    const emailInput = document.getElementById('email');

    if (celularInput && emailInput) {
        celularInput.style.display = celularInput.style.display === 'none' ? 'block' : 'none';
        emailInput.style.display = emailInput.style.display === 'none' ? 'block' : 'none';
    }
}

// Função para abrir/fechar modais (se precisar no futuro)
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// Função para carregar menu lateral em todas as páginas internas
function loadSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `
        <div class="d-flex align-items-center mb-4">
            <img src="img/logo.png" alt="Logotipo da 64bitd" class="logo me-2">
            <span class="fs-5 fw-bold">64bitd</span>
        </div>
        <ul>
            <li><a href="index.html">Página inicial</a></li>
            <li><a href="explorar.html">Explorar</a></li>
            <li><a href="reviews.html">Meus reviews</a></li>
            <li><a href="mensagens.html">Mensagens</a></li>
            <li><a href="comunidades.html">Comunidades</a></li>
            <li><a href="perfil.html">Perfil</a></li>
            <li><a href="#">Mais</a></li>
        </ul>
        <div class="sidebar-footer">
            <img src="img/profile-pic.jpg" alt="Foto de perfil de Edward Elric">
            <span>Edward Elric d...</span>
        </div>
    `;
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Carrega o menu lateral nas páginas que tiverem .sidebar
    if (document.querySelector('.sidebar')) {
        loadSidebar();
    }

    // Inicializa contadores de caracteres (ex: campo Nome no cadastro)
    setupCharCounter('nome', 'nome-counter');

    // Adiciona evento ao link "usar o e-mail"
    const useEmailLink = document.querySelector('a[href="#use-email"]');
    if (useEmailLink) {
        useEmailLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleEmailInput();
        });
    }
});