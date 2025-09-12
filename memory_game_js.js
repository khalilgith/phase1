// 4. RANDOMLY ASSIGN CARD SYMBOLS
const cardSymbols = [
    '🎯', '🎨', '🎭', '🎪', '🚀', '⭐', '🌟', '🎈',
    '🎯', '🎨', '🎭', '🎪', '🚀', '⭐', '🌟', '🎈'
];

// Shuffle function to randomly assign symbols
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create the game board with cards
function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    const shuffledSymbols = shuffleArray(cardSymbols);

    // Clear existing cards
    gameBoard.innerHTML = '';

    // Create 16 cards (4x4 grid)
    for (let i = 0; i < 16; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.symbol = shuffledSymbols[i];
        card.dataset.index = i;

        // 2. CARD WITH FRONT AND BACK FACE
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front"></div>
                <div class="card-face card-back">${shuffledSymbols[i]}</div>
            </div>
        `;

        // Add click event to flip card
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        gameBoard.appendChild(card);
    }
}

// Demo functions
function flipRandomCard() {
    const cards = document.querySelectorAll('.card');
    const randomIndex = Math.floor(Math.random() * cards.length);
    cards[randomIndex].classList.toggle('flipped');
}

function flipAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('flipped');
    });
}

function resetCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
}

// Initialize the game board when page loads
document.addEventListener('DOMContentLoaded', function() {
    createGameBoard();
});