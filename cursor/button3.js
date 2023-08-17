const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#sync");
const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};
BUTTON.addEventListener("click", TOGGLE);