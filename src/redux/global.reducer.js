import { EDIT_MESSAGE_COMPONENT, FETCH_INITIAL_DATA_SUCCESS, INITIATE_DB_FAILURE, INITIATE_DB_REQUEST } from "./global.constants";

const initialState = {
    share_price: 0,
    deadlines: [],
    loading: false,
    modalData: { isVisible: false, isOnCreate: true, item: false },
    error: '',
    message: {      
      content: 'empty content',
      show: false,
      variant: 'success',
      title: 'Title',
      sub_content: false,
    }
  };

const globalReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case INITIATE_DB_REQUEST:
      // console.log('INITIATE_DB_REQUEST :>> ', INITIATE_DB_REQUEST);
        return { ...state, loading: true };
    case FETCH_INITIAL_DATA_SUCCESS:
      const data ={
        ...state,
        loading: false,
        error: '',
        deadlines: payload,
        // share_price: payload.share_price,
      };
      // console.log('FETCH_INITIAL_DATA_SUCCESS :>> ', data);
      return data
    case INITIATE_DB_FAILURE:
      console.log('INITIATE_DB_FAILURE :>> ', INITIATE_DB_FAILURE);
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case EDIT_MESSAGE_COMPONENT:
      return {
        ...state,
        message: {
          ...state.message,          
          content: payload.content,
          show: payload.show,
          variant: payload.variant,
          title: payload.title,
          sub_content: payload.sub_content,
        }
      }
    default:
        return state
    }
}

export default globalReducer;