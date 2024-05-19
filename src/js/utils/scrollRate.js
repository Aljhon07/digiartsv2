export function scrollRate(rate = 100) {
  const calcRate = (window.scrollY * 0.1) / rate;
  return calcRate;
}
