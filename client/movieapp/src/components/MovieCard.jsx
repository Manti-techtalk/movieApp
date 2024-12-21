import React, { useState, useEffect } from 'react';
import styles from './MovieCard.module.css';

function MovieCard() {
    const [movieData, setMovieData] = useState([]);

    const fetchData = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=e2136ca45680003fcbb39868b531db74')
            .then(res => res.json()) // Corrected json() method
            .then(data => setMovieData(data.results)) // Access the results from the data object
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to call fetchData once on mount

    return (
        <div className={styles.container}>
            {movieData.map(movie => (
                <div key={movie.id} className={styles.card}>
                    <div className={styles.big}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h3>{movie.title}</h3>
                    <p className={styles.rating}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <i
                                key={index}
                                className="fa-solid fa-star"
                                style={{ color: index < Math.round(movie.vote_average / 2) ? '#ffd700' : '#ccc' }}
                            ></i>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default MovieCard;
