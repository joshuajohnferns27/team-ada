import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Dashboard() {
  return (
  <>
    <div className="container">
      <div className="row">
        <div className="centrebox offset-md-3 col-lg-8 col-md-10 offset-lg-4 offset-md-7">
          <div className="panel border bg-white">
            <div className="panel-heading">
              <h3 className="pt-3 font-weight-bold">Dashboard</h3>  
            </div>
            <Container>
      <Row>
        <Col xs={10}><input
                  type="text"
                  placeholder="search github username..."
                  required/></Col>
        <Col><Button variant="primary">search</Button>{' '}</Col>
      </Row>
      <hr></hr>
      </Container>
      <Container>
      <Row>
        <Col xs={6}>
        {[
        'Primary',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>User</Card.Header>
          <Card.Body>
            <Card.Title>USERNAME 1</Card.Title>
            <Card.Text>
              This space is to fill with the user info.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Col>

        <Col xs={6}>
        {[
         'Danger',
       
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>User</Card.Header>
          <Card.Body>
            <Card.Title>USERNAME 2</Card.Title>
            <Card.Text>
            This space is to fill with the user info.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
        {[
          'Info',
        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>User</Card.Header>
          <Card.Body>
            <Card.Title>USERNAME 3 </Card.Title>
            <Card.Text>
            This space is to fill with the user info.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Col>
        <Col xs={6}>
        {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>User</Card.Header>
          <Card.Body>
            <Card.Title>USERNAME 4</Card.Title>
            <Card.Text>
            This space is to fill with the user info.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
        </Col>
      </Row>
      </Container>
                </div>
                 
              </div>

            </div>
      <div className="row1">
        <div className="centrebox offset-md-3 col-lg-8 col-md-10 offset-lg-4 offset-md-7">
          <div className="panel border bg-white">
          <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Add User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Add User Using CSV File</Nav.Link>
      </Nav.Item>
      </Nav>
            
          </div>
        </div>
      </div>
    </div>
        
  </>
  )
}

export default Dashboard
