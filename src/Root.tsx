import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";

//NOTE this component exists so we can pass redux logic to our test suites
export default (props: any) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
