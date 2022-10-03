import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from "axios";
import './CardImg.css'


export default function CardImg() {

  const {date} = useSelector(state => ({
    ...state.pickerReducer,
  }))

  const [data, setData] = useState({});

  
  const getData = () => {

    const ApiKey = "jFfMTxyNhmKjgAkWw1qKlc1B5QiB62tSG1RzkgGT";
    const Url = "https://api.nasa.gov/planetary/apod?api_key=";
    const newDate = `&date=${date}`

        axios
          .get(`${Url}${ApiKey}${newDate}`)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err))
      }
  
      useEffect(() => {
            getData();
          }, []);


  return (
    <div className='cardImg'>
    <h3>{data.title}</h3>
    <img src={data.url} alt="Space of the day" />
    </div>
  )
}
