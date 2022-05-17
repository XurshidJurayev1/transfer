import api from '../Api';

export const listTransfer = () => async (dispatch) => {
  const res = await api.get('/all');
  dispatch({
    type: 'LIST_TRANSFER', payload: res.data,
  });
};

export const login = ({ email, password }) => async (dispatch) => {
  const res = await api.post('/login', { email, password });
  dispatch({
    type: 'LOGIN', payload: res,
  });

};