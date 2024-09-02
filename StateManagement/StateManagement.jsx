// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// // Sharing State Between Components with props and lifting state up:
// const ParentComponent = () => {
//     const [sharedState, setSharedState] = useState('Shared Data');

//     return (
//       <div>
//         <ChildComponent sharedState={sharedState} />
//         <AnotherChild setSharedState={setSharedState} />
//       </div>
//     );
//   };

// // Managing More Complex State with the useReducer Hook:
// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const CounterWithReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// };

// // Global State Management with Context API:
// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [globalState, setGlobalState] = useState('Global State');

//   return (
//     <AppContext.Provider value={{ globalState, setGlobalState }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const ChildComponent = () => {
//   const { globalState, setGlobalState } = useContext(AppContext);

//   return (
//     <div>
//       <p>{globalState}</p>
//       <button onClick={() => setGlobalState('Updated Global State')}>Update</button>
//     </div>
//   );
// };

// // Managing More Complex State with the useReducer Hook:
// import { createStore } from 'redux';
// import { Provider, useDispatch, useSelector } from 'react-redux';

// const initialState = { count: 0 };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const ReduxCounter = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//     </div>
//   );
// };

// const App = () => (
//   <Provider store={store}>
//     <ReduxCounter />
//   </Provider>
// );
