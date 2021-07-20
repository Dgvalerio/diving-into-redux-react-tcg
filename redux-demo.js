const redux = require('redux');

/** counterReducer
 * @param state - Old state
 * @param action - Action to set a new state
 * */
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
