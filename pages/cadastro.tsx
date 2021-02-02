import FooterApp from "./components/FooterApp";
import NavBarApp from "./components/NavBarApp";
import PageName from "./components/PageName";
import styles from '../styles/Home.module.css';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

export default function Cadastro() {
    return (
        <div>
            <NavBarApp></NavBarApp>
            <PageName pageName="Cadastro de candidato"></PageName>
            <Container fluid className={styles.container2}>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={7}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Nome completo" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                                Enviar
  </Button>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <FooterApp></FooterApp>
        </div>
    )
}