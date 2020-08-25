const createHome = (() => {
    const create = () => {
        const body = document.querySelector('body');
    //create Nav and Main elements
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
        liMenuLink.setAttribute('href','#');
        liContactLink.setAttribute('href','#');
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

        //Creating divs for main and adding classes
        const divLeft = document.createElement('div');
        divLeft.classList.add('left');
        const divRight = document.createElement('div');
        divRight.classList.add('right')
        //creating elements for left div and adding text
        const h2 = document.createElement('h2');
        h2.innerHTML = 'Gourmet cuisine,<br> from fresh local ingredients';
        const paraLeft = document.createElement('p');
        paraLeft.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit fugit quidem itaque perferendis laboriosam...';
        //appending elements to left div
        divLeft.appendChild(h2);
        divLeft.appendChild(paraLeft);
        //creating elements for right div and adding attributes + text
        const imgRight = document.createElement('img');
        imgRight.setAttribute('src','../img/kitchen.jpg');
        const paraRight = document.createElement('p');
        paraRight.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum doloribus iste quis suscipit exercitationem architecto voluptas corporis totam, libero ullam tempora et nemo vel quasi quidem neque! Nesciunt iusto voluptate rerum aliquid, officia sed, necessitatibus nemo nostrum a beatae magni!';
        const bookLink = document.createElement('a');
        bookLink.setAttribute('href','#');
        bookLink.textContent = 'Book Table';
        //appending elements to div right
        divRight.appendChild(imgRight);
        divRight.appendChild(paraRight);
        divRight.appendChild(bookLink);
        //append divs to main
        main.appendChild(divLeft);
        main.appendChild(divRight);
        //appending main to body
        body.appendChild(main);
    }
    const remove = () => {
        main.remove();
        nav.remove();
    }
    return {create,remove};
})();

export {createHome};