import { useState } from 'react';
import { List } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import EditableTable from './EditableTable';
import CardWord from './CardWord';
import Footer from './Footer';
import NoMatchesFound from './NoMatchesFound';

const originData = require('./JSON/originData.json');

function ApplicationConstructor() {
  // const [count, setCount] = useState(new Set());
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(0);
  
  const countWord = (id) => {
  //   if(!count.has()) {
  //     console.log('кладу');
  //     setCount(count.add(id));
  //   } else {
  //     console.log('пытаюсь чистить');
  //     setCount(count.clear());
  //   }
  //   return count.size;
    setCount(count+1);
    const newSet = new Set(selected);
    newSet.add(id);
    setSelected(Array.from(newSet));
    return newSet.size;
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>

            <Route index element={<EditableTable />} />

            <Route path="game" element={
              <List
                pagination={{
                  onChange: 
                  page => {
                    // console.log(page);
                  },
                  pageSize: 1,
                }}
                dataSource={originData}
                renderItem={item => (
                  <List.Item className='listItemStyle'>
                    {                      
                      <CardWord key={item.key} idword={item.key} english={item.english} 
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

export default ApplicationConstructor;