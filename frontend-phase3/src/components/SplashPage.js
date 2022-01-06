import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function SplashPage() {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col></Col>
          <Col className="d-flex justify-content-center">
            <Row>
              <h1>Welcome!</h1>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Row>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>About Whose Turn Is It?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Do you and your partner always fight about who does the
                    litter box? Do you end up feeding your roommate's snakes? Is
                    it always your turn to walk the dog?
                  </p>

                  <p>
                    <b>Whose Turn Is It?</b> is the answer to all of these
                    problems!
                  </p>

                  <p>
                    Simply create your household, add your household members,
                    add your lovely pets and add the regular or one-off task
                    that you need to do to keep your fluffy, furry, (or scaly)
                    friends happy. And end fights with your roommates or
                    partner.
                  </p>

                  <p>
                    Want to try it out for yourself? Click an example user on
                    the top right to get started.
                  </p>

                  <p>
                    Check out the repos for{" "}
                    <a
                      href="https://github.com/seenso/frontend-phase-3-sinatra-react-project"
                      target="_blank"
                    >
                      frontend
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://github.com/seenso/phase-3-sinatra-react-project"
                      target="_blank"
                    >
                      backend
                    </a>
                    .
                  </p>

                  <p>
                    Interested in the folks who wrote this app? Check out or
                    bios or hire{" "}
                    <a
                      href="https://www.linkedin.com/in/sean-hurley/"
                      target="_blank"
                    >
                      Sean
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.linkedin.com/in/seenso/"
                      target="_blank"
                    >
                      Seen
                    </a>{" "}
                    on LinkedIn.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>About Sean &amp; Seen</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <h1>Sean</h1>
                  <br />
                  <br />
                  <br />
                  <p>
                    Raised in Ireland. Sean owns 2 cats and codes like a
                    glorious demon.
                  </p>
                  <br />
                  <h1>Seen</h1>
                  <br />
                  <br />
                  <br />
                  <p>
                    A lifelong Alaskan who first accidentally learned how to
                    code in CSS when trying to create her custom MySpace theme.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row className="d-flex justify-content-center">
          <Col></Col>
          <Col className="d-flex justify-content-center">
            <Row>
              <a
                href="https://www.youtube.com/watch?v=AcL0MeVZIxM"
                target="_blank"
              >
                <img
                  src="./splash-page-doggo.png"
                  alt="dog icon"
                  height="300"
                />
              </a>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SplashPage;
