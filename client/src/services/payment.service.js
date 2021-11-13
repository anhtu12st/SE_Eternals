import axios from './Axios';

const CREATE_PAYMENT = '/payment';

export const createPayment = async (body) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: CREATE_PAYMENT,
      data: body,
    });
    return {
      errCode: data.errCode,
      errDetail: data.errDetail,
      result: data.data,
    };
  } catch (error) {
    return {
      errCode: 1,
      errDetail: 'System error',
      result: null,
    };
  }
};
