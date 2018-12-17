let dbRoot = "http://pokeapi.co/api/v2/";
let fadeTiming = 600;
$(document).ready(() =>{
    buildSearchPage();
})

// let derp = $.ajax("https://pokeapi.co/api/v2/pokemon/fdk/", {
//     type: 'GET',
//     dataType: 'json',
//     success: function (response) {
//         console.log(response);
//     },
//     error: function (){
//         alert("pokemon not found");
//     }
// });