import 'antd/dist/antd.css';
import './App.css';
import './components/styles/MainStyle.scss'
import { List } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import EditableTable from './components/EditableTable';
import CardWord from './components/CardWord';
import Footer from './components/Footer';
import NoMatchesFound from './components/NoMatchesFound';

const originData = require('./components/JSON/originData.json');

function App() {
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


export default App;
