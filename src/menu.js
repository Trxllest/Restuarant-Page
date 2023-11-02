export default function menu() {

    // Menu Title
    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    // Drink section
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('menu');
    
    // Drink Menu Title 
    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';
    drinkMenu.appendChild(drinks);

    // add menu items
    const water = document.createElement('h3');
    water.textContent = 'Water: Tap, Sparkling, Spring - $1.99';
    const soda = document.createElement('h3');
    soda.textContent = 'Soda: Sprite, Coke, Crush, Fruitopia - $2.99';
    const wine = document.createElement('h3');
    wine.textContent = 'Wine: White, Red - $12.99';

    drinkMenu.append(water, soda, wine);

    // Sides section
    const sideMenu = document.createElement('div');
    sideMenu.classList.add('menu');

    // Side Dishes Title
    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    sideMenu.appendChild(sides);

    // add menu items
    const fries = document.createElement('h3');
    fries.textContent = 'Fries - $4.99';
    const salad = document.createElement('h3');
    salad.textContent = 'Salad: Ceasar, Garden - $5.99';

    sideMenu.append(fries, salad);


    // Main Dishes Section
    const entreeMenu = document.createElement('div');
    entreeMenu.classList.add('menu');

    // Main Dishes
    const entrees = document.createElement('h2');
    entrees.textContent = 'Entrees';
    entreeMenu.appendChild(entrees);

    // add menu items
    const pizza = document.createElement('h3');
    pizza.textContent = 'Mama\'s Pizza - $24.99';
    const pasta = document.createElement('h3');
    pasta.textContent = 'Seafood Pasta - $26.99';
    const sandwich = document.createElement('h3');
    sandwich.textContent = 'Uncle Tony\'s Sandwich - $15.99';

    entreeMenu.append(pizza, pasta, sandwich);

    return [headline, drinkMenu, sideMenu, entreeMenu];
}

