console.log('test');
import {createNav} from './nav.js';
import {createHome} from './home.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';

createHome.create();
const homeButton = document.querySelector('#homeBtn');
const menuButton = document.querySelector('#menuBtn');
const contactButton = document.querySelector('#contactBtn');
menuButton.addEventListener('click', (e) => {
    createMenu.create();
});
homeButton.addEventListener('click', (e) => {
    createHome.create();
});
contactButton.addEventListener('click', (e) => {
    createContact.create();
})