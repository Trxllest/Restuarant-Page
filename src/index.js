import restPhoto from './TGF-img.jpeg';
import contact from './contact';
import menu from './menu';

function navBar() {
    // wrapper
    const header = document.createElement('ul');

    // tabs
    const home = document.createElement('li');
    home.textContent = 'Home';
    home.classList.add('tab','home');

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.classList.add('tab', 'menu');

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.classList.add('tab', 'contact');

    header.append(home, menu, contact);

    return header;
}


function home() {

    
    // headline for home page
    const headline = document.createElement('h1');
    headline.textContent = "La Forchetta d'Oro";

    // image for homepage
    const headPhoto = new Image();
    headPhoto.src = restPhoto;

    // Intro text 
    const intro = document.createElement('p');
    intro.textContent = 'Indulge in Italian excellence at La Forchetta d\'Oro, where every dish is a masterpiece, and flavor takes center stage.';


    return [headline, headPhoto, intro];
}

const content = document.getElementById('content');

// Initial render
content.append(navBar(),...home());

// Home tab
document.querySelector('.home').addEventListener('click', () => {
    console.log('Home was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...home()); 
})

// Menu tab
document.querySelector('.menu').addEventListener('click', () => {
    console.log('Menu was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...menu());
})

// Contact Tab
document.querySelector('.contact').addEventListener('click', () => {
    console.log('Contact was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...contact()); 
})