const form = document.querySelector('.form-subscribe')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('emailAddress').value;
    let data = {
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem(email, convertData)

    alert("Email enviado!")

})
