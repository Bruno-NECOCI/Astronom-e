import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from "axios";
import './data.css'


export default function Asteroide() {

  // const [data, setData] = useState({});

      const getData = () => {

        const ApiKey = "jFfMTxyNhmKjgAkWw1qKlc1B5QiB62tSG1RzkgGT";
        const StartDate = "2015-09-07"
        const EndtDate = "2015-09-08"
        const Url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${StartDate}&end_date=${EndtDate}&api_key=` ;

            axios
              .get(`${Url}${ApiKey}`)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err))
          }
  
        useEffect(() => {
          getData();
          }, []);


  return (
    <div>
    <h1>Hello</h1>
    </div>
  )
}

