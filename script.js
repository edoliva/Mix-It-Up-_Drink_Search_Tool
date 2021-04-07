

var foodURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52859";

fetch(foodURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });


var beerURL = "https://api.punkapi.com/v2/beers?abv_gt=6&abv_lt=10";

fetch(beerURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

// button var
var searchBtn = document.querySelector("#searchBtn");
var clearBtn = document.querySelector("#clearBtn");
var ingredient1 = document.querySelector("#ingredient1");

// local storage var
var drinkNameDisplay0 = document.querySelector("#drinkNameDisplay0");
var drinkNameDisplay1 = document.querySelector("#drinkNameDisplay1");
var drinkNameDisplay2 = document.querySelector("#drinkNameDisplay2");
var drinkNameDisplay3 = document.querySelector("#drinkNameDisplay3");
var drinkNameDisplay4 = document.querySelector("#drinkNameDisplay4");
var drinkNameDisplay5 = document.querySelector("#drinkNameDisplay5");
var drinkNameDisplay6 = document.querySelector("#drinkNameDisplay6");
var drinkNameDisplay7 = document.querySelector("#drinkNameDisplay7");

var drinkSearchDisplay0 = document.querySelector("#drinkSearchDisplay0");
var drinkSearchDisplay1 = document.querySelector("#drinkSearchDisplay1");
var drinkSearchDisplay2 = document.querySelector("#drinkSearchDisplay2");
var drinkSearchDisplay3 = document.querySelector("#drinkSearchDisplay3");
var drinkSearchDisplay4 = document.querySelector("#drinkSearchDisplay4");
var drinkSearchDisplay5 = document.querySelector("#drinkSearchDisplay5");
var drinkSearchDisplay6 = document.querySelector("#drinkSearchDisplay6");
var drinkSearchDisplay7 = document.querySelector("#drinkSearchDisplay7");

var drinkDisplay = document.querySelector(".drink-display");
var recipeDisplay = document.querySelector(".recipe-display");

var recipeSearchDisplay0 = document.querySelector("#recipeSearchDisplay0");
var recipeSearchDisplay1 = document.querySelector("#recipeSearchDisplay1");
var recipeSearchDisplay2 = document.querySelector("#recipeSearchDisplay2");
var recipeSearchDisplay3 = document.querySelector("#recipeSearchDisplay3");
var recipeSearchDisplay4 = document.querySelector("#recipeSearchDisplay4");

var ingredientInput = document.querySelector("#ingredient-text");
var ingredientList = document.querySelector("#ingredient-list");
var ingredientCountSpan = document.querySelector("#ingredient-count");
var ingredients = [];

// This function is being called below and will run when the page loads.
function init() {
  // Get stored ingredients from localStorage
  var storedingredients = JSON.parse(localStorage.getItem("ingredients"));
  // If ingredients were retrieved from localStorage, update the ingredients array to it
  if (storedingredients !== null) {
    ingredients = storedingredients;
  }
}
function storeingredients() {
  // Stringify and set key in localStorage to ingredients array
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
}

init()

// render all searched ingredients
if (ingredients[ingredients.length - 1] != null) {
  drinkSearchDisplay0.textContent = ingredients[ingredients.length - 1];
  drinkSearchDisplay1.textContent = ingredients[ingredients.length - 2];
  drinkSearchDisplay2.textContent = ingredients[ingredients.length - 3];
  drinkSearchDisplay3.textContent = ingredients[ingredients.length - 4];
  drinkSearchDisplay4.textContent = ingredients[ingredients.length - 5];
  drinkSearchDisplay5.textContent = ingredients[ingredients.length - 6];
  drinkSearchDisplay6.textContent = ingredients[ingredients.length - 7];
} else { drinkSearchDisplay0.textContent = "no current search"; }


// BUTTONS
// save and then display searched ingredient
searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var ingredientText = ingredientInput.value.trim();
  // Return from function early if submitted ingredientText is blank
  if (ingredientText === "") {
    alert("Enter SOMETHING!");
    return;
  }
  // Add new ingredientText to ingredients array
  ingredients.push(ingredientText);
  ingredientInput.value = "";
  // Store updated ingredients in localStorage, re-render the list, 
  // refresh page to display item
  storeingredients();
  location.reload();
});
// clear just the searched ingredients from local storage
clearBtn.addEventListener("click", function (event) {
  localStorage.removeItem('ingredients');
  location.reload();
});


// search old ingredients from local storage, enable buttons  

// for (var i=0; i<=6; i++) {
//   var ingredienti = document.querySelector("#ingredient"+i);
//   ingredienti.addEventListener("click", function(event) {  
//     ingredients.push(ingredients[ingredients.length-(i-1)]);
//     ingredientInput.value = "";
//     storeingredients();
//     location.reload();
//   });
// }

ingredient0.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 1]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient1.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 2]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient2.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 3]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient3.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 4]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient4.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 5]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient5.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 6]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});

ingredient6.addEventListener("click", function (event) {
  ingredients.push(ingredients[ingredients.length - 7]);
  ingredientInput.value = "";
  storeingredients();
  location.reload();
});



// get, then display, drink data based on ingredient
var ingName = ingredients[ingredients.length - 1];
var ingURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingName;

fetch(ingURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    var drinkList = document.querySelector("#drink-button-list");

    for (var i = 0; i <= (data['drinks'].length - 1); i++) {
      var drinkButton = document.createElement("button");
      var drinkH3 = document.createElement("h3");
      var drinkSpan = document.createElement("span");
      var drinkImg = document.createElement("img");

      drinkH3.appendChild(drinkSpan);
      drinkH3.appendChild(drinkImg);
      drinkButton.appendChild(drinkH3);
      addDrinkButton();
      drinkList.appendChild(drinkButton);

      drinkButton.className = "header2";
      drinkSpan.id = "drinkNameDisplay" + i;
      drinkImg.className = "image" + i;

      var drinkNameDisplayi = document.querySelector("#drinkNameDisplay" + i);
      var drinkNameDisplayValuei = data['drinks'][i]['strDrink'] + " ";
      var strDrinkThumbi = data['drinks'][i]['strDrinkThumb'];
      drinkNameDisplayi.innerHTML = drinkNameDisplayValuei;
      $(".image" + i).attr("src", strDrinkThumbi);

      // click on drink logo button function
      function addDrinkButton() {

        var idDrinki = data['drinks'][i]['idDrink'];
        console.log(idDrinki);
        var idURLi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrinki;

        $(drinkButton).on('click', function () {

          fetch(idURLi)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              var drinkNameDisplayValue = data['drinks'][0]['strDrink'] + " ";
              var strDrinkThumb = data['drinks'][0]['strDrinkThumb'];
              
              var measureANDing1 = data['drinks'][0]['strMeasure'+i+1] + " of " + data['drinks'][0]['strIngredient1'];
              recipeSearchDisplay1.textContent = measureANDing1;
              
              drinkDisplay.setAttribute("style", "display: none;");
              recipeDisplay.setAttribute("style", "display: inline-block;");
              alert(idURLi);
              recipeSearchDisplay0.textContent = drinkNameDisplayValue;
              $(".image").attr("src", strDrinkThumb);
              
            });
        })
      }
    };


  })
// .catch(err => alert("Invalid ingredient entry, try again."));


