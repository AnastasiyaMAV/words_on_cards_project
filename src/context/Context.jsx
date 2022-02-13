import React, { useState, useEffect } from "react";
import { Spin } from 'antd';
import ErrorServer from '../components/ErrorServer'

const DataContext = React.createContext({});

const DataContextProvider = props => {
  const [dataWords, setDataWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const fetchedData = await fetch(
        "/api/words"
      );
      const data = await fetchedData.json();
      setDataWords(data);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
    finally {
      setLoading(false);
    }
  };

  const addData = (data) => {
    fetch(`/api/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => { 
        console.log(response); 
        response.json(); 
      })
      .then(data => {
        console.log(data);
        fetchData();
      })
      .catch(error => {
        console.log(error);
      }); 
  }

  const removeData = (word) => {

      fetch(`/api/words/${word.id}/delete `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(word),
        mode: "cors",
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => {
          console.log(data);
          fetchData();
        })
        .catch(error => {
          console.log(error);
        });
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  if(error) return <ErrorServer />;
  if(loading || !dataWords.length) return <Spin tip="Loading..." className="spinLoading"/>

  return (
    <DataContext.Provider value={{ dataWords, fetchData, addData, removeData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContextProvider, DataContext };