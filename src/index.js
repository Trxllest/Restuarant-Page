import restPhoto from './TGF-img.jpeg';

function component() {


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


// append all elements 
document.getElementById('content').append(...component());