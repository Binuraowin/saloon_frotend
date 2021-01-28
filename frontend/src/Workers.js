import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';
import img6 from './img5.jpg';

const Workers = () => {
    return (

        <Row>
            <Col xs="12" md="4">
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={img6} alt="" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" md="4">
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={img6} alt="" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" md="4">
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={img6} alt="" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" md="4">
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={img6} alt="" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    );
}

export default Workers;
