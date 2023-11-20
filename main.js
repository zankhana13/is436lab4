function loadPage(page) {
    const mainContent = document.getElementById('mainContent');

    // Fetch the content of the selected page
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the Home page by default
document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');
});
