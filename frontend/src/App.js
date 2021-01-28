import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Workers from "./Workers";
import Appointment from "./Appointement";
import Cards from "./Card";
import BackGround from "./BackGround";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Appointment/>
                        </Route>
                        <Route exact path="/appointment">
                            <Appointment/>
                        </Route>
                        <Route  path="/create">
                            <Cards/>
                        </Route>
                        <Route path="/workers">
                            <Workers/>
                        </Route>
                        <Route path="/gallery">
                            <BackGround/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
