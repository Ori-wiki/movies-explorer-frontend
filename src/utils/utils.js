function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 === 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

export function transformTime(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  } else {
    return `${hours} ${declOfNum(hours, [
      'час',
      'часа',
      'часов',
    ])} ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  }
}
