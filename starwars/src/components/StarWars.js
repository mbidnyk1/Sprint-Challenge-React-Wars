import React from 'react';
import './StarWars.css';
import {Card, CardHeader, CardSubtitle, Badge, Col} from 'reactstrap';

const StarWars = props => {
    return (
        <Col xs='12' sm='6' md='4' xl='3'>
          <Card>
            <CardHeader>
                {props.data.name}
                <CardSubtitle> Birth Year: {props.data.birth_year}</CardSubtitle>
                <Badge> Eye Color: {props.data.eye_color} </Badge>
            </CardHeader>
          </Card>  
        </Col>
    )
};

export default StarWars;