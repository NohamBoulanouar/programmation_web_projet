document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('trombi-search');
    const personCards = document.querySelectorAll('.person-card');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        personCards.forEach(card => {
            const keywords = card.getAttribute('data-keywords').toLowerCase();
            if (keywords.includes(searchTerm) || searchTerm === '') {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});