var password = document.getElementById('password').value;
var phone = document.getElementById('phone').value;

var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var phoneRegex = /^\d{10}$/;

if (!name || !email || !password || !phone) {
    alert('Todos los campos son obligatorios.');
    return;
}

if (!nameRegex.test(name)) {
    alert('El nombre solo puede contener letras y espacios.');
    return;
}

if (!emailRegex.test(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
}

if (!passwordRegex.test(password)) {
    alert('La contraseña debe tener entre 6 y 16 caracteres y solo puede contener letras, números y los caracteres especiales !@#$%^&*');
    return;
}

if (!phoneRegex.test(phone)) {
    alert('Por favor, introduce un número de teléfono válido de 10 dígitos sin espacios ni caracteres especiales.');
    return;
}

var confirmationMessageElement = document.getElementById('confirmationMessage');
confirmationMessageElement.style.display = 'inline-block';