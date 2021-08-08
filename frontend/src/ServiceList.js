import './css/style.css'
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

import img6 from './beard.png';
import bridal from "./assets/images/services/bridal.jpg";
import nail from "./assets/images/services/nail.jpg";
import haircut from "./assets/images/services/haircut.jpg";
import makeup from "./assets/images/services/makeup.jpg";

import Appointment from "./Appointement";
const ServiceList = () => {
    return (

        <div className="service-my">
                <div>
                    <div className="artists-header">
                        <span >Services</span>
                        <h2 >Services Menu</h2>
                        <p>This is our professional services we gives to you</p>
                    </div>
                </div>
                <div>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={makeup} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle className="card-body-my">Makeup</CardTitle>
                                <CardText>We Are professional for your Makeup </CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={bridal} alt="Card image cap" height="350px"/>
                            <CardBody className="card-body-my">
                                <CardTitle>Bridal</CardTitle>
                                <CardText>We Are professional for your Bread </CardText>

                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src={haircut} alt="Card image cap" height="350px" />
                            <CardBody className="card-body-my">
                                <CardTitle>Haircut &amp; Styling</CardTitle>
                                <CardText>We Are professional for Haircut and Styling</CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={nail} alt="Card image cap" height="350px"/>
                            <CardBody className="card-body-my">
                                <CardTitle>Nail Arts</CardTitle>
                                <CardText>We Are professional for your Body Treatment</CardText>

                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
                <br/>
                <div className="align-content-between">
                    <br/><br/>
                    <Appointment/>
                </div>

            </div>

    );
}

export default ServiceList;
