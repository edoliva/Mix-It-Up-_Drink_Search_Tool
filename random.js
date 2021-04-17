// function randomCocktail () {
// $(document).ready(function(){
//     getRandomCocktail();
//     });
    
    
//     function goBack(){
//         window.location.href = './homepage.html'
//       }
//       function checkCount(){
//         window.location.href = './random.html';
//         //getRandomCocktail();
//       }
      
//       function getRandomCocktail(){
//         fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//         .then(
//           function(response) {
//             if (response.status !== 200) {
//               console.log('Looks like there was a problem. Status Code: ' +
//                 response.status);
//               return;
//             }
      
//             // Examine the text in the response
//             response.json().then(function(data) {
//               //console.log(data);
//               displayRandomCocktail(data);
//             });
//           }
//         )
//         .catch(function(err) {
//           console.log('Fetch Error :-S', err);
//         });
//       } 
      
//       function displayRandomCocktail(cocktail){
//     //   count++;
//     //   console.log(count);
//        console.log(cocktail.drinks[0]);
//        var displayDrink = document.createElement("h1");
//        displayDrink.style.textAlign = "center";
//        var drinkImage = document.createElement("img");
//        drinkImage.style.display = "block";
//        drinkImage.style.marginLeft = "auto";
//        drinkImage.style.marginRight = "auto";
//        document.body.appendChild(displayDrink);
//        document.body.appendChild(drinkImage);
      
//        displayDrink.innerHTML = cocktail.drinks[0].strDrink;
//        drinkImage.src = cocktail.drinks[0].strDrinkThumb;
//       }
//     };
