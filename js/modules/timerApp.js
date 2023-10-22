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

const getTimeRemaining = (day, month, year, hour = '00', minute = '00') => {
  const dateStop = new Date(
    `${year}-${month}-${day}T${hour}:${minute}:00+03:00`).getTime();
  const dateNow = Date.now() + (3 * 60 * 60 * 1000);

  const timeRemaining = dateStop - dateNow;

  const seconds = Math.floor(timeRemaining / 1000 % 60);
  const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
  const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
  const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

  return { timeRemaining, seconds, minutes, hours, days }
}

export const timerApp = (deadline, timer, timerElems, heroText) => {

  const {
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  } = timerElems;

  const dataDate = deadline.split(' ').reduce((acc, item) => {
    if (item.includes('/')) {
      acc.push(...item.split('/'));
    }
    if (item.includes(':')) {
      acc.push(...item.split(':'));
    }
    return acc;
  }, []);

  const start = () => {
    const { timeRemaining, seconds, minutes, hours, days } = getTimeRemaining(...dataDate);
    const {
      daysText,
      hoursText,
      minutesText,
      secondsText,
    } = formatTimeRemaining(days, hours, minutes, seconds);

    timerCountDays.textContent = days || checkZero(hours);
    timerUnitsDays.textContent = days ? daysText : hoursText;
    timerCountHours.textContent = days ? checkZero(hours) : checkZero(minutes);
    timerUnitsHours.textContent = days ? hoursText : minutesText;
    timerCountMinutes.textContent = days ?
      checkZero(minutes) : checkZero(seconds);
    timerUnitsMinutes.textContent = days ? minutesText : secondsText;

    const intervalId = setTimeout(start, 1000);

    if (timeRemaining <= 0) {
      clearTimeout(intervalId);

      timer.textContent = '';
      heroText.textContent = '';
    }
  }

  start();
}