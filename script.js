// var mealURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52859";

// fetch(mealURL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });


// var beerURL = "https://api.punkapi.com/v2/beers?abv_gt=6&abv_lt=10";

// fetch(beerURL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

// BUTTON VAR
// DRINKS
var searchBtnDrink = document.querySelector("#searchBtnDrink");
var clearBtnDrink = document.querySelector("#clearBtnDrink");
var homeScreenBtn = document.querySelector("#home-Btn");
var drinkBtn = document.querySelector("#drink-Btn");
var mealBtn = document.querySelector("#meal-Btn");
var ingredient1 = document.querySelector("#ingredient1");
// meal
var searchBtnmeal = document.querySelector("#searchBtnmeal");
var clearBtnmeal = document.querySelector("#clearBtnmeal");

// local storage var
var drinkSearchDisplay0 = document.querySelector("#drinkSearchDisplay0");
var drinkSearchDisplay1 = document.querySelector("#drinkSearchDisplay1");
var drinkSearchDisplay2 = document.querySelector("#drinkSearchDisplay2");
var drinkSearchDisplay3 = document.querySelector("#drinkSearchDisplay3");
var drinkSearchDisplay4 = document.querySelector("#drinkSearchDisplay4");
var drinkSearchDisplay5 = document.querySelector("#drinkSearchDisplay5");
var drinkSearchDisplay6 = document.querySelector("#drinkSearchDisplay6");
var drinkSearchDisplay7 = document.querySelector("#drinkSearchDisplay7");

var mealSearchDisplay0 = document.querySelector("#mealSearchDisplay0");
var mealSearchDisplay1 = document.querySelector("#mealSearchDisplay1");
var mealSearchDisplay2 = document.querySelector("#mealSearchDisplay2");
var mealSearchDisplay3 = document.querySelector("#mealSearchDisplay3");
var mealSearchDisplay4 = document.querySelector("#mealSearchDisplay4");
var mealSearchDisplay5 = document.querySelector("#mealSearchDisplay5");
var mealSearchDisplay6 = document.querySelector("#mealSearchDisplay6");
var mealSearchDisplay7 = document.querySelector("#mealSearchDisplay7");

var drinkDisplay = document.querySelector(".drink-display");
var drinkDisplayHeader = document.querySelector(".drink-display-header");
var recipeDisplay = document.querySelector(".recipe-drink-display");
var recipeDisplayHeader = document.querySelector(".recipe-drink-display-header");
var drinkSearchAside = document.querySelector(".drink-search-aside");

var mealDisplay = document.querySelector(".meal-display");
var mealDisplayHeader = document.querySelector(".meal-display-header");
var recipemealDisplay = document.querySelector(".recipe-meal-display");
var recipemealDisplayHeader = document.querySelector(".recipe-meal-display-header");
var mealSearchAside = document.querySelector(".meal-search-aside");

var recipeSearchDisplay0 = document.querySelector("#recipeSearchDisplay0");
var strAlcoholic = document.querySelector("#str-Alcoholic");
var strCategory = document.querySelector("#str-Category");
var strGlass = document.querySelector("#str-Glass");
var strInstructions = document.querySelector("#str-Instructions");

var mealrecipeSearchDisplay0 = document.querySelector("#mealrecipeSearchDisplay0");
var strArea = document.querySelector("#str-Area");
var mealstrCategory = document.querySelector("#meal-str-Category");
var mealstrInstructions = document.querySelector("#meal-str-Instructions");

var ingredientInput = document.querySelector("#ingredient-text");
var mealIngredientInput = document.querySelector("#meal-ingredient-text");
var ingredientList = document.querySelector("#ingredient-list");
var ingredientCountSpan = document.querySelector("#ingredient-count");
var drinkIngredients = [];
var mealIngredients = [];

// DRINKS
// This function is being called below and will run when the page loads.
function init() {
  // Get stored ingredients from localStorage
  var storedingredients = JSON.parse(localStorage.getItem("drinkIngredients"));
  // If ingredients were retrieved from localStorage, update the ingredients array to it
  if (storedingredients !== null) {
    drinkIngredients = storedingredients;
  }
}
function storeingredients() {
  // Stringify and set key in localStorage to ingredients array
  localStorage.setItem("drinkIngredients", JSON.stringify(drinkIngredients));
}
init()

