var buildSearchPage = function () {
    var bodyContainer = $('#bodyContainer');
    var searchContainer = $("<div class='searchWindow'></div>")
    bodyContainer.append(searchContainer);
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

    var randomButton = $("<button id='randomButton' class='mainButton'>Random</button>").click(function(){
        searchContainer.fadeOut(fadeTiming, function () {
            buildPokemonPage(getRandomInt(744) + 1);
        });

    })


    searchContainer.append(searchButton);
    searchContainer.append(randomButton);

    searchContainer.fadeOut(0);
    searchContainer.fadeIn(fadeTiming);


    $("#pokemonSearch").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#searchButton").click();
        }
    });
    
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }