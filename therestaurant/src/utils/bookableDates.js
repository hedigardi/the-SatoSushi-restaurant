const bookableDates = () => {
  const today = new Date();
  const startOfCurrentWeek = new Date(today);
  const diff =
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  startOfCurrentWeek.setDate(diff);

  const startOfNextWeek = new Date(startOfCurrentWeek);
  startOfNextWeek.setDate(startOfCurrentWeek.getDate() + 7);

  const currentWeekDays = [];
  const nextWeekDays = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfCurrentWeek);
    currentDate.setDate(startOfCurrentWeek.getDate() + i);

    const nextDate = new Date(startOfNextWeek);
    nextDate.setDate(startOfNextWeek.getDate() + i);

    if (currentDate >= today) {
      currentWeekDays.push(currentDate.toLocaleDateString('sv-SE'));
    }

    nextWeekDays.push(nextDate.toLocaleDateString('sv-SE'));
  }

  return [...currentWeekDays, ...nextWeekDays];
};

export default bookableDates;
