import './css/style.css'
import Workers from "./Workers";
import {Col, Row} from "reactstrap";



const About = () => {
    return (
        <div>
            <div>
                <Workers/>
            </div>
            <div>
                <Row>
                    <Col>
                        <div style={{backgroundImage: `url("vidcover.jpg")`}}

                             // style="background-image: url(vidcover.jpg);"
                            >
                            <a href="https://vimeo.com/385010495">
                                {/*<span className="icon-play"></span>*/}
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="heading-section mb-4 mt-md-5">
                            <span className="subheading">About Us</span>
                            <h2 className="mb-4">Welcome To Haircare A Hair Salon</h2>
                        </div>
                        <p>Saloon Haircare is filled with amazingly talented staff who are always working to improve, inspire and fulfill your Makeup,Skin & hair needs. Our expert Makeup Artist & stylists have been working
                            in the Beauty saloon industry for 13+ years, and they not only do makeup,cut, colour and style hair, but they exemplify what it means to be a professional Makeup Artist & hair stylist.
                            They are committed to learning new techniques and trends in the Makeup & hair industry, learning that they pass along to their fellow Makeup Artists & Hair stylists and clients.</p>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

export default About;
