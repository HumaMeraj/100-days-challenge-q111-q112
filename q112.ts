//Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Creates a new Map to store countries and their capitals

const countries = new Map<string, string>();
countries.set("USA", "Washington,D.C");                   // Adds USA to the Map
countries.set("China","Beijing");                         // Adds China to the Map
countries.set("Japan","Tokyo");                           // Adds  Japan to the Map

console.log(countries)

// Logs the Map with the countries and their capitals.
