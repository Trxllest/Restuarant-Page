export default function contact() {

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    // Phone Number
    const phone  = document.createElement('h3');
    phone.textContent = 'Phone:  123-456-7890';

    // Hours of Operation
    const restHours = document.createElement('h3');
    restHours.textContent = 'Mon - Sat:  10:00am - 11:00pm';

    return [headline, phone, restHours];
}