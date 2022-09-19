import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 className='mt-3 mb-3'>Cuentanos,¿En qué te podemos ayudar?</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContacto">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu consulta" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="No soy un Robot" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contacto