async function getData() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  let { products } = data;
  let cardContainer = document.getElementById("cards");

  products.forEach((product) => {
    let { title, description, price, images,  id } = product;

    cardContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${images[0]}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title"><a href="./card-detail/index.html?id=${id}" target="_blank" class="text-decoration-none">${title}</a></h5>
            <p class="card-text">${description.slice(0, 60)}...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">$${price}</small>
          </div>
        </div>
      </div>
    `;
  });
}



getData();