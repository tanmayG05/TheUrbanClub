const apiKey = '09b2e6f441e13905d45199bf8280de19'; // Replace with your OpenWeatherMap API key

// Define style recommendations
const styleRecommendations = {
    male: {
        'clear': [
            { src: 'stylepreoutfits/cas.jpg', name: 'Casual' },
            { src: 'stylepreoutfits/street.jpg', name: 'Streetwear' },
            { src: 'stylepreoutfits/preppy.jpg', name: 'Preppy' }
        ],
        'clouds': [
            { src: 'stylepreoutfits/bus-cas.jpg', name: 'Business Casual' },
            { src: 'stylepreoutfits/sport.jpg', name: 'Sporty' },
            { src: 'stylepreoutfits/class.jpg', name: 'Classic' }
        ],
        'rain': [
            { src: 'stylepreoutfits/rock.jpg', name: 'Rocker' },
            { src: 'stylepreoutfits/bohem.jpg', name: 'Bohemian' },
            { src: 'stylepreoutfits/vint.jpg', name: 'Vintage' }
        ],
        'haze': [
            { src: 'stylepreoutfits/minimal.jpg', name: 'Minimalist' },
            { src: 'stylepreoutfits/techwear.jpg', name: 'Techwear' },
            { src: 'stylepreoutfits/grunge.jpg', name: 'Grunge' }
        ],
        'thunderstorm': [
            { src: 'stylepreoutfits/utility.jpg', name: 'Utility' },
            { src: 'stylepreoutfits/goth.jpg', name: 'Goth' },
            { src: 'stylepreoutfits/layered.jpg', name: 'Layered' }
        ],
        'drizzle': [
            { src: 'stylepreoutfits/athleisure.jpg', name: 'Athleisure' },
            { src: 'stylepreoutfits/vintage.jpg', name: 'Vintage' },
            { src: 'stylepreoutfits/bohem.jpg', name: 'Bohemian' }
        ],
        'mist': [
            { src: 'stylepreoutfits/monochrome.jpg', name: 'Monochrome' },
            { src: 'stylepreoutfits/retro.jpg', name: 'Retro' },
            { src: 'stylepreoutfits/cas.jpg', name: 'Casual' }
        ]
    },
    female: {
        'clear': [
            { src: 'stylepreoutfits/casf.jpg', name: 'Casual' },
            { src: 'stylepreoutfits/chicf.jpg', name: 'Chic' },
            { src: 'stylepreoutfits/modern.jpg', name: 'Modern' }
        ],
        'clouds': [
            { src: 'stylepreoutfits/sportf.jpg', name: 'Sporty' },
            { src: 'stylepreoutfits/ele.jpg', name: 'Elegant' },
            { src: 'stylepreoutfits/classf.png', name: 'Classic' }
        ],
        'rain': [
            { src: 'stylepreoutfits/bohemf.jpg', name: 'Bohemian' },
            { src: 'stylepreoutfits/glam.jpg', name: 'Glamorous' },
            { src: 'stylepreoutfits/vintf.jpg', name: 'Vintage' }
        ],
        'haze': [
            { src: 'stylepreoutfits/minimalf.jpg', name: 'Minimalist' },
            { src: 'stylepreoutfits/urban.jpg', name: 'Urban' },
            { src: 'stylepreoutfits/indie.jpg', name: 'Indie' }
        ],
        'thunderstorm': [
            { src: 'stylepreoutfits/punk.jpg', name: 'Punk' },
            { src: 'stylepreoutfits/edgy.jpg', name: 'Edgy' },
            { src: 'stylepreoutfits/grungef.jpg', name: 'Grunge' }
        ],
        'drizzle': [
            { src: 'stylepreoutfits/vintagef.jpg', name: 'Vintage' },
            { src: 'stylepreoutfits/boho.jpg', name: 'Boho' },
            { src: 'stylepreoutfits/athleisuref.jpg', name: 'Athleisure' }
        ],
        'mist': [
            { src: 'stylepreoutfits/monochrome.jpg', name: 'Monochrome' },
            { src: 'stylepreoutfits/retro.jpg', name: 'Retro' },
            { src: 'stylepreoutfits/casual.jpg', name: 'Casual' }
        ]
    }
};

// Function to fetch weather and display style recommendations
async function fetchWeather() {
    const location = document.getElementById('location').value;
    const gender = document.getElementById('gender').value;
    const weatherInfo = document.getElementById('weather-info');
    const styleRecommendationsDiv = document.getElementById('style-recommendations');
    
    if (!location) {
        weatherInfo.textContent = 'Please enter a location.';
        styleRecommendationsDiv.innerHTML = '';
        return;
    }

    try {
        // Step 1: Get weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=en`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const temperature = data.main.temp;
        const weather = data.weather[0].main.toLowerCase(); // Use weather main type (e.g., 'clear', 'clouds', 'rain')
        console.log('Weather condition:', weather); // Debugging line
        weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Weather: ${data.weather[0].description}`;

        // Step 2: Recommend styles based on weather and gender
        const recommendations = styleRecommendations[gender][weather] || [];
        
        styleRecommendationsDiv.innerHTML = '<h3>Recommended Styles:</h3>';
        if (recommendations.length === 0) {
            styleRecommendationsDiv.innerHTML += '<p>No style recommendations available for this weather.</p>';
        } else {
            recommendations.forEach(style => {
                styleRecommendationsDiv.innerHTML += `
                    <div class="style-item">
                        <img src="${style.src}" alt="${style.name}">
                        <span>${style.name}</span>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error('Error:', error); // Log the error to the console
        weatherInfo.textContent = 'Error fetching weather data.';
        styleRecommendationsDiv.innerHTML = '';
    }
}

// Function to navigate to style.html
function navigateToStyle() {
    // Debugging line to check if function is called
    console.log('Navigating to style.html...');
    window.location.href = 'style.html';
}

// Function to show the sidebar
function showSidebar() {
    document.querySelector('.sidebar').classList.add('show');
}
// Show the sidebar on page load
window.onload = showSidebar;


function openLogoutModal() {
document.getElementById('logoutModal').classList.add('show');
}

function closeLogoutModal() {
document.getElementById('logoutModal').classList.remove('show');
}

function logout() {
window.location.href = 'homex.html'; // Redirect to the desired page after logout
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
if (event.target == document.getElementById('logoutModal')) {
    closeLogoutModal();
}
}