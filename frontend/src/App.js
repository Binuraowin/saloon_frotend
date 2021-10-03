import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Workers from "./Workers";
import Appointment from "./Appointement";
import Cards from "./Card";
import BackGround from "./BackGround";
import ServiceList from "./ServiceList";
import About from "./About";
import Admin from "./Admin";
import Adminset from "./Admin";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <BackGround/>
                        </Route>
                        <Route exact path="/appointment">
                            <Appointment/>
                        </Route>
                        <Route  path="/services">
                            <ServiceList/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/gallery">
                            <Cards/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
