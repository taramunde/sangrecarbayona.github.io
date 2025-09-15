// js/timer.js
function updateTimer() {
    const future = Date.parse("Sep 7, 2025 18:30:00"); // Fecha del próximo partido (Real Oviedo vs FC Barcelona)
    const now = new Date();
    const diff = future - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;
    document.getElementById("timer").innerHTML =
        '<div>' + d + '<span>Días</span></div>' +
        '<div>' + h + '<span>Horas</span></div>' +
        '<div>' + m + '<span>Minutos</span></div>' +
        '<div>' + s + '<span>Segundos</span></div>';
}
setInterval(updateTimer, 1000);
