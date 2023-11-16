document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function() {
        // Redirecione o usuário para a página de registro
        window.location.href = '/register';
    });
});