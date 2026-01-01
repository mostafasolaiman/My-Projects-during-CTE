// load users
fetch('../json/users.json')
    .then(response => response.json())
    .then(users => {
    console.log('Users:', users);
    })
    .catch(error => console.error('Error loading users:', error));

// load inventory
fetch('../json/inventory.json')
    .then(response => response.json())
    .then(inventory => {
    console.log('Inventory:', inventory);
    })
    .catch(error => console.error('Error loading inventory:', error));

// load transactions
fetch('../json/transactions.json')
    .then(response => response.json())
    .then(transactions => {
    console.log('Transactions:', transactions);
    })
    .catch(error => console.error('Error loading transactions:', error));


    // login page
const loginBtn = document.getElementById('btn-login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userTypeSelect = document.getElementById('userType');

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    const userType = userTypeSelect.value;
    
    if (!username || !password || !userType) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }
    
    if (userType === 'staff') {
        window.location.href = '../HTML/staff.html';
    } else if (userType === 'client') {
        window.location.href = '../HTML/client.html';
    }
});