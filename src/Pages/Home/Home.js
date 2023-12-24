import React from 'react';
import classes from "./Home.module.css"
import Logo from "../../Components/Logo/Logo";
import PackList from '../../Components/PackList/PackList'
import Stats from '../../Components/Stats/Stats'
import Form from '../../Components/Form/Form'

const Home = () => {
  return (
    <div className={classes.home}>
        <Logo/>
        <Form/>
        <PackList/>
        <Stats/>
    </div>
  )
}

export default Home