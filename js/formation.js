document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId, clickedButton) {
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.classList.add('hidden');
        });

        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        const selectedContent = document.getElementById(tabId);
        if (selectedContent) {
            selectedContent.classList.add('active');
            selectedContent.classList.remove('hidden');
        }

        clickedButton.classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            showTab(tabId, this);
        });
    });
});