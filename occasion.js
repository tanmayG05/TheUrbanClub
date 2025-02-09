let selectedOccasion = '';

function selectOccasion(occasion) {
    selectedOccasion = occasion;
    // Highlight selected widget (optional)
    const widgets = document.querySelectorAll('.occasion-widget');
    widgets.forEach(widget => widget.style.borderColor = '#ddd');
    event.currentTarget.style.borderColor = '#007bff';
}

function submitOccasion() {
    if (selectedOccasion) {
        localStorage.setItem('selectedOccasion', selectedOccasion);
        window.location.href = 'main.html';
    } else {
        alert('Please select an occasion.');
    }
}


        function openLogoutModal() {
            document.getElementById('logoutModal').classList.add('show');
        }

        function closeLogoutModal() {
            document.getElementById('logoutModal').classList.remove('show');
        }

        function confirmLogout() {
            // Implement logout functionality here
            console.log('Logging out...');
            closeLogoutModal();
        }