// meal
// This function is being called below and will run when the page loads.
function initmeal() {
  // Get stored ingredients from localStorage
  var storedmealIngredients = JSON.parse(localStorage.getItem("mealIngredients"));
  // If meal ingredients were retrieved from localStorage, update the mealIngredients array to it
  if (storedmealIngredients !== null) {
    mealIngredients = storedmealIngredients;
  }
}
function storemealIngredients() {
  // Stringify and set key in localStorage to ingredients array
  localStorage.setItem("mealIngredients", JSON.stringify(mealIngredients));
}
initmeal()

// render all searched DRINK ingredients
function renderDrinks () {
if (drinkIngredients[drinkIngredients.length - 1] != null) {
  drinkSearchDisplay0.textContent = drinkIngredients[drinkIngredients.length - 1];
  drinkSearchDisplay1.textContent = drinkIngredients[drinkIngredients.length - 2];
  drinkSearchDisplay2.textContent = drinkIngredients[drinkIngredients.length - 3];
  drinkSearchDisplay3.textContent = drinkIngredients[drinkIngredients.length - 4];
  drinkSearchDisplay4.textContent = drinkIngredients[drinkIngredients.length - 5];
  drinkSearchDisplay5.textContent = drinkIngredients[drinkIngredients.length - 6];
  drinkSearchDisplay6.textContent = drinkIngredients[drinkIngredients.length - 7];
}};
// render all searched MEAL ingredients
function renderMeals () {
if (mealIngredients[mealIngredients.length - 1] != null) {
  mealSearchDisplay0.textContent = mealIngredients[mealIngredients.length - 1];
  mealSearchDisplay1.textContent = mealIngredients[mealIngredients.length - 2];
  mealSearchDisplay2.textContent = mealIngredients[mealIngredients.length - 3];
  mealSearchDisplay3.textContent = mealIngredients[mealIngredients.length - 4];
  mealSearchDisplay4.textContent = mealIngredients[mealIngredients.length - 5];
  mealSearchDisplay5.textContent = mealIngredients[mealIngredients.length - 6];
  mealSearchDisplay6.textContent = mealIngredients[mealIngredients.length - 7];
} else {"No search"}};

// BUTTONS
// swith between HOMESCREEN, DRINK, MEAL search
homeScreenBtn.addEventListener("click", function (event) {
  location.reload();
}); drinkBtn.addEventListener("click", function (event) {
  drinkDisplay.setAttribute("style", "display: inline-block;");
  drinkDisplayHeader.setAttribute("style", "display: inline-block;");
  drinkSearchAside.setAttribute("style", "display: inline-block;");
  mealDisplay.setAttribute("style", "display: none;");
  mealDisplayHeader.setAttribute("style", "display: none;");
  mealSearchAside.setAttribute("style", "display: none;");
  recipemealDisplay.setAttribute("style", "display: none;");
  recipemealDisplayHeader.setAttribute("style", "display: none;");
  // storeingredients();
  renderDrinks ();
  drinkDisplayFunction();
}); mealBtn.addEventListener("click", function (event) {
  drinkDisplay.setAttribute("style", "display: none;");
  drinkDisplayHeader.setAttribute("style", "display: none;");
  drinkSearchAside.setAttribute("style", "display: none;");
  mealDisplay.setAttribute("style", "display: inline-block;");
  mealDisplayHeader.setAttribute("style", "display: inline-block;");
  mealSearchAside.setAttribute("style", "display: inline-block;");
  recipemealDisplay.setAttribute("style", "display: none;");
  recipemealDisplayHeader.setAttribute("style", "display: none;");
  recipeDisplay.setAttribute("style", "display: none;");
  recipeDisplayHeader.setAttribute("style", "display: none;");
  renderMeals();
  mealDisplayFunction();
});

