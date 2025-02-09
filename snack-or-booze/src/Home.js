import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

function Home({numberSnacks, numberDrinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's Premier Coding Cafe/Bar: Snack or Booze!
            </h3>
          </CardTitle>
          <CardText>
            We currently have {numberSnacks} snacks and {numberDrinks} drinks on our menu!
          </CardText>
          <ListGroup>
            <Link to='/snacks' key='snacks-homepage-link'>
              <ListGroupItem>Snack Menu</ListGroupItem>
            </Link>
            <Link to='/drinks' key='drinks-homepage-link'>
              <ListGroupItem>Drinks Menu</ListGroupItem>
            </Link>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
