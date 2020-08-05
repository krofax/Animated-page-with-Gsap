import React, {useEffect, useRef} from "react"
import "./App.scss";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { textIntro } from "./components/Animate"

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/contact-us' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return <p>We have a decade years experience of worldclass services</p>;
}

function Services() {
  return <p>We can take care of your home, office and your day to day needs.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  //Create a variable for our dom nodes
  let intro = useRef(null)

  useEffect(() => {
    textIntro(intro)
  }, [])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="hero__img"></div>
        <h5 className="intro" ref={(el) => (intro = el)}>
          <b>SHOPPER</b>, is a worldclass, innovative, global online ecommerce
          platform, that meets your everyday daily needs.
        </h5>
      </div>
    </div>
  );
}
export default App;
