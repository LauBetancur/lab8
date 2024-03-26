function createCharacter(name, message, imageURL) {
    const characterNumber = name.split(' ')[1];
    return `
    <div class="character">
        <img src="${imageURL}" alt="Rick and Morty Character">
        <h2>Character ${characterNumber}</h2>
        <p>${message}</p>
    </div>
    `;
}

const baseURL = 'https://rickandmortyapi.com/api/character/avatar/';
const charactersContainer = document.getElementById('characters-container');

for (let i = 1; i <= 826; i++) {
    const imageURL = `${baseURL}${i}.jpeg`;
    const message = `This is my post (${i}). This is a test of generation using functions and loops.`;
    const characterHTML = createCharacter(`Character ${i}`, message, imageURL);
    charactersContainer.innerHTML += characterHTML;
}
