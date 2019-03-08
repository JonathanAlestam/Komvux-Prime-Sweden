$(() => {
    const products = [
        { name: 'Rasberry Pi 3', price: 350, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/elektronik.jpg', category: 'Elektronik' },
        { name: 'Arduino', price: 755, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/elektronik1.jpg', category: 'Elektronik' },
        { name: 'Säng', price: 25, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/sang.jpg', category: 'Sängar' },
        { name: 'Vatten säng', price: 20, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/sang1.jpg', category: 'Sängar' },
        { name: 'Fotboll', price: 800, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/sport1.jpg', category: 'Sport' },
        { name: 'Golfboll', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/sport.jpg', category: 'Sport' },
        { name: 'Mobiltelefon', price: 25, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/telefon.jpg', category: 'Telefon' },
        { name: 'Old-School', price: 20, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/telefon1.jpg', category: 'Telefon' },
        { name: 'Unicorn', price: 800, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/leksak.jpeg', category: 'Leksaker' },
        { name: 'Marsvin', price: 2000, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam', picture: 'images/leksak1.jpg', category: 'Leksaker' }
    ];

    let cart = [];

    const appendList = (array, location) => { //2 parameters
        const template = array.map((item, id) => { //method map
            return `
            <li class="product col-3">
            <img src="${item.picture}" alt="${item.description}">
            <div class="product-content">
                <h4>${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small></h4>
                <p>${item.description}</p>
            </div>
            <button type="button" id="${item.id}">Köp NU</button>
            </li>
            `;
        });
        $(location).html(template); 
    }
    const addToCart = (array, id, location) => {

        let a = array.find(i => i.id === id); //a is a product

        cart.push(a);

        const item = ` 
        
        <li class="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type="button">Ta bort</button>
        </li>
        
        `;

        $('span.amount').text(cart.length); 
        $(location).append(item);
    }

    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    };

    const populateCart = (array, location) => {
        let item = `
        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">Ta bort</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };
    
    appendList(products, $('.product-list'));

    $('.product').on('click', 'button', (e) => { 
        let id = e.currentTarget.id;
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });

});