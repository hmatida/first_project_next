import styles from '../../styles/Home.module.css';
import { Row, Col, Container } from 'react-bootstrap';


export default function FooterApp() {
    return (
        <Container fluid className={styles.footer}>
            <Row>
                <Col sm={2} lg={2}>
                    <p>Contatos</p>
                </Col>
                <Col sm={5} lg={3}>
                    <p>Escritório comercial:</p>
                    <div className="final2">
                        <p><i className="fa fa-phone"></i> (11) 2574 6804 | (11) 2574 6806</p>
                            <p><i className="glyphicon glyphicon-map-marker"></i> Rua Tenente Gomes Ribeiro, 182 - Conj. 23</p>
                            <p>Vila Clementino</p>
                            <p>  CEP: 04038-040</p>
                            <p>  São Paulo - SP - Brasil</p>
                    </div>
                </Col>
                <Col sm={5} lg={3}>
                    <p>Unidade industrial:</p>
                    <div className="final2">
                        <p><i className="fa fa-phone"></i> (67) 3355 0380 | (67) 3354 0754 </p>
                            <p><i className="glyphicon glyphicon-map-marker"></i> Rua Carlos Henrique Spengler, 1238</p>
                            <p>  Polo Empresarial Miguel Letteriello</p>
                            <p>  CEP: 79018-800</p>
                            <p>  Campo Grande - MS - Brasil</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={12} className="text-right">
                    <p>Copyright &copy 2015; Todos os direitos reservados a MGS FOODS Indústria E Comércio Ltda</p>
                </Col>
            </Row>
        </Container >
    )
}