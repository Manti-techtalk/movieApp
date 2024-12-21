import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react'

function Header() {
    const [search,setSearch] = useState('')
    const handleEnter = (event)=>{
        if (event.key === 'Enter'){
            setSearch()
        }
    }
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.btn}>
                <button className={styles.btn}>MovieBox</button>
            </div>
        </nav>
        <div className={styles.search}>
        <div className={styles.i}>
            <i class="fa-regular fa-circle"></i>
            </div>
            <input  className={styles.searchh} type="search"
            value={search} 
            onChange={(event)=>setSearch(event.target.value)}
            onKeyDown={handleEnter}
            placeholder='search movies' />
        </div>
        <div className={styles.login}>
            <button className={styles.login}>Login</button>
        </div>
    </header>
  )
}

export default Header