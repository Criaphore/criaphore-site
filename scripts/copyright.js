document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        // Each page may say when its product started; Criaphore itself dates from 2024.
        const since = Number(yearSpan.dataset.since) || 2024;
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = since >= currentYear ? `${currentYear}` : `${since} - ${currentYear}`;
    }
});
