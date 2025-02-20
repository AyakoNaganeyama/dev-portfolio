import { useState } from 'react'


import { Button } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import './index.css';
import Profile from './components/Profile';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {


  return (
    <>


<Profile/>
<Skill/>
<Project/>


    </>
  )
}

export default App
