document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const animeList = document.getElementById('animeList');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close');

    // Example anime data with image URLs and website URLs
    const animeData = [
        { title: 'Naruto', description: 'Naruto Uzumaki wants to become the Hokage', image: 'images/naruto.jpg', url: 'https://4anime.gg/naruto-find-the-crimson-four-leaf-clover-5694' },
        { title: 'One Piece', description: 'Monkey D. Luffy sets sail to find the legendary One Piece', image: 'images/One_Piece,_Volume_61_Cover_(Japanese).jpg', url: 'https://4anime.gg/one-piece-film-red-18236' },
        { title: 'Attack on Titan', description: 'Eren Yeager fights against giant humanoid creatures known as Titans', image: 'images/p10701949_b_v8_ah.jpg', url: 'https://4anime.gg/attack-on-titan-112' },
        // Add more anime data...
    ];

    // Display anime cards on page load
    displayAnime(animeData);

    // Search functionality
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const filteredAnime = animeData.filter(anime =>
            anime.title.toLowerCase().includes(query) || anime.description.toLowerCase().includes(query)
        );
        displayAnime(filteredAnime);
    });

    // Anime card click event to open modal or navigate to the website
    animeList.addEventListener('click', function (event) {
        const animeCard = event.target.closest('.anime-card');
        if (animeCard) {
            const title = animeCard.querySelector('h2').textContent;
            const description = animeCard.querySelector('p').textContent;

            // Check if the clicked element is an anchor tag (URL is defined)
            if (animeCard.dataset.url) {
                window.location.href = animeCard.dataset.url;
            } else {
                showModal(title, description);
            }
        }
    });

    // Modal close button event
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Display anime cards
    function displayAnime(animeData) {
        animeList.innerHTML = '';
        animeData.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.classList.add('anime-card');
            animeCard.dataset.url = anime.url; // Set data-url attribute

            const title = document.createElement('h2');
            title.textContent = anime.title;

            const image = document.createElement('img');
            image.src = anime.image;
            image.alt = anime.title;

            const description = document.createElement('p');
            description.textContent = anime.description;

            animeCard.appendChild(image);
            animeCard.appendChild(title);
            animeCard.appendChild(description);

            animeList.appendChild(animeCard);
        });
    }

    // Display modal with detailed anime information
    function showModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
    }
});
