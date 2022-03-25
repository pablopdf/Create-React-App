import React from "react";
import { Form, Button } from "react-bootstrap";

const LeftSide = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group>
          <Form.Label>Ingresa tu Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
        </Form.Group>
        <Button type="submit">Ingresar</Button>
      </Form>
    </div>
  );
};

export default LeftSide;
