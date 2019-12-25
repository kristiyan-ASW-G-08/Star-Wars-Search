import { setToLS } from "../utilities/utilities";

const setSide = ({ text, color, icon, name }) => {
  const switchSidesBtn = document.getElementById("sides-button");
  const searchButton = document.getElementById("search-button");
  switchSidesBtn.textContent = text;
  document.body.style.setProperty("--primary", color);
  searchButton.innerHTML = icon;
  setToLS("currentSide", name);
};
const switchSides = () => {
  const switchSidesBtn = document.getElementById("sides-button");
  const sides = {
    light: {
      name: "light",
      color: "rgb(79, 101, 199)",
      icon: '<i class="fas fa-jedi"></i>',
      text: "Join the Dark Side!"
    },
    dark: {
      name: "dark",
      color: "rgb(219, 58, 58)",
      icon: '<i class="fab fa-galactic-republic"></i>',
      text: "Join the Light Side!"
    }
  };
  if (JSON.parse(localStorage.getItem("currentSide")) === undefined) {
    setToLS("currentSide", "light");
  }
  const currentSide =
    sides[JSON.parse(localStorage.getItem("currentSide"))] || sides.light;
  setSide(currentSide);
  switchSidesBtn.addEventListener("click", () => {
    const currentSideName = JSON.parse(localStorage.getItem("currentSide"));
    const newSide = currentSideName === "light" ? sides.dark : sides.light;
    setSide(newSide);
  });
};
export default switchSides;
