import React, { useEffect, useState } from 'react'
import axios from 'axios';


const FetchData = () => {

    const [Data, setData] = useState([]);

    const FetchData = async () => {
        await  axios.get(
            "https://newsapi.org/v2/top-headlines?country=za&apiKey=5ef3faf455b3405f8ab8918c23911f01"
        )
        .then((res) => setData(res.data.articles))
        .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        FetchData();
    }, []);
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1140px",  marginTop: "2rem", marginBottom: "0rem"}}>
          <h2><u>TOP HEADLINES</u></h2>
          <div style={{ display: 'flex', flexDirection: "column",  marginTop: "2rem"}}>
            { Data 
                ? Data.map((items, index) => (
                    <>
                        <div key={index}  style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4>{ items.title }</h4>
                            <img src={items.urlToImage} alt="/" />
                            <p>{ items.description }</p>
                        </div></>
        ))
            : "LOADING...." }</div>
        </div>
   )
};


export default FetchData