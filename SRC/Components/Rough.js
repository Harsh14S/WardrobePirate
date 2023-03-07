import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// Action Creators
const newBooking = (userName, netAmount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name: userName,
      amount: netAmount,
    }
  };
};
const cancelBooking = (userName, refAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name: userName,
      refundAmount: refAmount,
    }
  };
};

//Reducers

const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload]
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter(record => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservationList;
}

const cancellationHistory = (oldCancellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload]
  }
  return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    // console.log("amount", action.payload.amount);
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    // console.log("refundAmount ", action.payload.refundAmount);
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};


// Redux Store
import { createStore, combineReducers } from "redux";
import { Provider, useDispatch } from 'react-redux';

const railwayCentralStore = combineReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancellationHistory: cancellationHistory,
});

const store = createStore(railwayCentralStore);



const Rough = () => {
  return (
    <Provider store={store}>
      <Viewer />
    </Provider>
  )
}

const Viewer = () => {
  const dispatch = useDispatch();
  const action = newBooking("Om", 30);
  store.dispatch(action);
  store.dispatch(newBooking("Luffy", 70));
  store.dispatch(cancelBooking("Om", 20));
  console.log(store.getState());
  return (
    <View>
      <Text>Rough</Text>
    </View>
  )
}

export default Rough

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
