function formatMoney(x) {
  return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
function totalPrice(items) {
  return items.reduce((result, a) => result + a.quantity * a.price, 0);
}
export const utils = {
  formatMoney,
  totalPrice,
};
