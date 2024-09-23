import axios from 'axios'
import { useState, useEffect } from 'react';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    async function GetMovieList() {
        try {
            const response = await axios.get('https://188.149.208.99:7127/api/Movies');

            console.log(response)
            setMovies(response.data)
        } catch (error) {
            console.log("Error fetching data: ", error)
        }
    }

    useEffect(() => {
        GetMovieList();
    }, [])


    return (
        <div className="main-container">
            <h1>List of Movies</h1>
            <ul className='list-container'>
                {movies.map(movie => (
                    <>
                        <div className='list-item'>
                            <li key={movie.id}>
                                <b>{movie.title}</b> - Released: {movie.releaseYear}
                            </li>
                            <button className='btn btn-warning'>Edit</button>
                        </div>
                    </>
                ))}
            </ul>
        </div>
    )
}