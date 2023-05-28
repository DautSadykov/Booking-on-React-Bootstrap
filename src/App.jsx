import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from "./components/NavbarComp"

import { Button, Image, Col, Row, Container } from "react-bootstrap";

export default function App() {
  return (
    <main>
      <NavbarComp />
      <Row xs="1" className="justify-content-center">
        <Col>
          <h1 className="headline">
            It's a Big World Out There Go {' '}
            <span className="position-relative z-index-9">
              And Explore
            </span>
          </h1>
        </Col>
        <Col>
          <p className="underheadline">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced</p>
        </Col>
        <Col className="h-100 d-flex justify-content-center">
          <Button id="action-btn" className="btn-lg" >Explore Holidays</Button>
        </Col>
      </Row>
      <Container fluid className="mt-5 ">
        <Row >
          <Col className="m-3">
            <Row >
              <Image src="15.jpg" className="p-0 m-3 hero_image"/>
            </Row>
            <Row>
              <Image  src="11.jpg" className="p-0 m-3 hero_image"/>
            </Row>
          </Col>
          <Col className="m-3">
            <Row >
              <Image src="18.jpg" className="p-0 m-3 hero_image" />
            </Row>
          </Col>
          <Col className="m-3">
            <Row>
              <Image src="19.jpg" className="p-0 m-3 hero_image"/>
            </Row>
            <Row>
              <Image src="14.jpg" className="p-0 m-3 hero_image"/>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}