window.onload = function() {
    fetch('/api/v1/pets') 
        .then(response => response.json())
        .then(data => {
            const petsDiv = document.getElementById('pets');
            data.forEach(pet => {
                const petElement = document.createElement('p');
                petElement.textContent = `Name: ${pet.name}, Owner: ${pet.owner}, Breed: ${pet.breed}, Age: ${pet.age}`;
                petsDiv.appendChild(petElement);
            });
        })
        .catch(error => console.error('Error fetching pets:', error));
};

