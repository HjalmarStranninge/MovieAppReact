import axios from 'axios'
import { useState } from 'react'

export default function MovieCreate({ refresh }) {

    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    async function handleSubmit() {
        try {
            const movie = { title, releaseYear: parseInt(releaseYear) }

            await axios.post('https://localhost:7127/api/Movies/addMovie', movie)
        } catch (error) {
            console.log(movie)
            console.log(error)
        }

        refresh();
    }

    return (

        <div className="main-container">
            <h1>Add New Movie</h1>
            <form onSubmit={handleSubmit} className='movie-form'>

                <div className="form-column">
                    <label className='form-label'>Movie Title</label>
                    <input
                        id='title'
                        className='form-control'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-column">
                    <label className='form-label'>Release Date</label>
                    <input
                        id='releaseYear'
                        className='form-control'
                        type='number'
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />
                </div>

                <button className='btn btn-success edit-button' type='submit'>Save</button>
            </form>
        </div>


    )
}