"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const input = document.getElementById('pokemonName');
const button = document.getElementById('searchBtn');
const infoDiv = document.getElementById('pokemonInfo');
button.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const name = input.value.toLowerCase().trim();
    if (!name)
        return;
    try {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok)
            throw new Error('Pokémon no encontrado');
        const data = yield response.json();
        infoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Tipo(s): ${data.types.map(t => t.type.name).join(', ')}</p>
        `;
    }
    catch (error) {
        infoDiv.innerHTML = `<p style="color: red;">No se encontró el Pokémon.</p>`;
    }
}));
