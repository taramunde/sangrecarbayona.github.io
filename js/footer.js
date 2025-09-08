/* footer.js */
$(document).ready(function() {
    const startYear = 2017;
    const currentYear = new Date().getFullYear();
    const yearRange = startYear + '-' + currentYear;
    document.getElementById('copyright-year').textContent = yearRange;
});
