const createNav = (() => {
    const body = document.querySelector('body');
    //create Nav and Main element
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    //create direct children of Nav
        //create h1 + textContent
        const h1 = document.createElement('h1');
        h1.textContent = 'FOOD';
        //creating Unordered List and the List elements to contain
        const ul = document.createElement('ul');
        const liHome = document.createElement('li');
        const liMenu = document.createElement('li');
        const liContact = document.createElement('li');
        //creating link and textContent for li elements
        const liHomeLink = document.createElement('a');
        liHomeLink.textContent = 'Home';
        const liMenuLink = document.createElement('a');
        liMenuLink.textContent = 'Menu';
        const liContactLink = document.createElement('a');
        liContactLink.textContent = 'Contact';
        //adding href to links and appending to li
        liHomeLink.setAttribute('href','#');
        liHomeLink.setAttribute('id','homeBtn');
        liMenuLink.setAttribute('href','#');
        liMenuLink.setAttribute('id','menuBtn');
        liContactLink.setAttribute('href','#');
        liContactLink.setAttribute('id','contactBtn');
        liHome.appendChild(liHomeLink);
        liContact.appendChild(liContactLink);
        liMenu.appendChild(liMenuLink);
        //appending li to ul
        ul.appendChild(liHome);
        ul.appendChild(liMenu);
        ul.appendChild(liContact)
        //appending h1 and ul to nav
        nav.appendChild(h1);
        nav.appendChild(ul);
        //appending nav to body
        body.appendChild(nav);
        body.appendChild(main);
})();

export {createNav};