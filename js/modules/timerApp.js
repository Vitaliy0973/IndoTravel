const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const formatTimeRemaining = (days, hours, minutes, seconds) => {
  const daysText = declOfNum(days, ['день', 'дня', 'дней']);
  let hoursText = declOfNum(hours, ['час', 'часа', 'часов']);
  let minutesText = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  let secondsText = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

  return { daysText, hoursText, minutesText, secondsText };
};

const checkZero = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

export const timerApp = (deadline, timer, timerElems, heroText) => {

  const {
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  } = timerElems;

  const [day, month, year] = deadline.split('/');

  const getTimeRemaining = () => {
    const dateStop = new Date(`${year}-${month}-${day}T00:00:00+03:00`).getTime();
    const dateNow = Date.now() + (3 * 60 * 60 * 1000);

    const timeRemaining = dateStop - dateNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return { timeRemaining, seconds, minutes, hours, days }
  }

  const start = () => {
    const timerData = getTimeRemaining();
    const {
      daysText,
      hoursText,
      minutesText,
      secondsText,
    } = formatTimeRemaining(
      timerData.days,
      timerData.hours,
      timerData.minutes,
      timerData.seconds
    );

    timerCountDays.textContent = timerData.days || checkZero(timerData.hours);
    timerUnitsDays.textContent = timerData.days ? daysText : hoursText;
    timerCountHours.textContent = timerData.days ?
      checkZero(timerData.hours) : checkZero(timerData.minutes);
    timerUnitsHours.textContent = timerData.days ? hoursText : minutesText;
    timerCountMinutes.textContent = timerData.days ?
      checkZero(timerData.minutes) : checkZero(timerData.seconds);
    timerUnitsMinutes.textContent = timerData.days ? minutesText : secondsText;

    const intervalId = setTimeout(start, 1000);

    if (timerData.timeRemaining <= 0) {
      clearTimeout(intervalId);

      timer.textContent = '';
      heroText.textContent = '';
      console.log(timer);
    }
  }

  start();

}