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
                            <CardImg top width="100%" src={img6} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle className="card-body-my">Makeup</CardTitle>
                                <CardText>We Are professional for your Makeup </CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={img6} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>Beard</CardTitle>
                                <CardText>We Are professional for your Bread </CardText>

                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src={img6} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>Haircut &amp; Styling</CardTitle>
                                <CardText>We Are professional for Haircut and Styling</CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={img6} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>Body Treatment</CardTitle>
                                <CardText>We Are professional for your Body Treatment</CardText>

                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
                <br/>
                <div className="align-content-between">
                    <Appointment/>
                </div>

            </div>

    );
}

export default ServiceList;
