document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.md-header-banner');
    if (!banner) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            banner.classList.add('hidden');
        } else {
            banner.classList.remove('hidden');
        }
    });
});
