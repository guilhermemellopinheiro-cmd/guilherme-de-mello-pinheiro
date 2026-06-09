// Lista de atalhos do VS Code
const shortcuts = [
    "Ctrl + Shift + P (ou F1): Abre a Paleta de Comandos.",
    "Ctrl + P: Busca rápida para abrir arquivos.",
    "Ctrl + B: Mostra ou esconde a barra lateral (Sidebar).",
    "Ctrl + `: Abre o terminal integrado.",
    "Alt + Seta para Cima/Baixo: Move a linha atual para cima ou para baixo.",
    "Ctrl + /: Comenta ou remove o comentário da linha selecionada."
];

// Selecionando os elementos do HTML
const button = document.getElementById('cta-btn');
const display = document.getElementById('shortcut-display');

// Adicionando o evento de clique
button.addEventListener('click', () => {
    // Escolhe um atalho aleatório da lista
    const randomIndex = Math.floor(Math.random() * shortcuts.length);
    const randomShortcut = shortcuts[randomIndex];
    
    // Exibe o atalho na tela
    display.textContent = randomShortcut;
});