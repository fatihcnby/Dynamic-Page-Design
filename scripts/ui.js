import { buttonData } from "./costants.js";

const buttonsArea = document.getElementById("buttons");

const menuList = document.getElementById("menu-list");

export const renderMenuItems = (data) => {
  menuList.innerHTML = data
    .map(
      (item) =>
        `<a
      href="/detail.html?id=${item.id}"
      id="card"
      class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
    >
      <img
        src="${item.img}"
        alt=""
        class="rounded shadow img-fluid"
      />

      <div>
        <div class="d-flex justify-content-between">
          <h5>${item.title}</h5>
          <p class="fw-bold">${item.price.toFixed(3)}₺</p>
        </div>
        <p class="lead">
        ${item.desc}
        </p>
      </div>
    </a>`
    )
    .join(" ");
};

export const renderButtons = (activeText) => {
  buttonsArea.innerHTML = "";

  buttonData.forEach((btn) => {
    const buttonEle = document.createElement("button");

    buttonEle.className = "btn btn-outline-danger";

    buttonEle.setAttribute("data-id", btn.value);

    buttonEle.innerText = btn.text;

    if (btn.text === activeText) {
      buttonEle.classList.add("btn-danger", "text-white");
    }

    buttonsArea.appendChild(buttonEle);
  });
};
