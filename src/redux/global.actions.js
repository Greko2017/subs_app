import { FETCH_INITIAL_DATA_SUCCESS, INITIATE_DB_FAILURE, INITIATE_DB_REQUEST, POST_SUBSCRIPTION_SUCCESS } from "./global.constants";
import axios from 'axios';
import { api_endpoint } from "../env";

// Actions Creator
export const initiateDbRequest = value => {
    return {
      type: INITIATE_DB_REQUEST,
      payload: value,
    };
  };
  export const initiateDbFailure = error => {
    return {
      type: INITIATE_DB_FAILURE,
      payload: error,
    };
  };

  
// InitialData Actions Creator
export const fetchInitialDataSuccess = initData => {
    return {
      type: FETCH_INITIAL_DATA_SUCCESS,
      payload: initData,
    };
  };
  
  // fetch InitialData
  export const fetchInitialData = () => {
    // console.log('---- fetchInitialData');
    return dispatch => {
      dispatch(initiateDbRequest);
      
      axios
        .get(api_endpoint + '/api/init_data/')
        .then(response => {
          const initData = response.data;
          // console.log('---- fetchInitialData initData', initData);
          dispatch(fetchInitialDataSuccess(initData));
        })
        .catch(error => {
        //   console.error('---- fetchInitialData error', error);
          const errorMsg = error.message;
          dispatch(initiateDbFailure(errorMsg));
        });
    };
  };
  
  // Post subscription
  export const postSubscriptionSuccess = subscription => {
    return {
      type: POST_SUBSCRIPTION_SUCCESS,
      payload: subscription,
    };
  };

  
// fetch Subscription
export const postSubscription = subscription => {
    let params = {
      name: subscription.name,
      description: subscription.description,
    };
    
    return dispatch => {
      dispatch(initiateDbRequest);
      
      console.log('postSubscription params :>> ', params);
      axios
        .post(api_endpoint + '/api/subscription/', params)
        .then(response => {
          const Subscription = response.data;
          dispatch(postSubscriptionSuccess(Subscription));
          return Subscription;
        })
        .catch(error => {
          console.error('---- postSubscription error', error);
          const errorMsg = error.message;
          dispatch(initiateDbFailure(errorMsg));
        })
        .finally(() => console.log('data posted :>> ',));
    };
  };