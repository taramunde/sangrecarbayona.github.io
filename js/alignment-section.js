// js/alignment-section.js
document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(coll => {
        coll.addEventListener("click", function (event) {
            // Cierra todos los demás contenidos abiertos
            collapsibles.forEach(otherColl => {
                if (otherColl !== coll && otherColl.classList.contains("active")) {
                    otherColl.classList.remove("active");
                    otherColl.nextElementSibling.style.display = "none";
                }
            });

            // Alterna el contenido actual
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";

            event.stopPropagation();
        });
    });

    // Cierra todos los contenidos al hacer clic fuera
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".collapsible")) {
            collapsibles.forEach(coll => {
                coll.classList.remove("active");
                coll.nextElementSibling.style.display = "none";
            });
        }
    });
});
