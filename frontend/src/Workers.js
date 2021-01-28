import { Link } from "react-router-dom";


const Workers = () => {
    return (


        <div className="container-fluid px-md-5">
            <div className="row justify-content-center pb-3">
                <div className="col-md-10 heading-section text-center ftco-animate">
                    <span className="subheading">Artistic Director</span>
                    <h2 className="mb-4">Makeup Artist</h2>
                    <p>This is our professional workers</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ftco-animate">
                    <div className="carousel-team owl-carousel">
                        <div className="item">
                            <a href="#" className="team text-center">
                        <img src="https://img.deusm.com/informationweek/2014/09/1316005/apple_watch.png"/>
                                <h2>chandani Senewirathna</h2>
                                <span className="position">Hair Stylist</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="team text-center">
                                {/*<div className="img" style="background-image: url(mi.jpg);"></div>*/}
                                <h2>Nishani Kulathunga</h2>
                                <span className="position">Nail Master</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="team text-center">
                                {/*<div className="img" style="background-image: url(me.jpg);"></div>*/}
                                <h2>Raman Jayasooriya</h2>
                                <span className="position">Director</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="team text-center">
                                {/*<div className="img" style="background-image: url(256.jpg);"></div>*/}
                                <h2>Nayani Fonseka</h2>
                                <span className="position">Hair Stylist</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Workers;
