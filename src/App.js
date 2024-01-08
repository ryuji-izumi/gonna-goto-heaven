import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {

  // 使用state
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [person, setPerson] = useState("");
  const [yearlist, setYearlist] = useState([]);
  const [monthlist, setMonthlist] = useState([]);
  const [personlist, setPersonlist] = useState([]);

  // Navbarプルダウンのハンドラ
  const handle_year_click = (e) => {
    setYear(e.currentTarget.text);
    document.getElementById("Navbar-Year").value = e.currentTarget.text;
  }

  const handle_month_click = (e) => {
    document.getElementById("Navbar-month").value = e.currentTarget.text;
  }

  const handle_person_click = (e) => {
    document.getElementById("Navbar-person").value = e.currentTarget.text;
  }

  // Navbar入力のハンドラ
  const handle_year_change = (e: SubmitEvent<HTMLInputElement>) => {
      var v = e.currentTarget.value;
      const regex = new RegExp(/^[0-9]{4}/);
      if (regex.test(v)) {
        v = v.substr(0,4);
        setYear(v);
        e.currentTarget.value = v;
      }
  };

  var callApiGetyearlist = ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://s0ek2bz3dk.execute-api.ap-northeast-1.amazonaws.com/dev/gonna-goto-heaven-getyearlist", requestOptions)
    .then(response => response.text())
    .then(result => {
      setYearlist(JSON.parse(JSON.parse(result)));
    })
    .catch(error => console.log('error', error));
  }

  const handle_month_change = (e: SubmitEvent<HTMLInputElement>) => {
      var v = e.currentTarget.value;
      const regex = new RegExp(/^[0-9]{2}/);
      if (regex.test(v)) {
        v = v.substr(0,2);
        setMonth(v);
        e.currentTarget.value = v;
      }
  };

  const handle_person_change = (e: SubmitEvent<HTMLInputElement>) => {
      var v = e.currentTarget.value;
      setMonth(v);
  };

  // yearlist取得
  callApiGetyearlist();

  return (
  <>
    <Navbar className="App-navbar justify-content-between">
      <div className="App-nav-title">
        <Form>
          <Row>
            <Col xs="3">
            <div className="App-nav-title">GONNA GOTO HEAVEN</div>
            </Col>
            <Col xs="2">
              <InputGroup>
                <Form.Control
                  placeholder="YYYY"
                  aria-label="Year"
                  aria-describedby="YYYY-MM"
                  id="Navbar-Year"
                  onChange={handle_year_change}
                />
                <Dropdown as={ButtonGroup}>
                  <Button variant="info">年</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handle_year_click}>2023</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2022</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2021</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2020</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2019</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2018</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2017</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2016</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2015</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2014</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2013</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2012</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2011</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2010</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2009</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2008</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2007</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2006</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2005</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2004</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2003</Dropdown.Item>
                    <Dropdown.Item onClick={handle_year_click}>2002</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
            <Col xs="2">
              <InputGroup>
                <Form.Control
                  placeholder="MM"
                  aria-label="Month"
                  aria-describedby="YYYY-MM"
                  id="Navbar-month"
                  onChange={handle_month_change}
                />
                <Dropdown as={ButtonGroup}>
                  <Button variant="info">月</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handle_month_click}>01</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>02</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>03</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>04</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>05</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>06</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>07</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>08</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>09</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>10</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>11</Dropdown.Item>
                    <Dropdown.Item onClick={handle_month_click}>12</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
            <Col xs="2">
              <InputGroup>
                <Form.Control
                  placeholder=""
                  aria-label="Person"
                  aria-describedby="Person"
                  id="Navbar-person"
                  onChange={handle_person_change}
                />
                <Dropdown as={ButtonGroup}>
                  <Button variant="info">名前</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handle_person_click}></Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={handle_person_click}>hayatomai</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>hiroyuki</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>kyoko</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>ryuji</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>sachiko</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>taisukeyusuke</Dropdown.Item>
                    <Dropdown.Item onClick={handle_person_click}>wataru</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="未実装"
                  className=" mr-sm-2"
                />
                <Button type="submit">検索</Button>
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </div>
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
