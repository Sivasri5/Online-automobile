document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    const model = params.get('model');
    const image = params.get('image');
    const price = params.get('price');
    const description = params.get('description');

    const carDetailContainer = document.querySelector(".car-detail-container");

    const carDetailContent = `
        <div class="car-detail">
            <img src="${image}" alt="${brand} ${model}">
            <h2>${brand} ${model}</h2>
            <p>Price: ${price}</p>
            <p>Description: ${description}</p>
        </div>
    `;

    carDetailContainer.innerHTML = carDetailContent;
});
