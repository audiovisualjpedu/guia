// Função para tornar o botão visível após um atraso de 3 segundos
function showFloatingButton() {
    var floatingButton = document.getElementById('floatingButton');
    floatingButton.style.display = '';
}

// Atraso de 3 segundos antes de chamar a função para tornar o botão visível
setTimeout(showFloatingButton, 3000);

function redirectToHome() {
    // Substitua 'pagina_inicial.html' pela URL da sua página inicial
    window.location.href = 'index.html';
}

