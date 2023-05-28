import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/container';


export default function SearchComp() {
  return (
    <div>
        <Container className='mt-2' fluid="lg">
            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Введите название товара..." />
                <Button variant="secondary">Поиск</Button>
            </Stack>
        </Container>
    </div>
  )
}