// save and then display searched DRINK ingredient
searchBtnDrink.addEventListener("click", function (event) {
  event.preventDefault();
  var ingredientText = ingredientInput.value.trim();
  // Return from function early if submitted ingredientText is blank
  if (ingredientText === "") {
    // alert("Enter SOMETHING!");
    return;
  }
  // Add new ingredientText to ingredients array
  drinkIngredients.push(ingredientText);
  ingredientInput.value = "";
  // Store updated ingredients in localStorage, re-render the list, 
  // refresh page to display item
  storeingredients();
  renderDrinks ();
  drinkDisplayFunction();
});
// clear just the searched DRINK ingredients from local storage
clearBtnDrink.addEventListener("click", function (event) {
  localStorage.removeItem('drinkIngredients');
  drinkIngredients = [];
  // localStorage.removeItem('ingredients');
  for (var i = 0; i<=6; i++) {
    var drinkSearchDisplayi = document.querySelector("#drinkSearchDisplay"+i);
    drinkSearchDisplayi.textContent = "";
  }
  drinkDisplay.setAttribute("style", "display: none;");
  drinkDisplayHeader.setAttribute("style", "display: inline-block;");
  recipeDisplay.setAttribute("style", "display: none;");
});

// save and then display searched MEAL ingredient
searchBtnmeal.addEventListener("click", function (event) {
  event.preventDefault();
  var mealIngredientText = mealIngredientInput.value.trim();
  // Return from function early if submitted mealIngredientText is blank
  if (mealIngredientText === "") {
    // alert("Enter SOMETHING!");
    return;
  }
  // Add new mealIngredientText to MEAL ingredients array
  mealIngredients.push(mealIngredientText);
  mealIngredientInput.value = "";
  // Store updated mealIngredients in localStorage, re-render the list, 
  // refresh page to display item
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
});
// clear just the searched mealIngredients from local storage
clearBtnmeal.addEventListener("click", function (event) {
  localStorage.removeItem('mealIngredients');
  mealIngredients = [];
  for (var i = 0; i<=6; i++) {
    var mealSearchDisplayi = document.querySelector("#mealSearchDisplay"+i);
    mealSearchDisplayi.textContent = "";
  }
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

// DRINK saved search buttons
ingredient0.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 1]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient1.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 2]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient2.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 3]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient3.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 4]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient4.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 5]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient5.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 6]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
}); ingredient6.addEventListener("click", function (event) {
  drinkIngredients.push(drinkIngredients[drinkIngredients.length - 7]);
  ingredientInput.value = "";
  storeingredients();
  renderDrinks();
  drinkDisplayFunction();
});

// MEAL saved search buttons
mealIngredient0.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 1]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient1.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 2]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient2.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 3]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient3.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 4]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient4.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 5]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient5.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 6]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
}); mealIngredient6.addEventListener("click", function (event) {
  mealIngredients.push(mealIngredients[mealIngredients.length - 7]);
  mealIngredientInput.value = "";
  storemealIngredients();
  renderMeals();
  mealDisplayFunction();
});


