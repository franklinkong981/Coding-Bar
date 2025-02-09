import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from "reactstrap";

function Menu({ items, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title == "Snacks" ? "Snack" : "Drinks"} Menu
          </CardTitle>
          <CardText>
            Here's the list of {title == "Snacks" ? "snacks" : "drinks"} that we currently offer:
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={title == "Snacks" ? `/snacks/${item.id}` : `/drinks/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
