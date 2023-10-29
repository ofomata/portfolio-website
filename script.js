const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})



// Function to scroll to the "About" section
function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#about"]').addEventListener('click', scrollToAbout);

// Function to scroll to the "Home" section
function scrollToHome() {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#home"]').addEventListener('click', scrollToHome);

// Function to scroll to the "Projects" section
function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#projects"]').addEventListener('click', scrollToProjects);

// Function to scroll to the "Contact" section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#contact"]').addEventListener('click', scrollToContact);
