const params = new URLSearchParams(window.location.search);

const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  const product = data.menu.find((item) => item.id == paramId);

  renderPage(product);
});

const outlet = document.getElementById("outlet");

function renderPage(product) {
  outlet.innerHTML = `
      
      <div class="d-flex justify-content-between fs-5">
        <a href="/">
          <img width="40px" src="/images/home.png" />
        </a>

        <p>Anasayfa / ${product.category} / ${product.title.toUpperCase()}</p>
      </div>

      
      <h1 class="text-center my-3">${product.title}</h1>

      <img
        src="${product.img}"
        class="rounded object-fit-cover shadow"
        alt="fiat egea"
      />

      <h3 class="mt-4">
        <span>Aracın Kategorisi:</span>
        <span class="text-danger">${product.category}</span>
      </h3>

      <h3 class="mt-4">
        <span>Aracın Aylık Kiralama Fiyatı:</span>
        <span class="text-danger">${product.price.toFixed(3)} ₺</span>
      </h3>

      <p class="lead">
        ${product.desc}
      </p>    
    `;
}
