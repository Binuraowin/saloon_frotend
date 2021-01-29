import {Link} from "react-router-dom";
import background from "./assets/images/background/img5.jpg";
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
import Appointment from "./Appointement";
import Workers from "./Workers";

const BackGround = () => {
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src={background} alt="Card image cap" />
                <CardImgOverlay>

                    <CardTitle className={"card-title"}>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
            <br/>
            <Workers/>
            <br/>
            <Appointment/>

        </div>



    );
}

export default BackGround;

