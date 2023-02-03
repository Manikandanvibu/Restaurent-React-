import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restaurantcard({ data }) {
    return (
        <Col  sm={12} md={6} lg={6} xl={3}>
        <Link to={`view-restaurent/${data.id}`} style={{textDecoration:"none", color:"#f2f2f2"}} >
                <Container>
                <Card className='mt-5 text-center border border-radius-9rem ' style={{ width:'100%',}}>
                    <Card.Img className='p-2 rounded-top' variant="top" src={data.photograph} />
                    <Card.Body className='border-top'>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                           {data.address}
                           {data.neighborhood}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Container>
        </Link>
        </Col>
    )
}

export default Restaurantcard