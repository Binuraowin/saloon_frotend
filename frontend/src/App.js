import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Workers from "./Workers";
import Appointment from "./Appointement";
import Cards from "./Card";


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
                        <Route  path="/create">
                            <Cards/>
                        </Route>
                        {/*<Route path="/blogs/:id">*/}
                        {/*    <BlogDetails />*/}
                        {/*</Route>*/}
                        {/*<Route path="*">*/}
                        {/*    <NotFound />*/}
                        {/*</Route>*/}
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
