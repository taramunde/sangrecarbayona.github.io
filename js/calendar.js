// js/calendar.js
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date().getDate();
const todayMonth = new Date().getMonth();
const todayYear = new Date().getFullYear();

const notes = {
    
            
            
            '2026-01-31': {
                text: 'Jornada 22<br> Real Oviedo - Girona F.C.<br>14:00',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/d0xBnVnf/Girona-F-C-2025.png'
            },
            '2026-02-07': {
                text: 'Jornada 23<br> Rayo Vallecano - Real Oviedo<br>14:00',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/153WzLct/Rayo-Vallecano-de-Madrid-B-2007.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-02-15': {
                text: 'Jornada 24<br> Real Oviedo - Athletic Club<br>14:00',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/wvk3Y2Hv/Athletic-Club-2025.png'
            },
            '2026-02-22': {
                text: 'Jornada 25<br> Real Sociedad - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/GtykfwWL/Real-Sociedad-de-F-tbol-2002.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-03-01': {
                text: 'Jornada 26<br> Real Oviedo - Atlético de Madrid<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/MT6NxX9P/Club-Atl-tico-de-Madrid-2000.jpg'
            },
            '2026-03-08': {
                text: 'Jornada 27<br> R.C.D. Espanyol - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/ydBThzdg/RCD-Espanyol-2023.png',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-03-15': {
                text: 'Jornada 28<br> Real Oviedo - Valencia C.F.<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/MT6NxX9P/Club-Atl-tico-de-Madrid-2000.jpg'
            },
            '2026-03-22': {
                text: 'Jornada 29<br> Levante U.D. - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/W1FCSyhH/Levante-U-D-PNG.png',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-04-05': {
                text: 'Jornada 30<br> Real Oviedo - Sevilla F.C.<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/KzFSjx5V/Sevilla-F-C-2020.jpg'
            },
            '2026-04-12': {
                text: 'Jornada 31<br> Celta de Vigo - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/GtF1h6kz/R-C-Celta-de-Vigo-2016.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-04-19': {
                text: 'Jornada 32<br> Real Oviedo - Elche C.F.<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/Kj439Dfc/Elche-C-F-2023-PNG.png'
            },
            '2026-04-22': {
                text: 'Jornada 33<br> Real Oviedo - Villarreal C.F.<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/wBRLMdBh/Villarreal-C-F-B-2020.jpg'
            },
            '2026-05-03': {
                text: 'Jornada 34<br> Real Betis - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/J49HDXVF/Real-Betis-Balompi-2016.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-05-10': {
                text: 'Jornada 35<br> Real Oviedo - Getafe C.F.<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/kXgS8Cp0/Getafe-C-F-2018.jpg'
            },
            '2026-05-13': {
                text: 'Jornada 36<br> Real Madrid - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/FHcQ5ZGr/Real-Madrid-2022.png',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-05-17': {
                text: 'Jornada 37<br> Real Oviedo - Deportivo Alavés<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/Jzk39hHH/Alav-s.jpg'
            },
            '2026-05-24': {
                text: 'Jornada 38<br> R.C.D. Mallorca - Real Oviedo<br>--:--',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/PryB3WKL/R-C-D-Mallorca-1996.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            }
};

const blinkingDays = ['2026-01-31', '2026-02-07', '2026-02-15', '2026-02-22', '2026-03-01', '2026-03-08', '2026-03-15', '2026-03-22', '2026-04-05', '2026-04-12', '2026-04-19', '2026-04-22', '2026-05-03', '2026-05-10', '2026-05-13', '2026-05-17', '2026-05-24'];

function renderCalendar() {
    const monthName = document.getElementById('monthName');
    const daysContainer = document.getElementById('days');

    monthName.innerText = `${monthNames[currentMonth]} ${currentYear}`;
    daysContainer.innerHTML = generateMonthHTML(currentYear, currentMonth);

    const dayElements = daysContainer.getElementsByClassName('day');
    for (let dayElement of dayElements) {
        dayElement.addEventListener('click', handleDayClick);
    }
}

function generateMonthHTML(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    let html = '';

    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedFirstDay; i++) {
        html += `<div class="day"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = (day === today && month === todayMonth && year === todayYear);
        const dateString = `${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const fullDateString = `${year}-${dateString}`;

        let hasNoteClass = '';
        if (notes[fullDateString]) {
            hasNoteClass = `has-note has-note-${notes[fullDateString].color}`;
        }

        const shouldBlink = blinkingDays.includes(fullDateString);

        if (shouldBlink) {
            html += `<div class="day ${isToday ? 'today' : ''} ${hasNoteClass} blinking-border" data-date="${fullDateString}">${day}</div>`;
        } else {
            html += `<div class="day ${isToday ? 'today' : ''} ${hasNoteClass}" data-date="${fullDateString}">${day}</div>`;
        }
    }

    return html;
}

function handleDayClick(event) {
    const dateString = event.target.getAttribute('data-date');
    const notePopup = document.getElementById('note-popup');

    if (dateString && notes[dateString]) {
        const note = notes[dateString];
        notePopup.innerHTML = `
            <div class="note-header">
                <img src="${note.shieldUrlLeft}" alt="Escudo Izquierdo" class="shield-icon">
                <hr>
                <img src="${note.shieldUrlRight}" alt="Escudo Derecho" class="shield-icon">
            </div>
            <div class="note-text">${note.text}</div>
        `;
        notePopup.style.borderColor = note.color;
        notePopup.style.display = 'block';

        const rect = event.target.getBoundingClientRect();
        const calendarRect = document.querySelector('.calendar').getBoundingClientRect();

        notePopup.style.borderWidth = '2px';
        notePopup.style.top = `${rect.bottom - calendarRect.top + 5}px`;
        notePopup.style.left = `${rect.left - calendarRect.left}px`;
    } else {
        notePopup.style.display = 'none';
    }
}

document.getElementById('prev').onclick = function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
};

document.getElementById('next').onclick = function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
};

document.addEventListener('click', function(event) {
    const notePopup = document.getElementById('note-popup');
    if (!event.target.closest('.day') && !event.target.closest('#note-popup')) {
        notePopup.style.display = 'none';
    }
});

renderCalendar();
