import React from 'react';
import { Row, Col, Container, Card, Button, CardGroup } from 'react-bootstrap';
import author from './assets/author.jpg';
import author2 from './assets/author3.jpg';

export const About = () => (
  <div>
    <h2>About Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis
      nobis architecto ratione veritatis a modi quod laudantium eos eaque
      doloremque corporis facere voluptatibus rerum accusantium, fugit nesciunt
      nisi expedita!
    </p>

    <Container>
      <Row className='justify-content-md-center'>
        <Col>
          <Card style={{ width: '16rem' }} className='mx-auto'>
            <Card.Img variant='top' src={author} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant='top' src={author2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content for another author.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
