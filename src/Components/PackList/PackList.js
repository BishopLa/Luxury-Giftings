import React, { useState } from 'react'
import classes from "./PackList.module.css"
import Item from "../ItemProps/Item"


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Juggers", quantity: 4, packed: false}
// ];

const PackList = ({items, onDeleteItem, onToggleItem,  onClearList}) => {

    const[sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input")sortedItems=items;

    if (sortBy === "description") 
    sortedItems = items
    .slice()
    .sort((a,b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
     sortedItems = items
    .slice()
    .sort((a,b) => Number(a.packed) - Number(b.packed));


  return (
    <div className={classes.list} >
        <ul>
          {sortedItems.map((item)=> (
          <Item 
          item={item} 
          onDeleteItem= {onDeleteItem}
          key={item.id} 
          onToggleItem = {onToggleItem}/>))}
        </ul>

        <div className={classes.actions}>
            <select value={sortBy} onChange={e=>setSortBy
              (e.target.value)}>
              <option value="input"> Sort by input order</option>
              <option value="description"> Sort by description</option>
              <option value="packed"> Sort by packed status</option>
            </select>
            <button onClick={onClearList}>Clear list</button>
        </div>
    </div>
  );
}

export default PackList