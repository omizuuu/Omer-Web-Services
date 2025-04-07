document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle the dropdown menu when the hamburger is clicked
    hamburger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show'); // Add or remove the 'show' class
    });
});