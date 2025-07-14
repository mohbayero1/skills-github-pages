const loginForm = document.getElementById('login-form');
const openAccountForm = document.getElementById('open-account-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add login logic here
console.log(Login attempt with username: ${username} and password: ${password});
});

openAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nin = document.getElementById('nin').value;
    const bvn = document.getElementById('bvn').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add account opening logic here
    console.log(Account opening attempt with NIN: ${nin}, BVN: ${bvn}, Phone Number: ${phoneNumber}, Username: ${username}, and Password: ${password});
