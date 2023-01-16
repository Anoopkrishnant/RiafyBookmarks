import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './form.css'

const Form = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000/create', {title, url})
      // Perform form submission logic here
      navigate('/')
      console.log(title, url);
    }
  
    return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Create bookmark</h1>
        <label>
          Title </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>
          URL 
          </label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
       
        <br />
        <button type="submit">Create Bookmark</button>
      </form>
      </div>
    );
}

export default Form