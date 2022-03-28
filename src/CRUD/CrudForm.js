import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function CrudForm(props) {
  const [user, setUser] = useState({
    name: "",
    description: "",
  });
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    console.log(user.name);
    console.log(user.description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.inputData(user.name, user.description);
  };

  return (
    <div>
      <Card style={{ width: 500 }}>
        <Card.Body>
          {" "}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={user.name}
                name="name"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={user.description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CrudForm;
