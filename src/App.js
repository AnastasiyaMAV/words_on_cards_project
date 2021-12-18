import 'antd/dist/antd.css';
import './App.css';
import './components/styles/Font.css'
import './components/styles/Header.css'
import './components/styles/Footer.css'
import './components/styles/EditableTable.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import EditableTable from './components/EditableTable';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="Сard">
      <Layout>
        <Header className='header'>Header</Header>
        <Content><EditableTable /></Content>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
