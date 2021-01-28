import {Link} from "react-router-dom";
import background from "./assets/images/background/img5.jpg";


const BackGround = () => {
    return (
        <section class="hero-wrap js-fullheight" style={{ backgroundImage: `url(${background})` }} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                    <div class="col-lg-12 ftco-animate d-flex align-items-center">
                        <div class="text text-center">
                            <span class="subheading" >Welcome to Haircare</span>
                            <h1 class="mb-4"  style="color: black;" >We are professional care for your hair</h1>
                            <p><a href="#appointment" class="btn btn-primary btn-outline-primary px-4 py-2">Book now</a></p>
                        </div>
                    </div>
                </div>

        </div>
</section>
    );
}

export default BackGround;

