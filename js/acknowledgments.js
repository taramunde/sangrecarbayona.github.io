// js/acknowledgments.js
document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');
    let activeCollapsible = null;

    console.log('Botones desplegables encontrados:', coll.length); // Depuración

    if (coll.length === 0) {
        console.warn('No se encontraron botones con clase .collapsible');
        return;
    }

    function closeActiveContent() {
        if (activeCollapsible) {
            activeCollapsible.classList.remove('active');
            const content = activeCollapsible.nextElementSibling;
            content.style.display = 'none';
            activeCollapsible = null;
        }
    }

    coll.forEach(button => {
        button.addEventListener('click', function (event) {
            if (activeCollapsible && activeCollapsible !== this) {
                closeActiveContent();
            }

            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            activeCollapsible = content.style.display === 'block' ? this : null;

            event.stopPropagation();
        });
    });

    document.addEventListener('click', closeActiveContent);
});
