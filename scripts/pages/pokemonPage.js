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

var buildPokemonContainer = function (pokemonData) {
    var pokemonContainer = $('#pokemonPage');

    pokemonContainer.empty();
    var pokemonName = pokemonData.name;
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    console.log(pokemonData);
    var dataDiv = $('<div class="mainContainer"><h2 class="pokemonTitle">' + pokemonName + '</h2></div>');
    pokemonContainer.append(dataDiv);
    console.log(pokemonData);
    // add background info
    pokemonContainer.append(buildBackgroundContainer(pokemonData));

    // add abilities
    pokemonContainer.append(buildAbilitiesContainer(pokemonData.abilities));

    // add types
    pokemonContainer.append(buildTypesContainer(pokemonData.types));

    // add sprites
    pokemonContainer.append(buildSpritesContainer(pokemonData.sprites));

    // add moves
    pokemonContainer.append(buildMovesContainer(pokemonData.moves));

    var returnButton = $("<button id='returnButton' class='mainButton'>Go back</button>").click(function () {
        pokemonContainer.fadeOut(fadeTiming, function () {
            buildSearchPage();
        });
    });
    
    pokemonContainer.append(returnButton);
    pokemonContainer.fadeOut(0);
    pokemonContainer.fadeIn(fadeTiming);
}

var buildAbilitiesContainer = function (abilities) {
    var abilitiesDiv = $('<div class="subContainer"><h3 class="containerTitle">Abilities</h3></div>');
    var hiddenAbilities = [];
    var normalAbilities = [];
    for (let ability of abilities) {
        if (ability.is_hidden === true) {
            hiddenAbilities.push(ability);
        } else {
            normalAbilities.push(ability);
        }
    }

    if (normalAbilities.length > 0) {
        var normalAbilitiesDiv = $('<div class="normalAbilitiesContainer"><h4 class="containerSubtitle">Normal Abilities</h4></div>');
        var abilitiesList = $('<ul class="list"></ul>');
        for (let ability of normalAbilities) {
            var abilityName = ability.ability.name;
            abilityName = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
            abilitiesList.append('<li class="listElement">' + abilityName + '</li>');
        }
        normalAbilitiesDiv.append(abilitiesList);
        abilitiesDiv.append(normalAbilitiesDiv);
    }

    if (hiddenAbilities.length > 0) {
        var hiddenAbilitiesDiv = $('<div class="hiddenAbilitiesContainer"><h4 class="containerSubtitle">Hidden Abilities</h4></div>');
        var abilitiesList = $('<ul class="list"></ul>');
        for (let ability of hiddenAbilities) {
            var abilityName = ability.ability.name;
            abilityName = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
            abilitiesList.append('<li class="listElement">' + abilityName + '</li>');
        }
        hiddenAbilitiesDiv.append(abilitiesList);
        abilitiesDiv.append(hiddenAbilitiesDiv);
    }

    return abilitiesDiv;
}

var buildTypesContainer = function (types) {
    var typeDiv;
    if (types.length === 2) {
        typeDiv = $('<div class="subContainer"><h3 class="containerTitle">Types</h3></div>');
    } else {
        typeDiv = $('<div class="subContainer"><h3 class="containerTitle">Type</h3></div>');
    }
    var typeList = $('<ul class="list"></ul>');
    for (let type of types) {
        var typeName = type.type.name;
        typeName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
        typeList.append('<li class="listElement">' + typeName + '</li>');
    }
    typeDiv.append(typeList);
    return typeDiv;
}

var buildBackgroundContainer = function (fullData) {
    var backgroundDiv = $('<div class="subContainer"><h3 class="containerTitle">Basic Info</h3></div>');
    backgroundDiv.append('<h4 class="containerSubtitle">Pokédex Number: </h4>' + fullData.id);
    backgroundDiv.append('<h4 class="containerSubtitle">Height: </h4>' + fullData.height/10 + " Meters");
    backgroundDiv.append('<h4 class="containerSubtitle">Weight: </h4>' + fullData.weight/10 + " Kilograms");

    return backgroundDiv;
}

var buildSpritesContainer = function (sprites) {
    var spritesDiv = $('<div class="spritesContainer"><h3 class="containerTitle">Sprites</h3></div>');    
    var frontSprite = $('<img src="' + sprites.front_default +'" id="frontSprite" class="sprite">');
    var backSprite = $('<img src="' + sprites.back_default +'" id="backSprite" class="sprite">');    

    var img = new Image();
    img.src = sprites.front_default + '?' +new Date().getTime();
    img.crossOrigin = '';
    img.onload=function() {
        var vibrant = new Vibrant(img);
        console.log(vibrant.swatches())
    }

    spritesDiv.append(frontSprite);
    spritesDiv.append(backSprite);
    return spritesDiv;
}

var buildMovesContainer = function (moves) {
    // TODO: make da moves
}