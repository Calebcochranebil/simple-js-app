let pokemonRepository = (function() {
  // This declares the pokemonList array
  var pokemonList = [{
  name: 'Golbat',
  type: ['Poison','Flying'],
  height: 1.6
  },{
  name: 'Arbok',
  type: ['Poison'],
  height: 3.5
  },{
  name: 'Charizard',
  type: ['Fire','Flying'],
  height: 5.7
  }];
  
  return {
  getAll: function() {
  // This returns all items in the pokemonList array
  return pokemonList;
  },
  add: function(pokemon) {
  // This adds a single item to the pokemonList array
  pokemonList.push(pokemon);
  }
  };
  })();
  
  let allPokemon = pokemonRepository.getAll();
  allPokemon.forEach(function(pokemon) {
  if (pokemon.height >=5) { // If the height is greater than 5, this gets called
  document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a really big Pokemon!!" + "<br>")
  } else if (pokemon.height >= 3 && pokemon.height < 4.9) { // If the height is greater than 3 and less than 4.9, this gets called
  document.write(pokemon.name + " (height: " + pokemon.height + "m) - That is an average sized Pokemon!" + "<br>")
  } else { // If the height isanything less, this gets called
  document.write(pokemon.name + " (height: " + pokemon.height + "m) - That is a small pokemon." + "<br>")
  }
  });