function addMessage(message, isUser) {
    const chatBox = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = isUser ? 'user-message' : 'other-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    
    if (message.trim() !== '') {
        addMessage(message, true);
        messageInput.value = '';

        setTimeout(function() {
            const response = "Obrigado por sua mensagem!";
            addMessage(response, false);
        }, 1000);
    }
}

document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('message-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = '/login';
  });

addMessage("Bem-vindo ao chat!", false);

const imageInput = document.getElementById('image-input');
const chatBox = document.getElementById('chat-box');

imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageElement = document.createElement('img');
            imageElement.src = event.target.result;
            chatBox.appendChild(imageElement);
        };
        reader.readAsDataURL(file);
    }
});
function openFile() {
    document.getElementById('imageInput').click();
  }

  function toggleMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.style.display = menuContainer.style.display === 'none' ? 'block' : 'none';
  }
  

