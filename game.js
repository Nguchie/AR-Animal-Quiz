// Define the animals and their models
const animals = [
    { name: "cat", model: "./assets/cat.glb" },
    { name: "rat", model: "./assets/rat.glb" },
    { name: "toad", model: "./assets/toad.glb" },
    { name: "lioness", model: "./assets/lioness.glb" },
];

let correctAnimal; // Track the correct animal for the current round

// Start the game
function startGame() {
    // Show the game screen and hide other screens
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('win-screen').style.display = 'none';
    document.getElementById('lose-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    // Load a random animal
    loadRandomAnimal();
}

// Load a random animal and display it in AR
function loadRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];
    correctAnimal = selectedAnimal.name; // Save the correct answer

    // Set the 3D model for the selected animal
    const animalEntity = document.querySelector('#animal-model');
    animalEntity.setAttribute('gltf-model', selectedAnimal.model);

    // Generate answer options
    createOptions();
}

// Generate answer options as buttons
function createOptions() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    // Shuffle and create option buttons
    const shuffled = [...animals].sort(() => 0.5 - Math.random());
    shuffled.forEach(animal => {
        const button = document.createElement('button');
        button.innerText = animal.name;
        button.onclick = () => checkAnswer(animal.name); // Check answer when clicked
        optionsContainer.appendChild(button);
    });
}

// Check if the selected answer is correct
function checkAnswer(selectedName) {
    if (selectedName === correctAnimal) {
        // Show win screen
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('win-screen').style.display = 'block';
    } else {
        // Show lose screen
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('lose-screen').style.display = 'block';
    }
}
function checkAnswer(selectedName) {
    if (selectedName === correctAnimal) {
        coins += 10; // Add coins
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('win-screen').style.display = 'block';
        console.log("Coins:", coins); // Log for testing
    } else {
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('lose-screen').style.display = 'block';
    }
}
