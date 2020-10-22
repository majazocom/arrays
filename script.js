//Simple array
//let pokemons = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise"];


//Objects in an array
let pokemons = [
    {
        name: 'Bulbasaur',
        id: 1
    },
    {
        name: 'Ivysaur',
        id: 2
    },
    {
        name: 'Venusaur',
        id: 3
    },
    {
        name: 'Charmander',
        id: 4
    },
    {
        name: 'Charmeleon',
        id: 5
    },
    {
        name: 'Charizard',
        id: 6
    },
    {
        name: 'Squirtle',
        id: 7
    },
    {
        name: 'Wartortle',
        id: 8
    },
    {
        name: 'Blastoise',
        id: 9
    },
]

//Del 1:
//Ändra namn på det första objektet
console.log(pokemons[0].name);
pokemons[0].name = "Maja";
console.log(pokemons[0].name);

//Del 2:
//Spara det andra objektet i en variabel
let variable = pokemons[1];
console.log(variable);

//Del 3:
//Skriv ut listans längd
console.log(pokemons.length);

//Del 4:
//Radera sista objektet i listan
pokemons.pop();
console.log(pokemons.length);

//Del 5:
//Lägg in ett till objekt i listan
let newObject = {
    name: "Hej",
    id: 100
}

pokemons.push(newObject);
console.log(pokemons.length);

//Del 6:
//Ta bort det första objektet i listan
pokemons.shift();
console.log(pokemons.length);


//Del 7:
//Kom åt det sista objektet genom listmetoden '.length'
console.log(pokemons[pokemons.length -1]);