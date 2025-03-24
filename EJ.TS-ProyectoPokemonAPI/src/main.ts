interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: { name: string };
    }[];
}

const input = document.getElementById('pokemonName') as HTMLInputElement;
const button = document.getElementById('searchBtn') as HTMLButtonElement;
const infoDiv = document.getElementById('pokemonInfo') as HTMLDivElement;

button.addEventListener('click', async () => {
    const name = input.value.toLowerCase().trim();
    if (!name) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error('Pokémon no encontrado');

        const data: Pokemon = await response.json();

        infoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Tipo(s): ${data.types.map(t => t.type.name).join(', ')}</p>
        `;
    } catch (error) {
        infoDiv.innerHTML = `<p style="color: red;">No se encontró el Pokémon.</p>`;
    }
});
