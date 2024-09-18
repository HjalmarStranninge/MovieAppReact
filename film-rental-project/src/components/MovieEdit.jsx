import axios from 'axios'
import { useState, useEffect } from 'react';

export default function MovieEdit() {
    const [movie, editMovie] = useState([]);

    return (
        <>
            <h2>Edit Movie</h2>
            <form className='movie-form'>

                <div className="form-column">
                    <label className='form-label'>Movie Title</label>
                    <input
                        id='title'
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
                        type='number'
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />
                </div>

                <button class='btn btn-success edit-button' type='submit'>Save Changes</button>
            </form>
        </>
    )
}