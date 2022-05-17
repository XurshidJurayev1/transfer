export const listTransfer = (state = [], action) => {
  switch (action.type) {
    case 'LIST_TRANSFER' :
      return action.payload;
    default:
      return state;
  }
};

export const token = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.data.token;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.data.user;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const role = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.data.user.user.role;

    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return action.payload;
    default :
      return state;
  }
};