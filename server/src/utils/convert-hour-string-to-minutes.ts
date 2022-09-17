export function ConvertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmnount = hours * 60 + minutes;

  return minutesAmnount;
}
