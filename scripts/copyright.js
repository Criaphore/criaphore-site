document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = `2024 - ${currentYear}`;
    }
});
