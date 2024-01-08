import React from 'react';
import classes from "./Home.module.css"
import Logo from "../../Components/Logo/Logo";
import PackList from '../../Components/PackList/PackList'
import Stats from '../../Components/Stats/Stats'
import Form from '../../Components/Form/Form'
import Navbar from '../../Components/NavBar/Navbar';
import { useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }  
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) =>item.id !==id));
  }

  function handleToggleItem(id) {
    setItems((items) => 
    items.map((item) => item.id === id ? {...item, packed:!item.packed} 
    : item
    )
    );
  }
  
  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all selections');
    if (confirmed)setItems([]);
  };

  return (
    <div className={classes.home}>
        <Navbar/>
        <Logo/>
        <Form onAddItems= {handleAddItems}/>
        <PackList 
        items={items} 
        onDeleteItem={handleDeleteItems} 
        onToggleItem ={handleToggleItem}
        onClearList={handleClearList}
        />
        <Stats items = {items}/>
    </div>
  )
}

export default Home