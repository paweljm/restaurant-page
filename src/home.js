const createHome = (() => {
    const create = () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
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
    }
    return {create};
})();

export {createHome};