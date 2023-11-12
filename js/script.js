import { burgerApp } from "./modules/burger.js";
import { deadline } from "./modules/deadline.js";
import { accordion } from "./modules/acc.js";

const init = () => {
  burgerApp();
  deadline();
  accordion();
}

init();