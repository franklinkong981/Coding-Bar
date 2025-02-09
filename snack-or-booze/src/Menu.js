/* The generic Menu component that can be used to list either the current snack or drink menu items.
Each menu item is a link that takes you to a page showing more information for that item.
Whether snack or drink items are listed depends on the value of the title prop. */

import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from "reactstrap";

function Menu({ items, title }) {
  const isSnack = (title === "Snacks");

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {isSnack ? "Snack" : "Drinks"} Menu
          </CardTitle>
          <CardText>
            Here's the list of {isSnack ? "snacks" : "drinks"} that we currently offer:
          </CardText>

          <ListGroup>
            {items.map(item => (
              <Link to={isSnack ? `/snacks/${item.id}` : `/drinks/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>

          <Link to={isSnack ? `/snacks/add` : '/drinks/add'}>Add a new {isSnack ? "snack" : "drink"}</Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
