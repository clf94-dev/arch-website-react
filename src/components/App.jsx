import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Careers from './pages/Careers';
import Home from './pages/Home';
import HomeIntro from './HomeIntro';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Router>

                <Navbar/>

                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/portfolio'  component={Portfolio}></Route>
                    <Route path='/about'  component={About}></Route>
                    <Route path='/careers'  component={Careers}></Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
