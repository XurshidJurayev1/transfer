export const listTransfer = (state = [], action) => {
  switch (action.type) {
    case 'LIST_TRANSFER' :
      return action.payload;
    default:
      return state;
  }
};

export const token = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.data.data;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return action.payload;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const role = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;

    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const error = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR' :
      return action.payload;
    default :
      return state;
  }
};