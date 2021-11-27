import React, { useState, useEffect } from 'react';
import { Card,ListGroup ,ListGroupItem} from 'react-bootstrap';

const CustomCard = ({movie}) => {
  let backupImage = "https://cdn.imgbin.com/4/17/4/imgbin-movie-logo-KgwGhgz1EHCssWgBGqfs9YXjA.jpg"
    return ( <><Card style={{ width: '18rem', height:'40rem', color:"black" }}>
    <Card.Img variant="top"  style={{ width: '18rem', height:'20rem',objectFit:"cover"   }} src={movie.banner?movie.banner:backupImage} alt={backupImage} />
    <Card.Body>
      <Card.Title>{movie.title} </Card.Title>
      <Card.Text>
       <p className="text-dark"> <b> {movie.content_rating} </b></p>
      </Card.Text> 
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{movie.plot}</ListGroupItem>
     </ListGroup>
    <Card.Body>
      <Card.Link target="_blank" href={movie.trailer}>Trailer</Card.Link>
      {/* <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
  <br/></> );
}
 
export default CustomCard;