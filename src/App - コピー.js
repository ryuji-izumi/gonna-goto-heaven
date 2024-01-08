import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {

  const handle_year_click = (e) => {
    document.getElementById("Navbar-Year").value = e.currentTarget.text;
  }

  const handle_month_click = (e) => {
    document.getElementById("Navbar-month").value = e.currentTarget.text;
  }

  return (
  <>
    <Navbar className="App-navbar justify-content-between">
      <div className="App-nav-title">GONNA GOTO HEAVEN</div>
      <div className="App-nav-title">
        <Form inline>
          <InputGroup>
            <Form.Control
              placeholder="YYYY"
              aria-label="Year"
              aria-describedby="YYYY-MM"
              id="Navbar-Year"
            />
            <NavDropdown title="年" id="year-dropdown">
              <NavDropdown.Item onClick={handle_year_click}>2023</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2022</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2021</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2020</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2019</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2018</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2017</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2016</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2015</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2014</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2013</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2012</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2011</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2010</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2009</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2008</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2007</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2006</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2005</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2004</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2003</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_year_click}>2002</NavDropdown.Item>
            </NavDropdown>
            <Form.Control
              placeholder="MM"
              aria-label="Month"
              aria-describedby="YYYY-MM"
              id="Navbar-month"
            />
            <NavDropdown title="月" id="month-dropdown">
              <NavDropdown.Item onClick={handle_month_click}>12</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>11</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>10</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>09</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>08</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>07</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>06</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>05</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>04</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>03</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>02</NavDropdown.Item>
              <NavDropdown.Item onClick={handle_month_click}>01</NavDropdown.Item>
            </NavDropdown>
          </InputGroup>
        </Form>
      </div>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="未実装"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">検索</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    <div className="App">
      <header className="App-header">
        <p>
          ようこそ、雲上へ
        </p>
      </header>
    </div>
  </>
  );
}

export default App;
