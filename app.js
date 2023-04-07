const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button button");
let history = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.getAttribute("data-num");
    if (buttonValue === "=") {
      if (screen.value === "") {
        screen.value = "";
      } else {
        screen.value = eval(screen.value);
      }
    } else if (buttonValue === "C") {
      screen.value = "";
      history = "";
    } else {
      screen.value += buttonValue;
      history += buttonValue;
      screen.setAttribute("value", history);
    }
  });
});
