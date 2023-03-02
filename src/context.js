import React, { useContext, useEffect, useState } from 'react';

//Context <API /></ >
//useContext hooks

//context(warehouse)
//Provider
//Consumer / (useContext())

const AppContext = React.createContext();

const API_URL = `http://www.omdbapi.com/?apikey=be2acd45&s=titanic`;

//creating provider function
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true); //eslint-disable-line
    const [movie, setMovie] = useState(true); // eslint-disable-line
    const [isError, setIsError] = useState({ show: 'false', msg: "" }); // eslint-disable-line

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === 'True') {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies(API_URL);
    }, []);


    return <AppContext.Provider value={{ isLoading, isError, movie }}>
        {children}
    </AppContext.Provider>
}


//creating global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };