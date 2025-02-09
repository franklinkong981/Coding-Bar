/* The generic MenuItem component that can be used to list details such as the name, description, recipe, and serving instructions
for either a snack menu item or a drink menu item.
Through the cantFind prop, either redirects user to snack menu or drink menu page for invalid id URL parameter. */

import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(itemObj => itemObj.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
