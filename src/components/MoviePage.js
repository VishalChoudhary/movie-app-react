import React from 'react'
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { id } = useParams();
    return (
        <>
            <div>
                Movie Page Working {id}
            </div>
        </>
    );
}

export default MoviePage