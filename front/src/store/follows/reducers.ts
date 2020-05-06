import { FETCH_USER_FOLLOWS, SET_HAS_LOCAL_WARNING_TOAST_BEEN_SHOWN } from './actions';

const initialState = {
  hasLocalWarningToastBeenShown: false,
  userFollows: [],
};

export interface FollowReducerState {
  followReducer: {
    hasLocalWarningToastBeenShown: false;
    userFollows: [];
  };
}

export function followReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_USER_FOLLOWS: {
      return {
        ...state,
        userFollows: action.payload,
      };
    }
    case SET_HAS_LOCAL_WARNING_TOAST_BEEN_SHOWN: {
      return {
        ...state,
        hasLocalWarningToastBeenShown: true,
      };
    }
    default:
      return state;
  }
}
