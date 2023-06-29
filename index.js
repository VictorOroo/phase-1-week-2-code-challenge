
// This will fetch data from the json server.
fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(data => displayAnimalNames(data))
.catch(error => console.log('Error fetching animals:', error));

//Displaying animals names
function displayAnimalNames(animals) {
    const animalNamesList = document.getElementById('animalNames');
    animalNamesList.innerHTML = animals.map(animal => `<li data-id="${animal.id}">${animal.name}</li>`).join('');

    animalNamesList.addEventListener('click', event => {
        const selectedAnimalId = event.target.dataset.id;
        const selectedAnimal = animals.find(animal => animal.id === parseInt(selectedAnimalId));
        displayAnimalDetails(selectedAnimal);
    });

    //Displaying the selected animal's descriptions and votes
    function displayAnimalDetails(animal) {
        const animalImage = document.getElementById('animalImage');
        const voteCount = document.getElementById('voteNo');
        const voteButton = document.getElementById('votingBtn');
        const resetButton = document.getElementById('resetBtn');
   
        animalImage.innerHTML = `<img src="${animal.image}" alt="${animal.name}">`;
        voteCount.textContent = animal.votes;


        voteButton.addEventListener('click', () => {
            animal.votes++;
            voteCount.textContent = animal.votes;
            voteButton.textContent = 'add vote';
        });
        resetButton.addEventListener('click', () => {
            animal.votes = 0;
            voteCount.textContent = animal.votes;
        });
    }
}

