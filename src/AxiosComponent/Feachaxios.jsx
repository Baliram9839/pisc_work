import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './axios.css'

  function Feachaxios(){

    const [myData , setMyData] = useState([])
    const [isError , setIsError] = useState(""); 


  const getApiData = async () =>{
    try{
      const  res = await axios.get('https://fakestoreapi.com/products')
      setMyData(res.data)
    }catch (error){
      setIsError(error.message)
    }
  }
  useEffect(()=>{
    getApiData()
  },[])
    return (
     <>
     <h1>Baliram verma</h1>
     {isError != "" && <h1>{isError}</h1>}
     {myData.map((posts)=>{
      const {id, title, price ,description} = posts;
       return<div className = "card">
         <h2 id='email'>{title}</h2>
         <p id='password'>{price}</p>
         <p id='description'>{description}</p>
       </div>
     })}
     </>
    )  


  }
export default Feachaxios