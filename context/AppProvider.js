
import React, { useReducer } from 'react';
import PropTypes from "prop-types";
import { Provider } from './AppContext';
import reducer from './Reducer';

const initialState = {
  text: {
    loading: true,
    error: null,
    data: [],
  },
  language: {
    loading: true,
    error: null,
    data: [],
  },
  list: {
    loading2: true,
    error2: null,
    data2: [],
  }
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{
      state,
      dispatch
    }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};


export default AppProvider;