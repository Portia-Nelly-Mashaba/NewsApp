import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchData = ({ cat }) => {
    const [Data, setData] = useState([]);

    const fetchData = async () => {    

try {
    const response = await axios.get(
        cat 
        ? `https://newsapi.org/v2/top-headlines?country=za&category=${cat}&apiKey=5ef3faf455b3405f8ab8918c23911f01` 
        : `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ef3faf455b3405f8ab8918c23911f01`
    );
    setData(response.data.articles);
} catch (error) {
    console.error('Error fetching data:', error);
}
};


useEffect(() => {
fetchData();
}, [cat]);


return (
        <div style={{  marginLeft: "auto", marginRight: "auto", maxWidth: "1140px",  marginTop: "2rem", marginBottom: "0rem"}}>
          <h2><u>TOP HEADLINES</u></h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column",  marginTop: "2rem", minHeight: '100vh'}}>
            { Data 
                ? Data.map((items, index) => (
                    <>
                        <div key={index}  style={{  padding: '1rem', marginTop: '2rem', marginBottom: '1.5rem', width:'600px', paddingRight: '15px', paddingLeft: '15px', display: 'flex', flexDirection: 'column', boxShadow: '2px 2px 10px silver', borderRadius: '10px'}}>
                            <h4 style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}>{ items.title }</h4>
                            <img src={items.urlToImage} alt='Image not Found' style={{ width: 'auto', height: '300px', objectFit: 'cover'}} />
                            <p style={{ marginTop: '0.25rem', marginBottom: '0.25rem'}}>{ items.content }</p>
                            <a href={items.url} target='blank' style={{ marginTop: '1.5rem', marginBottom: '2rem',color: '#0c2d48', textDecoration: 'underline'}}>View More</a>
                        </div></>
        ))
            : "LOADING...." }</div>
        </div>
   )
};


export default FetchData




// const FetchData = ({ cat }) => {

//     const [Data, setData] = useState([]);

//     const FetchData = async () => {
//         await  axios.get(
//             cat ? "https://newsapi.org/v2/top-headlines?sources=bbc-news&category=$(cat)&apiKey=5ef3faf455b3405f8ab8918c23911f01" :
//             // "https://newsapi.org/v2/top-headlines?country=za&apiKey=5ef3faf455b3405f8ab8918c23911f01"
//             "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ef3faf455b3405f8ab8918c23911f01"
//         )
//         .then((res) => setData(res.data.articles))
//         .catch(error => console.error('Error fetching data:', error));
//     };

//     useEffect(() => {
//         FetchData();
//     }, [cat]);