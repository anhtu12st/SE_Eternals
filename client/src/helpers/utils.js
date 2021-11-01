function formatMoney(x) {
    x = x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    return x;
}

export const utils = {
    formatMoney
}