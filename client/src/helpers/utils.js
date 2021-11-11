import categoryData from '../components/Header/data';

function formatMoney(x) {
  return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
function totalPrice(items) {
  return items.reduce((result, a) => result + a.quantity * a.price, 0);
}
const getCategoryDetailByName = (name) => (
  categoryData.find((ele) => ele.title.toLowerCase() === name.toLowerCase())
);
export const utils = {
  formatMoney,
  totalPrice,
  getCategoryDetailByName,
};
