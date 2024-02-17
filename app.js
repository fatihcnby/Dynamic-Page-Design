import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");

let data;

async function fetchMenu() {
  const res = await fetch("./db.json");

  data = await res.json();
}

window.addEventListener("DOMContentLoaded", async () => {

  renderButtons('Hepsi');

  fetchMenu().then(() => renderMenuItems(data.menu));
});

buttonsArea.addEventListener("click", (event) => {
  if (event.target.id == "buttons") return;

  renderButtons(event.target.innerText);

  const selectedCategory = event.target.dataset.id;

  if (selectedCategory === "all") {
    renderMenuItems(data.menu);
  } else {
    const filtred = data.menu.filter(
      (item) => item.category === selectedCategory
    );

    renderMenuItems(filtred);
  }
});
