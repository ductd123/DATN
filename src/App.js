import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './Component/Header';
import TableUser from './Component/TableUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/HomePage';

function App() {
  return (
    <div className='app-container'>
      <Container>
        <Header/>
        <Row>
          
          <TableUser/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
