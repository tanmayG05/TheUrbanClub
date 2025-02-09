let selectedStyles = [];

        const styleItems = {
            male: [
                { src: 'stylepreoutfits/cas.jpg', name: 'Casual' },
                { src: 'stylepreoutfits/for.jpg', name: 'Formal' },
                { src: 'stylepreoutfits/bus-cas.jpg', name: 'BusinessCasual' },
                { src: 'stylepreoutfits/sport.jpg', name: 'Sporty' },
                { src: 'stylepreoutfits/prep.jpeg', name: 'Preppy' },
                { src: 'stylepreoutfits/street.jpg', name: 'Streetwear' },
                { src: 'stylepreoutfits/class.jpg', name: 'Classic' },
                { src: 'stylepreoutfits/vint.jpg', name: 'Vintage' },
                { src: 'stylepreoutfits/rock.jpg', name: 'Rocker' },
                { src: 'stylepreoutfits/bohem.jpg', name: 'Bohemian' },
                { src: 'stylepreoutfits/min.jpg', name: 'Minimalist' },
                { src: 'stylepreoutfits/retro.jpg', name: 'Retro' },
                { src: 'stylepreoutfits/urban.png', name: 'Urban' },
                { src: 'stylepreoutfits/fall.jpg', name: 'FallSeason' },
                { src: 'stylepreoutfits/spring.jpg', name: 'Spring' },
                { src: 'stylepreoutfits/tradm.jpg', name: 'Traditional' },
                { src: 'stylepreoutfits/beachm.jpg', name: 'Beach' }
            ],
            female: [
                { src: 'stylepreoutfits/casf.jpg', name: 'Casual' },
                { src: 'stylepreoutfits/forf.jpg', name: 'Formal' },
                { src: 'stylepreoutfits/buscasf.jpg', name: 'BusinessCasual' },
                { src: 'stylepreoutfits/sportf.jpg', name: 'Sporty' },
                { src: 'stylepreoutfits/chicf.jpg', name: 'Chic' },
                { src: 'stylepreoutfits/bohemf.jpg', name: 'Bohemian' },
                { src: 'stylepreoutfits/vintf.jpg', name: 'Vintage' },
                { src: 'stylepreoutfits/classf.png', name: 'Classic' },
                { src: 'stylepreoutfits/glam.jpg', name: 'Glamorous' },
                { src: 'stylepreoutfits/ele.jpg', name: 'Elegant' },
                { src: 'stylepreoutfits/rom.jpg', name: 'Romantic' },
                { src: 'stylepreoutfits/minf.jpg', name: 'Minimalist' },
                { src: 'stylepreoutfits/streetf.jpg', name: 'Streetwear' },
                { src: 'stylepreoutfits/prepf.jpg', name: 'Preppy' },
                { src: 'stylepreoutfits/modern.jpg', name: 'Modern' },
                { src: 'stylepreoutfits/retf.jpg', name: 'Retro' },
                { src: 'stylepreoutfits/tradf.jpg', name: 'Traditional' },
                { src: 'stylepreoutfits/beachf.jpg', name: 'Beach' }
            ]
        };

        function showGenderModal() {
            document.getElementById('genderModal').style.display = 'flex';
        }

        function selectGender(gender) {
            document.getElementById('genderModal').style.display = 'none';
            localStorage.setItem('selectedGender', gender); // Store gender selection
            populateStyles(gender);
        }

        function populateStyles(gender) {
            const grid = document.getElementById('style-grid');
            grid.innerHTML = '';
            styleItems[gender].forEach(item => {
                const styleItem = document.createElement('div');
                styleItem.classList.add('style-item');
                styleItem.dataset.name = item.name;
                styleItem.innerHTML = `
                    <img src="${item.src}" alt="${item.name}">
                    <p>${item.name}</p>
                `;
                styleItem.addEventListener('click', () => {
                    toggleStyle(item.name, styleItem);
                });
                grid.appendChild(styleItem);
            });
        }

        function toggleStyle(name, element) {
            if (selectedStyles.includes(name)) {
                selectedStyles = selectedStyles.filter(style => style !== name);
                element.classList.remove('selected');
            } else {
                selectedStyles.push(name);
                element.classList.add('selected');
            }
        }

        function submitPreferences() {
            if (selectedStyles.length > 0) {
                localStorage.setItem('selectedStyles', JSON.stringify(selectedStyles)); // Store selected styles
                window.location.href = 'main.html'; // Redirect to the next page
            } else {
                alert('Please select at least one style preference before submitting.');
            }
        }

        function navigateToStyle() {
            window.location.href = 'occasion.html';
        }

        function showSidebar() {
            document.querySelector('.sidebar').classList.add('show');
        }

        window.onload = function() {
            showSidebar();
            showGenderModal();
        }

        function logout() {
            window.location.href = 'homex.html';
        }