//DRINK DISPLAY
function drinkDisplayFunction(){
  drinkDisplay.setAttribute("style", "display: inline-block;");
  drinkDisplayHeader.setAttribute("style", "display: inline-block;");
  recipeDisplay.setAttribute("style", "display: none;");
  recipeDisplayHeader.setAttribute("style", "display: none;");
// get, then display, drink data based on ingredient
var ingName = drinkIngredients[drinkIngredients.length - 1];
var ingURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingName;

fetch(ingURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    var drinkList = document.querySelector("#drink-button-list");
    drinkList.innerHTML = "";

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
              drinkDisplay.setAttribute("style", "display: none;");
              drinkDisplayHeader.setAttribute("style", "display: none;");
              recipeDisplay.setAttribute("style", "display: inline-block;");
              recipeDisplayHeader.setAttribute("style", "display: inline-block;");
              var drinkNameDisplayValue = data['drinks'][0]['strDrink'] + " ";
              var strDrinkThumb = data['drinks'][0]['strDrinkThumb'];
              var strAlcoholicText = data['drinks'][0]['strAlcoholic'];
              var strCategoryText = data['drinks'][0]['strCategory'];
              var strGlassText = data['drinks'][0]['strGlass'];
              var strInstructionsText = data['drinks'][0]['strInstructions'];

              //add drink atributes to span.

              recipeSearchDisplay0.textContent = drinkNameDisplayValue;
              $(".image").attr("src", strDrinkThumb);
              strAlcoholic.textContent = strAlcoholicText;
              strCategory.textContent = strCategoryText;
              strGlass.textContent = strGlassText;
              strInstructions.textContent = strInstructionsText;

              // render drink ingredients
              var ingredientList = document.querySelector("#ingredient-button-list");
              ingredientList.innerHTML = "";
              for (var i = 1; i <= 15; i++) {
                if (data['drinks'][0]['strMeasure' + i] === null || data['drinks'][0]['strMeasure' + i] === "") {
                  return;
                }
                var measureANDingi = data['drinks'][0]['strMeasure' + i] + ": " + data['drinks'][0]['strIngredient' + i];
                var ingImageURL = "https://www.thecocktaildb.com/images/ingredients/" + data['drinks'][0]['strIngredient' + i] + ".png"
                var drinkIngredientButton = document.createElement("button");
                var ingImage = document.createElement("img");
                var ingListItem = document.createElement("li");
                var ingSpan = document.createElement("span");

                drinkIngredientButton.appendChild(ingSpan);
                drinkIngredientButton.appendChild(ingImage);
                listedDrinkIngredientButton();
                ingListItem.appendChild(drinkIngredientButton);
                ingredientList.appendChild(ingListItem);
                ingImage.className = "ingImage" + i;
                drinkIngredientButton.className = "header2";
                ingListItem.className = "stockIngredients";
                ingListItem.id = "recipeData" + i;
                ingSpan.id = "recipeSearchDisplay" + i;
                var recipeSearchDisplayi = document.querySelector("#recipeSearchDisplay" + i);
                recipeSearchDisplayi.textContent = measureANDingi;
                $(".ingImage" + i).attr("src", ingImageURL);
                
                function listedDrinkIngredientButton () {
                  var drinklIngredientItemi = data['drinks'][0]['strIngredient' + i]; 
                  $(drinkIngredientButton).on('click', function () {
                  console.log(drinklIngredientItemi);
                  drinkIngredients.push(drinklIngredientItemi);
                  storeingredients();
                  renderDrinks();
                  drinkDisplayFunction();
                  drinkDisplay.setAttribute("style", "display: inline-block;");
                  drinkDisplayHeader.setAttribute("style", "display: inline-block;");
                  recipeDisplay.setAttribute("style", "display: none;");
                  recipeDisplayHeader.setAttribute("style", "display: none;");
                })};
              };
            });
        })
      }
    };
  })
};
// .catch(err => alert("Invalid ingredient entry, try again."));

