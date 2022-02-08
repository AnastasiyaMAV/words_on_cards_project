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
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData();
  }, []);
  
  if(error) return <ErrorServer />;
  if(loading || !dataWords.length) return <Spin tip="Loading..." className="spinLoading"/>

  return (
    <DataContext.Provider value={{ dataWords, fetchData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContextProvider, DataContext };