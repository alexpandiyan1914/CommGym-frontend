const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const getTodayIndex = () => {
  const today = new Date().getDay(); // 0 = Sunday
  return today === 0 ? 6 : today - 1; // convert to Mon=0
};

export const getWeekDays = () => days;

export const getStreak = () => {
  return Number(localStorage.getItem("cg_streak")) || 0;
};

export const incrementStreak = () => {
  const current = getStreak();
  const newStreak = current + 1;
  localStorage.setItem("cg_streak", newStreak);
  return newStreak;
};