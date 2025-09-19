document.addEventListener('DOMContentLoaded', function() {
    const seasonButton = document.getElementById('season-button');
    const seasonContainer = document.getElementById('season-container');
    const closeButton = document.getElementById('close-button');

    seasonButton.addEventListener('click', function() {
        const isOpen = seasonContainer.classList.contains('open');
        if (isOpen) {
            seasonContainer.classList.remove('open');
            seasonButton.setAttribute('aria-expanded', 'false');
        } else {
            seasonContainer.classList.add('open');
            seasonButton.setAttribute('aria-expanded', 'true');
        }
    });

    closeButton.addEventListener('click', function() {
        seasonContainer.classList.remove('open');
        seasonButton.setAttribute('aria-expanded', 'false');
    });
});
