import api from '../Api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { apiLink } from '../Api/ApiLink';
import { Api } from '../Api/NewApiUrl';

export const listTransfer = () => async (dispatch) => {
  const res = await api.get('/all');
  dispatch({
    type: 'LIST_TRANSFER', payload: res.data,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT', payload: '',
  });
};

export const login = ({ email, password }) => async (dispatch) => {
  // const res = await api.post('/login', { email, password });
  // console.log(res);
  await api.post('/login', { email, password }).then((data) => {
    console.log('data', data);
    dispatch({
      type: 'LOGIN', payload: data.data,
    });
  }).catch(error => {
    // toast.error(error.response.data);
    dispatch({
      type: 'ERROR', payload: error.response.data,
    });

  });
  // dispatch({
  //   type: 'LOGIN', payload: res,
  // });

};

function loginRequest() {
  return {
    type: 'LOGIN_FETCH',
  };
}

function loginError(err) {
  return {
    type: 'ERROR', payload: err,
  };
}

function testLogin(res) {
  return {
    type: 'LOGIN', payload: res,
  };
}

function infoUser(res) {
  return {
    type: 'USER_INFO', payload: res,
  };
}

export const fetchLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(loginRequest);
    axios.post(`${apiLink}login`, { email, password })
      .then(res => {
        dispatch(testLogin(res.data));
      }, error => {
        dispatch(loginError(error.response.data && error.response.data));
      });
  };
};

export const userLogin = ({ login, password }) => {
  return (dispatch) => {
    dispatch(loginRequest);
    axios.post(`${Api}login`, { login, password })
      .then(res => {
        dispatch(testLogin(res.data));
      }, error => {
        dispatch(loginError(error.response.data && error.response.data));
      });
  };
};

export const getUserInfo = ({ token }) => async (dispatch) => {
  const res = await api.get('user', {
    headers: {
      'X-API-KEY': token,
    },
  });
  dispatch({
    type: 'USER_INFO', payload: res.data,
  });
};

export const userInfo = ({ login, password, token }) => {
  return (dispatch) => {
    dispatch(loginRequest);
    axios.get(`${Api}user`, {
      headers: {
        Authorization: 'Bearer' + ' ' + token,
      },
    }, { login, password })
      .then(res => {
        dispatch(infoUser(res.data));
      }, error => {
        dispatch(loginError(error.response.data && error.response.data));
      });
  };
};