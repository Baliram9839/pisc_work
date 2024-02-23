import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Loading.css'

function ApiLoading() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getApiData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/users');
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    } finally {
      // Set loading to false regardless of success or error
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Baliram verma</h1>
      {isLoading && <button disabled>Loading...</button>}
      {isError !== "" && <h1>{isError}</h1>}
      {!isLoading && (
        <>
          {myData.map((posts) => {
            const { id, email, password } = posts;
            return (
              <div className="card" key={id}>
                <h2 id='email'>{email}</h2>
                <p id='password'>{password}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default ApiLoading;
