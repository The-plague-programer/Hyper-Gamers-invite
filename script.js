// Function to hide all content sections
const hideSections = () => {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
};

// Add click event to hexagons to show the relevant section
const hexagons = document.querySelectorAll('.hexagon');
hexagons.forEach(hex => {
    hex.addEventListener('click', () => {
        // Hide all sections before displaying the clicked one
        hideSections();

        // Show the section corresponding to the clicked hexagon
        const contentType = hex.getAttribute('data-content');
        const section = document.getElementById(`${contentType}-section`);
        section.style.display = 'block';
    });
});

// Theme toggle functionality
const switchButton = document.getElementById('switch');
const toggleTheme = () => {
    switchButton.classList.toggle('checked');
    document.documentElement.classList.toggle('dark-theme');
};
switchButton.addEventListener('click', toggleTheme);
