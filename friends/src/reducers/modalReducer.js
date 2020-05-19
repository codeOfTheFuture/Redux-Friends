import { MODAL_SHOW, MODAL_CLOSE } from '../actions';

const initialState = {
  show: null
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        show: true
      };
    case MODAL_CLOSE:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};
