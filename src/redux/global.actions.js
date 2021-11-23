import { EDIT_MESSAGE_COMPONENT, FETCH_INITIAL_DATA_SUCCESS, INITIATE_DB_FAILURE, INITIATE_DB_REQUEST, POST_SUBSCRIPTION_SUCCESS } from "./global.constants";
import axios from 'axios';
import { api_endpoint } from "../env";
import moment from 'moment';
// Actions Creator
export const initiateDbRequest = () => {
    return {
      type: INITIATE_DB_REQUEST, 
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
    dispatch(initiateDbRequest());
    // console.log('object :>> ', api_endpoint + '/api.php?c=list');
    axios
      .get(api_endpoint + '/api.php?c=list')
      .then(response => {
        const initData = response.data;
        // console.log('---- fetchInitialData initData', initData);
        dispatch(fetchInitialDataSuccess(initData));
      })
      .catch(error => {
        // console.error('---- fetchInitialData error', error);
        const errorMsg = error.message;
        dispatch(initiateDbFailure(errorMsg));
      });
    };
  };
  
  // Edit Message 
  export const editMessageComponent = props => {
    return {
      type: EDIT_MESSAGE_COMPONENT,
      payload: props,
    };
  };

  // Post subscription
  export const postSubscriptionSuccess = subscription => {
    return {
      type: POST_SUBSCRIPTION_SUCCESS,
      payload: subscription,
    };
  };

  
// post Subscription
export const postSubscription = subscription => {
  // console.log('-- In postSubscription :>> ', subscription);
    let params = {
      NAME : computeSubscriptionName('SUBS'),
      SURNAME : subscription.last_name,
      PHONE : subscription.phone_number,
      EMAIL : subscription.email,
      CITY : subscription.city,
      COUNTRY : subscription.state,
      // STREET : subscription.,
      ZIP_CODE : subscription.zip_code,
      ADDRESS : subscription.address,
      STATUS : "on",
      CIVILITY : "m",
      SHARES : {
        NAME : computeSubscriptionName('SHARE'),
        SHARES : subscription.share_number,
        DATE_SUBSCRIPTION : moment().format('DD/MM/YYYY'),
        ID_DEADLINE : subscription.ID_DEADLINE,
        STATUS : "on"
      }
    }
    return dispatch => {
      dispatch(initiateDbRequest);
      
      console.log('postSubscription params :>> ', params);
      axios
        .post(api_endpoint + '/api.php?c=add', params)
        .then(response => {
          console.error('---- postSubscription success', response);
          const Subscription = response.data;
          dispatch(postSubscriptionSuccess(Subscription));
            dispatch(editMessageComponent({            
              content: Subscription,
              show: true,
              variant: 'success',
              title: "Submitted !",
              sub_content: false,
            }))
          return Subscription;
        })
        .catch(error => {
          console.error('---- postSubscription error', error);
          const errorMsg = error.data;
          dispatch(initiateDbFailure(errorMsg));
            dispatch(editMessageComponent({            
              content: errorMsg,
              show: true,
              variant: 'danger',
              title: "Submitted !",
              sub_content: false,
            }))
        })
        .finally(() => {
          setTimeout(function() {
            // your code to be executed after 1 second
            dispatch(editMessageComponent({   
              content: 'empty content',
              show: false,
              variant: 'success',
              title: 'Title',
              sub_content: false,
            }))
          }, 10000);
        });
    };
  };

  
function computeSubscriptionName(name){
  let now = new window.Date();
  let year = now.getFullYear()
  let month = now.getMonth()
  let date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  return `${name} - ${year}${month<=9 ? `0${month+1}` : month+1 }${date>=9 ? `0${date+1}` : date}${hours}${minutes}${seconds}`
}
