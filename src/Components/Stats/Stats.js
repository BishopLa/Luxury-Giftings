import React from 'react'
import classes from "./Stats.module.css"
const Stats = ({items}) => {

  if (!items.length) return <p className= {classes.stats}><em> 
    Start adding your gifts to your packing list🎉
    </em></p>

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className={classes.stats}>
        <footer>
            <em> 
            {percentage === 100 ? "You are good to go ✈! everything is well packed" :
            `🎁💼You have ${numItems} items on your list and you are already packed ${numPacked}(${percentage}%)`
              }
            </em>
        </footer>
        </div>
  )
}

export default Stats