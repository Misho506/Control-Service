import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../actions";
import list from "./List";

const initialState = {
  list,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;