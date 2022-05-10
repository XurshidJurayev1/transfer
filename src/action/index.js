import api from '../Api';

export const listTransfer = () => async (dispatch) => {
  const res = await api.get('/all');
  dispatch({
    type: 'LIST_TRANSFER',
    payload: res.data,
  });
};