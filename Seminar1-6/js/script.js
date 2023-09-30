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

const cardsInfo = JSON.parse(data);
const wrapper = document.querySelector(".items__grid");
cardsInfo.items.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("item");
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

