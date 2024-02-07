//Menu Navigation on Mobile

const menu = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("fa-bars")) {
        nav.classList.add('open-nav');
        menu.classList.replace("fa-bars", "fa-xmark");
    } else {
        nav.classList.remove('open-nav')
        menu.classList.replace("fa-xmark", "fa-bars");
    }
});


//Scroll Functions


// Function to scroll to the "About" section
function scrollToAbout() {
    document.querySelector(".about").scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector('a[href="#about"]').addEventListener('click', scrollToAbout);



// Function to scroll to the "Resume" section
function scrollToHome() {
    document.querySelector(".resume").scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector('a[href="#resume"]').addEventListener('click', scrollToHome);



// Function to scroll to the "Portfolio" section
function scrollToProjects() {
    document.querySelector(".portfolio").scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector('a[href="#portfolio"]').addEventListener('click', scrollToProjects);




// Function to scroll to the "Contact" section
function scrollToContact() {
    document.querySelector(".contact").scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector('a[href="#contact"]').addEventListener('click', scrollToContact);



const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate Name
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        name.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Validate Email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        email.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Please provide a valid email address';
        email.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        message.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If all validation passes, allow the form to submit
    return true;
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
