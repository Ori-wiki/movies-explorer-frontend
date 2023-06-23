function endingOfNum(n, textForms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

export function transformTime(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes} ${endingOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  } else {
    return `${hours} ${endingOfNum(hours, [
      'час',
      'часа',
      'часов',
    ])} ${minutes} ${endingOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  }
}
