import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Navbar, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
