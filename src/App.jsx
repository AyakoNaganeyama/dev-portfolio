import { useState } from 'react'


import { Button } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import './index.css';
import Profile from './components/Profile';
import Project from './components/Project';

function App() {


  return (
    <>

<Navbar/>
<Profile/>
<Project/>


    </>
  )
}

export default App
