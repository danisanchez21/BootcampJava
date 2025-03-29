// Definimos una "interfaz" para describir cómo es un objeto Pokémon básico.
// Cada Pokémon de la lista tiene un "name" (nombre) y una "url" (link a más datos).
interface PokemonBasicInfo {
  name: string;
  url: string;
}
// Esta es la estructura de la respuesta de la API que devuelve la lista de Pokémon.
// Solo nos interesa la propiedad "results", que es un array de Pokémon básicos.
interface PokemonAPIResponse {
    results: PokemonBasicInfo[];
  }