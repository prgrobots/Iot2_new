document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.md-header-banner');
    if (!banner) return;
    
    // Add parallax class
    banner.classList.add('parallax');
    
    // Hide banner on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            banner.classList.add('hidden');
        } else {
            banner.classList.remove('hidden');
        }
    });
    
    // Optional: Enhanced parallax effect with transform
    window.addEventListener('scroll', function() {
        if (window.scrollY <= 200) {
            const offset = window.scrollY * 0.5;
            banner.style.backgroundPosition = `center ${offset}px`;
        }
    });
});
