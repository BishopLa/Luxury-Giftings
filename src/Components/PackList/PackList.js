import React from 'react'
import classes from "./PackList.module.css"
import Item from "../ItemProps/Item"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Juggers", quantity: 4, packed: false}
];

const PackList = () => {
  return (
    <div className={classes.list} >
        <ul>
          {initialItems.map((item)=> (
          <Item item={item} />))}
        </ul>
    </div>
  );
}

export default PackList