import React, { useState } from 'react'
import classes from "./Form.module.css"

const Form = ({onAddItems}) => {

  const[description, setDescription] = useState("");
  const[quantity, setQuantity] = useState(1);
 

function handleSubmit(e) {
      e.preventDefault();

      if(!description) return;

      const newItem = {description, quantity, packed: false, 
      id: Date.now()};

      onAddItems(newItem);


      setDescription("");
      setQuantity(1);
}


  return (
    <form className ={classes.addForm} onSubmit={handleSubmit}>
        <h3>What Special Gifts do you want for your loved 🥰 ones? </h3>
        <select 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}
        >
        {Array.from({length: 20}, (_, i)=> i + 1).map
        ((num)=>(
        <option value={num} key={num}> {num}</option>))}
        </select>
        <input 
        type='text' 
        placeholder='Item...' 
        value={description} 
        onChange={(e)=> 
        setDescription(e.target.value)}/>
        <button>Add Me</button>
    </form>
  )
}

export default Form