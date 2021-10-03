import {Link} from "react-router-dom";
import background from "./assets/images/background/86517.jpg";
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
import ServiceList from "./ServiceList";
import Navbar from "./Navbar";

const BackGround = () => {
    return (
        <div>
            <Card inverse className="overlay-bg">
                <CardImg width="100%" src={background} alt="Card image cap" />

                <CardImgOverlay className="bg-overlay">

                    <CardTitle className="overlay-title"><br/>

                        <br/><br/>Welcome to Haircare</CardTitle>
                    <CardText>We are professional care for your hair</CardText>
                    <CardText>
                        <small className="text-muted"><Link to="/appointment" className="btn btn-primary btn-outline-primary px-4 py-2">Book
                            now</Link></small>
                    </CardText>
                </CardImgOverlay>
            </Card>
            <br/>
            <ServiceList/>
            <br/>
            {/*<br/>*/}
            {/*<Appointment/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            <br/>
            <Workers/>
        </div>



    );
}

export default BackGround;

