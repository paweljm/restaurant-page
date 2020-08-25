const createMenu = (() => {
    const create = () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
        //Creating divs for main and adding classes
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        div1.classList.add('menu-div');
        div2.classList.add('menu-div');
        div3.classList.add('menu-div');
        main.appendChild(div1);
        main.appendChild(div2);
        main.appendChild(div3);
        //adding content to divs
        const starterH2 = document.createElement('h2');
        starterH2.textContent = 'starters';
        const sidesH2 = document.createElement('h2');
        sidesH2.textContent = 'sides';
        const mainsH2 = document.createElement('h2');
        mainsH2.textContent = 'mains';
        const drinksH2 = document.createElement('h2');
        drinksH2.textContent = 'drinks';

        //menu items
        //starter
        const starter1 = document.createElement('p');
        starter1.innerHTML = 'Example Item<span>£10</span>';
        const starter2 = document.createElement('p');
        starter2.innerHTML = 'Example Item<span>£10</span>';
        const starter3 = document.createElement('p');
        starter3.innerHTML = 'Example Item<span>£10</span>';
        //sides
        const sides1 = document.createElement('p');
        sides1.innerHTML = 'Example Item<span>£10</span>';
        const sides2 = document.createElement('p');
        sides2.innerHTML = 'Example Item<span>£10</span>';
        const sides3 = document.createElement('p');
        sides3.innerHTML = 'Example Item<span>£10</span>';
        //mains
        const mains1 = document.createElement('p');
        mains1.innerHTML = 'Example Item<span>£10</span>';
        const mains2 = document.createElement('p');
        mains2.innerHTML = 'Example Item<span>£10</span>';
        const mains3 = document.createElement('p');
        mains3.innerHTML = 'Example Item<span>£10</span>';
        const mains4 = document.createElement('p');
        mains4.innerHTML = 'Example Item<span>£10</span>';
        const mains5 = document.createElement('p');
        mains5.innerHTML = 'Example Item<span>£10</span>';
        const mains6 = document.createElement('p');
        mains6.innerHTML = 'Example Item<span>£10</span>';
        //drinks
        const drinks1 = document.createElement('p');
        drinks1.innerHTML = 'Example Item<span>£10</span>';
        const drinks2 = document.createElement('p');
        drinks2.innerHTML = 'Example Item<span>£10</span>';
        const drinks3 = document.createElement('p');
        drinks3.innerHTML = 'Example Item<span>£10</span>';
        const drinks4 = document.createElement('p');
        drinks4.innerHTML = 'Example Item<span>£10</span>';
        const drinks5 = document.createElement('p');
        drinks5.innerHTML = 'Example Item<span>£10</span>';
        //appending items to divs
        //div1
        div1.appendChild(starterH2);
        div1.appendChild(starter1);
        div1.appendChild(starter2);
        div1.appendChild(starter3);

        div1.appendChild(sidesH2)
        div1.appendChild(sides1);
        div1.appendChild(sides2);
        div1.appendChild(sides3);

        //div2
        div2.appendChild(mainsH2);
        div2.appendChild(mains1);
        div2.appendChild(mains2);
        div2.appendChild(mains3);
        div2.appendChild(mains4);
        div2.appendChild(mains5);
        div2.appendChild(mains6);

        //div3
        div3.appendChild(drinksH2);
        div3.appendChild(drinks1);
        div3.appendChild(drinks2);
        div3.appendChild(drinks3);
        div3.appendChild(drinks4);
        div3.appendChild(drinks5);


    }
    return {create};
})();

export {createMenu};