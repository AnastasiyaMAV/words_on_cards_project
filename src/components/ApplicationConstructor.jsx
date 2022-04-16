import { useState, useEffect } from 'react';
import { List } from 'antd';
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Header';
import EditableTable from './EditableTable';
import AddDelWord from './AddDelWord';
import CardWord from './CardWord';
import Footer from './Footer';
import NoMatchesFound from './NoMatchesFound';

function ApplicationConstructor({ wordsStore }) {
  const [mass, setMass] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    wordsStore.loadData();
  }, []);
  
  const countWord = (id) => {
    const newSet = new Set(mass);
    if(id !== 0){
      setCount(count+1);      
      newSet.add(id);
      setMass(Array.from(newSet));
    } else {
      newSet.clear();
      setCount(0);
      setMass([]);
    }
    return newSet.size;
  }
  
  return (
    <div className="containerApp">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>

            <Route index element={<EditableTable />} />

            <Route path="words_on_cards_project" element={<EditableTable />} />  
            
            <Route path="addDelWord" element={<AddDelWord />} />      

            <Route path="game" element={
              <List
                pagination={{
                  onChange: 
                  page => {
                    console.log(page);
                  },
                  pageSize: 1,
                }}
                dataSource={wordsStore.massWords}
                renderItem={item => (
                  <List.Item className='listItemStyle'>
                    {                      
                      <CardWord key={item.id} idword={item.id} english={item.english} 
                        transcription={item.transcription} 
                        russian={item.russian} count={countWord} />
                    }
                  </List.Item>
                )}
              className='list'/>    
            }/>

            <Route path="*" element={<NoMatchesFound />} />

          </Route>
        </Routes>
      </Router>
          
      <Footer>Footer</Footer>
      
    </div>
  );
}

export default inject(["wordsStore"])(observer(ApplicationConstructor));