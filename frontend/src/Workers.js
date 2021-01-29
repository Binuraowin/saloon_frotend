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
import {useState} from "react";

const Workers = () => {
    const [title, setTitle] = useState('Title');
    const [subTitle, setSubTitle] = useState('Title');
    return (

<div>
    <div>
        <div className="artists-header">
            <span >Artistic Director</span>
            <h2 >Makeup Artist</h2>
            <p>This is our professional workers</p>
        </div>
    </div>
    <CardDeck>
        <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle> {subTitle}</CardSubtitle>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle> {subTitle}</CardSubtitle>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle> {subTitle}</CardSubtitle>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle> {subTitle}</CardSubtitle>
            </CardBody>
        </Card>
    </CardDeck>
</div>


    );
}

export default Workers;
