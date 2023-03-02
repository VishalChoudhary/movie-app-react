import React, { useContext } from 'react';

//Context <API /></ >
//useContext hooks

//context(warehouse)
//Provider
//Consumer / (useContext())

const AppContext = React.createContext();

//creating provider function
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="ShivEr">{children}</AppContext.Provider>
}


//creating global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };