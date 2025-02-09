function loadProfiles() {
    const submittedProfiles = JSON.parse(localStorage.getItem('submittedOutfits')) || [];
    const savedProfiles = JSON.parse(localStorage.getItem('savedOutfits')) || [];

    const submittedOutfitsContainer = document.querySelector('#submitted-outfits .outfit-list');
    const savedOutfitsContainer = document.querySelector('#saved-outfits .outfit-list');

    // Display submitted outfits
    submittedOutfitsContainer.innerHTML = submittedProfiles.length > 0 ? 
        submittedProfiles.map((profile, index) => `
            <div class="profile-card">
                <p><strong>Profile #${index + 1}</strong></p>
                <p><strong>Occasion:</strong> ${profile.occasion || 'None'}</p>
                <ul>${profile.outfit.map(item => `<li>${item}</li>`).join('')}</ul>
                <button class="delete-btn" onclick="deleteProfile('submittedOutfits', ${index})">Delete Outfit</button>
            </div>
        `).join('') : '<p>No submitted outfits available.</p>';

    // Display saved outfits for later
    savedOutfitsContainer.innerHTML = savedProfiles.length > 0 ? 
        savedProfiles.map((profile, index) => `
            <div class="profile-card">
                <p><strong>Profile #${index + 1}</strong></p>
                <p><strong>Date:</strong> ${profile.date}</p>
                <p><strong>Name:</strong> ${profile.name}</p>
                <p><strong>Gender:</strong> ${profile.gender}</p>
                <p><strong>Occasion:</strong> ${profile.occasion}</p>
                <ul>${profile.outfit.map(item => `<li>${item}</li>`).join('')}</ul>
                <button class="delete-btn" onclick="deleteProfile('savedOutfits', ${index})">Delete Outfit</button>
            </div>
        `).join('') : '<p>No saved outfits available.</p>';
}

    function deleteProfile(type, index) {
        const profiles = JSON.parse(localStorage.getItem(type)) || [];
        profiles.splice(index, 1);
        localStorage.setItem(type, JSON.stringify(profiles));
        loadProfiles();
    }

    function logout() {
        alert('Logged out!');
        window.location.href = 'homex.html';
    }

    document.addEventListener('DOMContentLoaded', loadProfiles);