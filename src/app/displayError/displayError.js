const displayError = alertMsg => {
  const alert = document.createElement("p");
  alert.className = "alert";
  alert.textContent = alertMsg;
  if (document.body.firstElementChild.className !== "alert") {
    document.body.insertBefore(alert, document.body.childNodes[0]);
    setTimeout(alert.remove, 2000);
  }
};
export default displayError;
