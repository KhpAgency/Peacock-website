// Simulate a delay to hide the preloader and show the main content
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');

    // Replace 2000 with the actual time it takes for your content to load
    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000);
});
