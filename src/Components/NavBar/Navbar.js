import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={classes.Containerb}>
      <div className={classes.innercontainer}>
      <div className={classes.navMenu}>
      <ul>
        <Link to = "/" className={classes.navLink}>
        <li >Home</li>
        </Link>
        <Link to = "/About" className={classes.navLink}>
        <li >FlashCards</li>
        </Link>
        <Link to = "/Contact" className={classes.navLink}>
        <li >More Options</li>
        </Link>
      </ul>
      </div>
      <div className={classes.searchContainer}>
      <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form className={classes.formby} method="post">
            <button type="submit">New</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Navbar