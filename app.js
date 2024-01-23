const ham = document.querySelector('.ham');

ham.addEventListener('click', () => {
  const mobile_nav = document.querySelector('.mobile-nav');
  mobile_nav.classList.toggle('open');
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  let isValid = true;

  // Validate First Name
  const firstName = document.getElementById('firstname');
  if (!firstName.value.trim()) {
    isValid = false;
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }

  // Validate Last Name
  const lastName = document.getElementById('lastname');
  if (!lastName.value.trim()) {
    isValid = false;
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }

  // Validate Email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    isValid = false;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Validate Phone Number
  const phoneNumber = document.getElementById('number');
  const phoneNumberRegex = /^\d{10}$/; // Change this regex based on your phone number validation
  if (!phoneNumberRegex.test(phoneNumber.value.trim())) {
    isValid = false;
    phoneNumber.classList.add('error');
  } else {
    phoneNumber.classList.remove('error');
  }

  // Validate Message
  const message = document.getElementById('message');
  if (!message.value.trim()) {
    isValid = false;
    message.classList.add('error');
  } else {
    message.classList.remove('error');
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
    alert('Kindly check the fields');
    message.classList.add('error');
    phoneNumber.classList.add('error');
    email.classList.add('error');
    lastName.classList.add('error');
    firstName.classList.add('error');
  }
});
