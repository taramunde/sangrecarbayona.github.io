// js/calendar.js
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date().getDate();
const todayMonth = new Date().getMonth();
const todayYear = new Date().getFullYear();

const notes = {
    
            
            
            
            
            '2026-05-03': {
                text: 'Jornada 34<br> Real Betis - Real Oviedo<br>18:30',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/J49HDXVF/Real-Betis-Balompi-2016.jpg',
                shieldUrlRight: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png'
            },
            '2026-05-10': {
                text: 'Jornada 35<br> Real Oviedo - Getafe C.F.<br>18:30',
                color: 'blue',
                shieldUrlLeft: 'https://i.postimg.cc/2yPVD3F0/Real-Oviedo-2019-actualidad.png',
                shieldUrlRight: 'https://i.postimg.cc/kXgS8Cp0/Getafe-C-F-2018.jpg'
            },
            '2026-05-14': {
                text: 'Jornada 36<br> Real Madrid - Real Oviedo<br>21:30',
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

const blinkingDays = ['2026-05-03', '2026-05-10', '2026-05-14', '2026-05-17', '2026-05-24'];

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
