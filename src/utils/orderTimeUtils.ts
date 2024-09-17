export const getRoundedTime = (date: Date) => {
  const minutes = 15;
  const ms = 1000 * 60 * minutes;
  return new Date(Math.ceil(date.getTime() / ms) * ms);
};

export const generateTimeOptions = () => {
  const options = ["ASAP (15 mins)"];
  const currentTime = getRoundedTime(new Date());

  for (let i = 2; i <= 6; i++) {
    const nextTime = new Date(currentTime.getTime() + i * 15 * 60000);
    const timeString = nextTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    options.push(timeString);
  }

  return options;
};
