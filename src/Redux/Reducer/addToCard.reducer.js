import { CardConstants } from '../Actions/constants';

const initialState = {
  cardItem: {},
};

export const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CardConstants.ADD_TO_CARD: {
      const newState = {
        ...state,
        cardItem:action.payload.cardItem
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};
