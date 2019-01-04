var buildSearchPage = function () {
    var bodyContainer = $('#bodyContainer');
    var searchContainer = $("<div class='searchWindow'></div>")
    bodyContainer.append(searchContainer);
    searchContainer.append('<h2>Generation 1 Pokédex</h2>');
    searchContainer.append("<input id='pokemonSearch' class='entryField' type='text' placeholder='Enter a Pokémon...'>");
    var searchButton = $("<button id='searchButton' class='mainButton'>Search</button>").click(function () {
        searchContainer.fadeOut(fadeTiming, function () {
            var inputString = $.trim($("#pokemonSearch").val());
            if (inputString === ""){
                buildPokemonPage("Empty")
            }
            buildPokemonPage(inputString);
        });
    });
    searchContainer.append(searchButton);
    searchContainer.fadeOut(0);
    searchContainer.fadeIn(fadeTiming);
};