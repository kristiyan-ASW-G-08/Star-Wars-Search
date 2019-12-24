import { setToLS } from "../utilities/utilities";
const switchSides = () => {
  const switchSidesBtn = document.querySelector(".switch-sides-btn");
  const icon = document.querySelector(".search-btn");
  const body = document.body;
  const sides = [
    {
      side: "ligth-side",
      color: "rgb(79, 101, 199)",
      icon: '<i class="fas fa-jedi"></i>',
      text: "Join the Dark Side!"
    },
    {
      side: "dark-side",
      color: "rgb(219, 58, 58)",
      icon: '<i class="fab fa-galactic-republic"></i>',
      text: "Join the Light Side!"
    }
  ];
  let currentSide = JSON.parse(localStorage.getItem("currentSide"));
  if (currentSide !== undefined) {
    switchSidesBtn.textContent = currentSide.text;
    body.style.setProperty("--primary", currentSide.color);
    icon.innerHTML = currentSide.icon;
  } else {
    setToLS("currentSide", sides[0]);
    currentSide = JSON.parse(localStorage.getItem("currentSide"));
  }
  switchSidesBtn.addEventListener("click", () => {
    const newSide = sides.find(sind => sind.side !== currentSide.side);
    switchSidesBtn.textContent = newSide.text;
    body.style.setProperty("--primary", newSide.color);
    icon.innerHTML = newSide.icon;
    setToLS("currentSide", newSide);
    currentSide = newSide;
  });
};
export default switchSides;
