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
                                <Form.Control placeholder="Rua Afonso Pena, 123" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control placeholder="Casa 1 Apto 2 Bloco 3" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control as="select" defaultValue="MS">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>CEP</Form.Label>
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