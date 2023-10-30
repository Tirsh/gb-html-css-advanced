if(document.querySelector('.carousel__inner') != null){
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false
    });
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev'); 
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next'); 
    });
}

const productsInfo = JSON.parse(data);
const wrapper = document.querySelector(".items__grid");
productsInfo.items.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("item");
    card.setAttribute('id', element.id);
    card.innerHTML = `
        <div class="item__img">
            <img src="${element.thumbnail}" alt="${index}">
        </div>
        <div class="item__data">
            <div class="item__title">${element.title}</div>
            <div class="item__desc">${element.description}</div>
            <div class="item__price">${element.price}</div>
        </div>
    `;
    wrapper.appendChild(card);    
});

function addToCartItems(index) {
    const productData = productsInfo.items[index];
    const card = document.createElement("div");
    const wrapper = document.querySelector(".cart-items__wrapper");
    const cartItems = document.querySelector(".cart-items");
    card.classList.add("cart-items__item", "cart__card");
    card.innerHTML = `
        <img class="cart__card-img" src="${productData.thumbnail}" alt="${productData.id}">
        <div class="cart__card-info">
            <h3 class="cart__card-info-title">${productData.title}</h3>
            <div class="cart__card-info-price">Price: <span>${productData.price}</span></div>
            <div class="cart__card-info-color">Color: Red</div>
            <div class="cart__card-info-size">Size: Xl</div>
            <div class="cart__card-info-quantity">Quantity:	
                <form action="#" class="cart__card-info-quantity-form">
                    <input type="text" value="1">
                </form>
            </div>	
        </div>
        <div class="cart__card-close">
            <div class="cart__card-close-wrapper alive__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                </svg>
            </div>
        </div>
    `;
    card.querySelector(".cart__card-close").addEventListener("click", () => {
        card.remove();
        if (wrapper.childNodes.length === 0) {
            cartItems.classList.remove("cart-items_show");
        }
    });
    if (wrapper) {
        wrapper.appendChild(card);
        cartItems.classList.add("cart-items_show");
    }    
}

document.querySelector(".items__grid").addEventListener("click", (e) => {
    const target = e.target;
    if (target.parentNode.classList.contains("item")){
        const index = target.parentNode.getAttribute("id");
        addToCartItems(index);
    }
});

