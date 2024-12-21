import React from 'react'
import styles from './MovieCard.module.css'

function MovieCard() {
  return (
    <div className={styles.container}>
        <div className={styles.big}></div>
        <h3>The Dark Night</h3>
        <p className={styles.rating}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
        </p>
    </div>
  )
}

export default MovieCard