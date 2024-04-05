// Get today's date
const today = new Date();
const dayOfWeek = today.getDay();

const startOfCurrentWeek = new Date(today);
startOfCurrentWeek.setDate(today.getDate() - dayOfWeek);

const startOfNextWeek = new Date(startOfCurrentWeek);
startOfNextWeek.setDate(startOfCurrentWeek.getDate() + 7);

const currentWeekDays = [];
const nextWeekDays = [];

for (let i = 0; i < 7; i++) {
  const currentDate = new Date(startOfCurrentWeek);
  currentDate.setDate(startOfCurrentWeek.getDate() + 1 + i);

  const nextDate = new Date(startOfNextWeek);
  nextDate.setDate(startOfNextWeek.getDate() + 1 + i);

  if (currentDate >= today) {
    currentWeekDays.push(currentDate.toLocaleDateString('sv-SE'));
  }

  nextWeekDays.push(nextDate.toLocaleDateString('sv-SE'));
}

const bookableDates = [...currentWeekDays, ...nextWeekDays];

export default bookableDates;
