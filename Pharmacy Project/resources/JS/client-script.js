const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.client-section');
const logoutBtn = document.querySelector('.logout');

if (menuItems && sections && logoutBtn) {
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            menuItems.forEach(mi => mi.classList.remove('active'));
            this.classList.add('active');
            
            const sectionName = this.getAttribute('data-section');
            
            sections.forEach(section => section.classList.remove('active'));
            
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    logoutBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}