import { renderDeadline } from "./renderDeadline.js";
import { timerApp } from "./timerApp.js";

export const deadline = () => {

  const timer = document.querySelector('.hero__timer[data-timer-deadline]');
  const heroText = document.querySelector('.hero__text');

  if (!timer) {
    return;
  }

  const timerElems = renderDeadline(timer);

  const dateDeadline = timer.dataset.timerDeadline;

  timerApp(dateDeadline, timer, timerElems, heroText);
}