import React from 'react'
import './home.css'
import List from '../../Components/List/List'
import Navbar from '../../Components/NavBar/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate()

  return (
    <div className='Home'>
        <Navbar />
     <h4><a onClick={()=>navigate('/create')}>Create New</a></h4>
     <List/>
    </div>
  )
}

export default Home
