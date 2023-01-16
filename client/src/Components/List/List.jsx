import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'
import './list.css'

const List = () => {
    
    const [lists, setLists] = useState([])
    useEffect(() => {
        try {
            const fetchData = async () => {
                await axios.get('http://localhost:5000/').then((res) => {
                    console.log(res.data);
                    setLists(res.data)
                })
            }
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            {
                lists.map((eachList, id) => (
                    <div className='myList'>
                        <ul>
                            <li><h3>{eachList?.title}</h3></li>
                            <li><a href={eachList?.url}> {eachList?.url} </a></li>
                            <li> {moment(eachList?.createdAt).format('DD/MM/YYYY')} </li>
                        </ul>
                    </div>
                ))
            }
        </>


    )
}

export default List