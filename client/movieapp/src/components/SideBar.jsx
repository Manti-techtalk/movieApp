import React from 'react'
import styles from './Sidebar.module.css'

function SideBar() {
  return (
    <>
    <div className={styles.container}>
        <h2>Filter</h2>
        <p>Genre</p>
        <div className={styles.cont}>
            <p className={styles.type}>action</p>
            <p className={styles.type}>Comedy</p>
            <p className={styles.type}>Romance</p>
            <p className={styles.type}>Thriller</p>
            <p className={styles.type}>Animation</p>
            <p className={styles.type}>Horror</p>
            <p className={styles.type}>Fantacy</p>
            <p className={styles.type}>Science Fiction</p>
            <p className={styles.type}>Musical</p>
            <p className={styles.type}>Drama</p>
        </div>
        <p>Rating</p>
        <p className={styles.rating}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </p>
    </div>
    </>
  )
}

export default SideBar