const staffMenuItems = document.querySelectorAll('.staff-menu-item');
const staffSections = document.querySelectorAll('.section');
const staffLogoutBtn = document.querySelector('.staff-logout');

if (staffMenuItems && staffSections && staffLogoutBtn) {
    
    staffMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            staffMenuItems.forEach(mi => mi.classList.remove('active'));
            this.classList.add('active');
            
            const sectionName = this.getAttribute('data-section');
            
            staffSections.forEach(section => section.classList.remove('active'));
            
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    staffLogoutBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}

let users = [];
let inventory = [];
let transactions = [];

fetch('../json/users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
        console.log('Users loaded:', users);
    })
    .catch(error => console.error('Error loading users:', error));

fetch('../json/inventory.json')
    .then(response => response.json())
    .then(data => {
        inventory = data;
        console.log('Inventory loaded:', inventory);
    })
    .catch(error => console.error('Error loading inventory:', error));

fetch('../json/transactions.json')
    .then(response => response.json())
    .then(data => {
        transactions = data;
        console.log('Transactions loaded:', transactions);
    })
    .catch(error => console.error('Error loading transactions:', error));