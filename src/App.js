import 'antd/dist/antd.css';
import './App.css';
import './components/styles/MainStyle.scss'
import { Layout, List } from 'antd';
import EditableTable from './components/EditableTable';
import CardWord from './components/CardWord';

const { Header, Footer, Content } = Layout;
const originData = require('./components/JSON/originData.json');

function App() {
  return (
    <div className="container">
      <Layout>

        <Header className='header'>Header</Header>

        <Content><EditableTable /></Content>

        <Content>
          <List
            grid={{ 
              gutter: 0, 
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
              xl: 4,
              xxl: 4
            }}
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
            className='list'/>,        
        </Content>

        <Footer className='footer'>Footer</Footer>

      </Layout>
    </div>
  );
}

export default App;
