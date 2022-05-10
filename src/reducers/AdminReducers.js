export const listTransfer = (state = [], action) => {
  switch (action.type) {
    case 'LIST_TRANSFER' :
      return action.payload;
    default:
      return state;
  }
};