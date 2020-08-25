const createContact = (() => {
    const create = () => {
        const main = document.querySelector('main');
        main.innerHTML = "";
        //creating container
        const container = document.createElement('div');
        //Creating divs for main and adding classes
        const divLeft = document.createElement('div');
        divLeft.classList.add('contact-div');
        const divRight = document.createElement('div');
        divRight.classList.add('contact-div');
        //creating elements for left div
        const h2 = document.createElement('h2');
        h2.textContent = 'Find us at:';
        const add1 = document.createElement('p');
        add1.textContent = '123 fake street';
        const add2 = document.createElement('p');
        add2.textContent = 'not real place';
        const add3 = document.createElement('p');
        add3.textContent = 'Example City';

        const br = document.createElement('br')

        const add4 = document.createElement('p');
        add4.textContent = 'AB1 2CD';

        const h3 = document.createElement('h3');
        h3.textContent = 'Or contact us on:';
        const tel = document.createElement('p');
        tel.textContent = '+44 71234567890';
        const email = document.createElement('p')
        email.textContent = 'food@restaurant.com';
        //append elements to left div
        divLeft.appendChild(h2);
        divLeft.appendChild(add1);
        divLeft.appendChild(add2);
        divLeft.appendChild(add3);
        divLeft.appendChild(br);
        divLeft.appendChild(add4);
        divLeft.appendChild(h3);
        divLeft.appendChild(tel);
        divLeft.appendChild(email);
        //creating iframe for right div
        const map = document.createElement('iframe');
        map.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50300901.12859194!2d-71.99415285817746!3d-39.69193024421607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2sAntarctica!5e0!3m2!1sen!2suk!4v1598380036265!5m2!1sen!2suk');
        map.setAttribute('width','600');
        map.setAttribute('height','450');
        map.setAttribute('frameborder','0');
        map.setAttribute('style','border:0');
        map.setAttribute('allowfullscreen','');
        map.setAttribute('aria-hidden','false');
        map.setAttribute('tabindex','0');
        //appending iframe to right div
        divRight.appendChild(map);
        //appending divs to container and container to main
        container.appendChild(divLeft);
        container.appendChild(divRight);

        main.appendChild(container);
    }
    return {create};
})();

export {createContact};