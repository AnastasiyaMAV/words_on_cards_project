import 'antd/dist/antd.css';
import './App.css';
import './components/styles/Font.css'
import './components/styles/Header.css'
import './components/styles/Footer.css'
import './components/styles/EditableTable.css'
import './components/styles/CardWord.css'
import 'antd/dist/antd.css';
import { Layout, Row, List } from 'antd';
import EditableTable from './components/EditableTable';
import CardWord from './components/CardWord';

const { Header, Footer, Content } = Layout;
const originData = require('./components/JSON/originData.json');

function App() {
  return (
    <div className="Сard">
      <Layout>
        <Header className='header'>Header</Header>
        <Content><EditableTable /></Content>
        <Content>
          <List
            grid={{ gutter: 0, column: 4 }}
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 8,
            }}
            dataSource={originData}
            renderItem={item => (
              <List.Item>
                {
                  <CardWord key={item.id} english={item.english} 
                    transcription={item.transcription} 
                    russian={item.russian}/>
                }
              </List.Item>
            )}
          />,        
        </Content>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
