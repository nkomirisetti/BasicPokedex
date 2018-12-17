var buildPokemonPage = function (inputString) {
    var bodyContainer = $('#bodyContainer');
    bodyContainer.empty();

    var pokemonContainer = $('<div id="pokemonPage" class="pokemonPage"></div>');
    bodyContainer.append(pokemonContainer);

    $.ajax("https://pokeapi.co/api/v2/pokemon/" + inputString + "/", {
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            buildPokemonContainer(response);
        },
        error: function () {
            pokemonContainer.append("<div class='error'>Couldn't find that Pokemon...</div>");
            var returnButton = $("<button id='returnButton' class='mainButton'>Go back</button>").click(function () {
                pokemonContainer.fadeOut(fadeTiming, function () {
                    buildSearchPage();
                });
            });
            pokemonContainer.append(returnButton);
            pokemonContainer.fadeOut(0);
            pokemonContainer.fadeIn(fadeTiming);
        }
    });
};

var buildPokemonContainer = function(pokemonData) {
    var pokemonContainer = $('#pokemonPage');

    pokemonContainer.empty();
    var pokemonName = pokemonData.name;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonName);
    var dataDiv = $('<div class="mainContainer"><h2 class="pokemonTitle">' + pokemonName + '</h2></div>');
    pokemonContainer.append(dataDiv);

    pokemonContainer.fadeOut(0);
    pokemonContainer.fadeIn(fadeTiming);

}

