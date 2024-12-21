import React from 'react'
import SideBar from './SideBar'
import styles from './Homebody.module.css'
import MovieCard from './MovieCard'

function HomeBody() {
  return (
    
    <div className={styles.container}>
        <div>
            <SideBar/>
        </div>
        <div>
            <MovieCard/>
        </div>
        <div>
            <MovieCard/>
        </div>
        <div>
            <MovieCard/>
        </div>
        <div>
            <MovieCard/>
        </div>
        <div>
            <MovieCard/>
        </div>
    </div>
  )
}

export default HomeBody