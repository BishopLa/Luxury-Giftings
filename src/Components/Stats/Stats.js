import React from 'react'
import classes from "./Stats.module.css"
const Stats = () => {
  return (
    <div className={classes.stats}>
        <footer>
            <em>
            🎁💼You have X items on your list and you are already packed X (X%)
            </em>
        </footer>
        </div>
  )
}

export default Stats