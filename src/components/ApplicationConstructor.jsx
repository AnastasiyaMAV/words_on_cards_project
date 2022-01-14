import { List } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import EditableTable from './EditableTable';
import CardWord from './CardWord';
import Footer from './Footer';
import NoMatchesFound from './NoMatchesFound';

const originData = require('./JSON/originData.json');

function ApplicationConstructor() {
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
                    console.log(page);
                  },
                  pageSize: 1,
                }}
                dataSource={originData}
                renderItem={item => (
                  <List.Item className='listItemStyle'>
                    {                      
                      <CardWord key={item.id} english={item.english} 
                        transcription={item.transcription} 
                        russian={item.russian}/>
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