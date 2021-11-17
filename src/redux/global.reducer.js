import { FETCH_INITIAL_DATA_SUCCESS, INITIATE_DB_FAILURE, INITIATE_DB_REQUEST } from "./global.constants";

const initialState = {
    share_price: 0,
    deadlines: [],
    loading: false,
    modalData: { isVisible: false, isOnCreate: true, item: false },
    error: '',
  };

const globalReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case INITIATE_DB_REQUEST:
        return { ...state, loading: true };
    case FETCH_INITIAL_DATA_SUCCESS:
        return {
        ...state,
        loading: false,
        error: '',
        deadlines: payload.deadlines,
        share_price: payload.share_price,
    };
    case INITIATE_DB_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
        return state
    }
}

export default globalReducer;