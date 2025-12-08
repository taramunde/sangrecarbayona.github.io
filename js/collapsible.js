// js/collapsible.js
document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');
    let activeCollapsible = null;

    console.log('Botones desplegables encontrados:', collapsibles.length);

    if (collapsibles.length === 0) {
        console.warn('No se encontraron botones con clase .collapsible');
        return;
    }

    function closeActiveContent() {
        if (activeCollapsible) {
            activeCollapsible.classList.remove('active');
            const content = activeCollapsible.nextElementSibling;
            if (content) {
                content.style.display = 'none';
            }
            activeCollapsible = null;
        }
    }

    collapsibles.forEach(button => {
        button.addEventListener('click', function (event) {
            if (activeCollapsible && activeCollapsible !== this) {
                closeActiveContent();
            }

            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
                activeCollapsible = content.style.display === 'block' ? this : null;
            } else {
                console.warn('No se encontró .collapsible-content para este botón:', this);
            }

            event.stopPropagation();
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.collapsible') && !event.target.closest('.collapsible-content')) {
            closeActiveContent();
        }
    });
});
