export const renderDeadline = (elem) => {
  const timerTitle = document.createElement('p');
  const timerItemDays = document.createElement('p');
  const timerCountDays = document.createElement('span');
  const timerUnitsDays = document.createElement('span');
  const timerItemHours = document.createElement('p');
  const timerCountHours = document.createElement('span');
  const timerUnitsHours = document.createElement('span');
  const timerItemMinutes = document.createElement('p');
  const timerCountMinutes = document.createElement('span');
  const timerUnitsMinutes = document.createElement('span');

  elem.classList.add('timer');

  timerTitle.className = 'timer__title';
  timerTitle.textContent = 'До конца акции осталось:';

  timerItemDays.className = 'timer__item timer__item_days';
  timerCountDays.className = 'timer__count timer__count_days';
  timerUnitsDays.className = 'timer__units timer__units_days';

  timerItemHours.className = 'timer__item timer__item_hours';
  timerCountHours.className = 'timer__count timer__count_hours';
  timerUnitsHours.className = 'timer__units timer__units_hours';

  timerItemMinutes.className = 'timer__item timer__item_minutes';
  timerCountMinutes.className = 'timer__count timer__count_minutes';
  timerUnitsMinutes.className = 'timer__units timer__units_minutes';

  timerItemDays.append(timerCountDays, timerUnitsDays);
  timerItemHours.append(timerCountHours, timerUnitsHours);
  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);

  elem.append(timerTitle, timerItemDays, timerItemHours, timerItemMinutes);

  return {
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  }
}