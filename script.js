//chatbot interface
document.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('messageInput');
    var sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        var messageText = messageInput.value.trim();

        if (messageText === '') {
            return;
        }

        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'sent');

        var profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');
        var img = document.createElement('img');
        img.src = 'img/Popular Anime And Cartoon Characters Made Into Rugs By A Carpet Nerd (32 Pics).jpg';
        img.alt = 'User Avatar';
        profilePicture.appendChild(img);

        var messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = messageText;

        messageContainer.appendChild(profilePicture);
        messageContainer.appendChild(messageContent);

        document.querySelector('.messages').appendChild(messageContainer);

        messageInput.value = '';
        messageInput.focus();

        // Simulate bot response after a short delay
        setTimeout(function() {
            receiveMessage();
        }, 1000);
    }

    function receiveMessage() {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'received');

        var profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');
        var img = document.createElement('img');
        img.src = 'img/bot_pfp_x2.svg';
        img.alt = 'Bot Avatar';
        profilePicture.appendChild(img);

        var messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = 'Hello Brother!'; // Replace with actual bot response

        messageContainer.appendChild(profilePicture);
        messageContainer.appendChild(messageContent);

        document.querySelector('.messages').appendChild(messageContainer);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.getElementById('nav-bar');
    const mainContent = document.querySelector('.main-content');
    const chatContainer = document.querySelector('.chat-container');

    navToggle.addEventListener('change', function() {
        if (window.innerWidth <= 768) {
            if (navToggle.checked) {
                navBar.style.zIndex = '9999';
                mainContent.style.marginLeft = '0';
                chatContainer.style.marginLeft = '0';
            } else {
                navBar.style.zIndex = '1';
            }
        } else {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                mainContent.style.marginLeft = 'calc(var(--navbar-width) - 60px)'; // Adjusted value
                chatContainer.style.marginLeft = 'calc(var(--navbar-width) - 60px)'; // Adjusted value
            } else {
                mainContent.style.marginLeft = 'var(--navbar-width-min)';
                chatContainer.style.marginLeft = 'var(--navbar-width-min)';
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                mainContent.style.marginLeft = 'calc(var(--navbar-width) - 32px)'; // Adjusted value
                chatContainer.style.marginLeft = 'calc(var(--navbar-width) - 32px)'; // Adjusted value
            } else {
                mainContent.style.marginLeft = 'var(--navbar-width-min)';
                chatContainer.style.marginLeft = 'var(--navbar-width-min)';
            }
        } else {
            mainContent.style.marginLeft = '0';
            chatContainer.style.marginLeft = '0';
        }
    });
});

//landing page

// Smooth scrolling to a section
document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.hero .btn-primary');
    heroButton.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector('.section-to-scroll-to');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// JavaScript for feature items interactivity
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)'; // Lifts the feature item slightly on hover
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'; // Enhances shadow on hover
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });
    });
});

//ticket
// Sample ticket data
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-view');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Viewing ticket details...');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.getElementById('nav-bar');
    const ticketTable = document.querySelector('.ticket-table');
    const ticketcontainer = document.querySelector('.container');

    navToggle.addEventListener('change', function() {
        if (window.innerWidth <= 768) {
            if (navToggle.checked) {
                navBar.style.zIndex = '9999';
                ticketTable.style.marginLeft = '0';
                ticketcontainer.style.marginLeft = '0';
            } else {
                navBar.style.zIndex = '1';
            }
        } else {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                ticketTable.style.marginLeft = 'calc(var(--navbar-width) - 150px)'; // Adjusted value
                ticketcontainer.style.marginLeft = 'calc(var(--navbar-width) - 150px)'; // Adjusted value
            } else {
                ticketTable.style.marginLeft = 'calc(var(--navbar-width-min)-30px)';
                ticketcontainer.style.marginLeft = 'calc(var(--navbar-width-min)-30px)';
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                mainContent.style.marginLeft = 'calc(var(--navbar-width) - 150px)'; // Adjusted value
                chatContainer.style.marginLeft = 'calc(var(--navbar-width) - 150px)'; // Adjusted value
            } else {
                mainContent.style.marginLeft = 'calc(var(--navbar-width-min)-30px)';
                chatContainer.style.marginLeft = 'calc(var(--navbar-width-min)-30px)';
            }
        } else {
            mainContent.style.marginLeft = '0';
            chatContainer.style.marginLeft = '0';
        }
    });
});

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
    });
});