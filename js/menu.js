const menuButton = document.getElementById('menuButton');
        const navMenu = document.getElementById('navMenu');
        
        menuButton.addEventListener('click', () => {
          menuButton.classList.toggle('active');
          navMenu.classList.toggle('active');
        });