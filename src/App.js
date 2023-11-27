import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Cardapio from './pages/Cardapio';

function App() {
  return (
    <div >
      <Container fluid>
        <BrowserRouter>
          <Row>
            <Col>
              {/* Navbar */}
              <Menu />
            </Col>
          </Row>

          <Row>
            {/* conteúdo (rotas do site) */}
            <Col>
              {/* Rotas */}
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/contato" element={<Contato />} />
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
        <Row>
          {/* rodapé */}
          <Rodape />
        </Row>

      </Container>
    </div>
  );
}

export default App;
