const meals = [
    { name: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "bacon"] },
    { name: "Vegetable Stir Fry", ingredients: ["bell pepper", "broccoli", "carrot", "rice"] },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomatoes", "cucumber"] },
    { name: "Beef Tacos", ingredients: ["beef", "cheese", "tortillas", "salsa"] },
    { name: "Shrimp Paella", ingredients: ["shrimp", "rice", "peas", "peppers"] },
    // Add more meals as needed
];

// Function to get a meal suggestion based on ingredients
function getMeal() {
    const input = document.getElementById('ingredientInput').value.trim();
    if (input === '') {
        displayOutput("Please enter some ingredients first.");
        return;
    }

    const userIngredients = input.split(',').map(ingredient => ingredient.trim().toLowerCase());
    const foundMeals = meals.filter(meal => 
        meal.ingredients.every(ingredient => userIngredients.includes(ingredient))
    );

    if (foundMeals.length > 0) {
        displayOutput("You can make: " + foundMeals.map(meal => meal.name).join(', '));
    } else {
        displayOutput("No matching meals found. Try different ingredients!");
    }
}

// Function to get a random meal suggestion
function getRandomMeal() {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    displayOutput("Why not try: " + randomMeal.name + "?");
}

// Helper function to display messages to the user
function displayOutput(message) {
    const outputElement = document.getElementById('mealOutput');
    outputElement.innerHTML = message;
}

// Event listeners for buttons
document.getElementById('getMealButton').addEventListener('click', getMeal);
document.getElementById('getRandomMealButton').addEventListener('click', getRandomMeal);