//MEAL DISPLAY
function mealDisplayFunction(){

  mealDisplay.setAttribute("style", "display: inline-block;");
  mealDisplayHeader.setAttribute("style", "display: inline-block;");
  recipemealDisplay.setAttribute("style", "display: none;");
  recipemealDisplayHeader.setAttribute("style", "display: none;");
  // recipeDisplay.setAttribute("style", "display: none;");
  // recipeDisplayHeader.setAttribute("style", "display: none;");
// get, then display, drink data based on ingredient
var mealIngName = mealIngredients[mealIngredients.length - 1];
var mealIngURL = "https://themealdb.com/api/json/v1/1/filter.php?i=" + mealIngName;

fetch(mealIngURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // render meals by name
    var mealList = document.querySelector("#meal-button-list");
    mealList.innerHTML = "";

    for (var i = 0; i <= (data['meals'].length - 1); i++) {
      var mealButton = document.createElement("button");
      var mealH3 = document.createElement("h3");
      var mealSpan = document.createElement("span");
      var mealImg = document.createElement("img");
      
      mealH3.appendChild(mealSpan);
      mealH3.appendChild(mealImg);
      mealButton.appendChild(mealH3);
      addmealButton();
      mealList.appendChild(mealButton);
      
      mealButton.className = "header2";
      mealSpan.id = "mealNameDisplay" + i;
      mealImg.className = "mealImage" + i;
      
      var mealNameDisplayi = document.querySelector("#mealNameDisplay" + i);
      var mealNameDisplayValuei = data['meals'][i]['strMeal'] + " ";
      var strmealThumbi = data['meals'][i]['strMealThumb'];
      mealNameDisplayi.innerHTML = mealNameDisplayValuei;
      $(".mealImage" + i).attr("src", strmealThumbi);

      // click on meal logo button function
      function addmealButton() {
        var idmeali = data['meals'][i]['idMeal'];
        console.log(idmeali);
        var mealidURLi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idmeali;
        $(mealButton).on('click', function () {
          fetch(mealidURLi)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              mealDisplay.setAttribute("style", "display: none;");
              mealDisplayHeader.setAttribute("style", "display: none;");
              recipemealDisplay.setAttribute("style", "display: inline-block;");
              recipemealDisplayHeader.setAttribute("style", "display: inline-block;");
              var mealNameDisplayValue = data['meals'][0]['strMeal'] + " ";
              var strmealThumb = data['meals'][0]['strMealThumb'];
              var strmealVideo = data['meals'][0]['strYoutube'].slice(-11);
              var strAreaText = data['meals'][0]['strArea'];
              var mealstrCategoryText = data['meals'][0]['strCategory'];
              var mealstrInstructionsText = data['meals'][0]['strInstructions'];
              
              //add meal atributes to span.

              mealrecipeSearchDisplay0.textContent = mealNameDisplayValue;
              $(".image").attr("src", strmealThumb);
              $(".videoMeal").attr("src", "https://www.youtube.com/embed/"+strmealVideo);
              strArea.textContent = strAreaText;
              mealstrCategory.textContent = mealstrCategoryText;
              mealstrInstructions.textContent = mealstrInstructionsText;

              // render meal ingredients
              var mealingredientList = document.querySelector("#meal-ingredient-button-list");
              mealingredientList.innerHTML = "";
              for (var i = 1; i <= 20; i++) {
                if (data['meals'][0]['strMeasure' + i] === null || data['meals'][0]['strMeasure' + i] === "" || data['meals'][0]['strMeasure' + i] === " ") {
                  return;
                }
                var mealmeasureANDingi = data['meals'][0]['strMeasure' + i] + ": " + data['meals'][0]['strIngredient' + i];
                var mealingImageURL = "https://www.themealdb.com/images/ingredients/" + data['meals'][0]['strIngredient' + i] + ".png"
                var mealIngredientButton = document.createElement("button");
                var ingImage = document.createElement("img");
                var ingListItem = document.createElement("li");
                var ingSpan = document.createElement("span");
                mealIngredientButton.appendChild(ingSpan);
                mealIngredientButton.appendChild(ingImage);
                listedMealIngredientButton();
                ingListItem.appendChild(mealIngredientButton);
                mealingredientList.appendChild(ingListItem);
                mealIngredientButton.className = "header2";
                ingImage.className = "mealingImage" + i;
                ingListItem.className = "stockIngredients";
                ingListItem.id = "recipeData" + i;
                ingSpan.id = "mealrecipeSearchDisplay" + i;
                var mealRecipeSearchDisplayi = document.querySelector("#mealrecipeSearchDisplay" + i);
                mealRecipeSearchDisplayi.textContent = mealmeasureANDingi;
                $(".mealingImage" + i).attr("src", mealingImageURL);

                function listedMealIngredientButton () {
                  var mealIngredientItemi = data['meals'][0]['strIngredient' + i]; 
                  $(mealIngredientButton).on('click', function () {
                  console.log(mealIngredientItemi);
                  mealIngredients.push(mealIngredientItemi);
                  storemealIngredients();
                  renderMeals();
                  mealDisplayFunction();
                  mealDisplay.setAttribute("style", "display: inline-block;");
                  mealDisplayHeader.setAttribute("style", "display: inline-block;");
                  recipemealDisplay.setAttribute("style", "display: none;");
                  recipemealDisplayHeader.setAttribute("style", "display: none;");
                })};
              };
            });
        })
      }
    };
  })
};

//Nick 




//Sandy 





