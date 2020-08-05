import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
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
  let scroll = useRef(null)
  let wrapper = useRef(null)

  useEffect(() => {
    const textIntro = gsap.timeline();
    textIntro
      .from('.intro', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2
      })
  }, [])
  return (
    <div className='container'>
      <div className='wrapper' ref={wrapper}>
        <div className="hero__img"
        ref={scroll}
        >
          {/* <div class="gallery">
            <a target="_blank" href="/">
              <img src={require("./images/img_5terre.jpg")} alt="Cinque Terre" width="600" height="400"/>
            </a>
          </div>

            <div class="gallery">
              <a target="_blank" href="/">
              <img src={require("./images/img_forest.jpg")} alt="Forest" width="600" height="400"/>
              </a>
            </div>

              <div class="gallery">
                <a target="_blank" href="/">
              <img src={require("./images/img_lights.jpg")} alt="Northern Lights" width="600" height="400"/>
                </a>
              </div>

                <div class="gallery">
                  <a target="_blank" href="/">
              <img src={require("./images/img_mountains.jpg")} alt="Mountains" width="600" height="400"/>
                  </a>
                </div> */}
          {/* <img className="hero__img--1" src={require("./images/cream.webp")} alt="cream"/>
          <img className="hero__img--2" src={require("./images/drugs.webp")} alt="drugs"/>
          <img className="hero__img--3" src={require("./images/pringles.webp")} alt="pringles"/>
          <img className="hero__img--4" src={require("./images/provisions.webp")} alt="provisions"/> */}
				</div>
        <h5 className="intro"
          ref={intro}
        >
          <b>SHOPPER</b>, is a worldclass, innovative, global online ecommerce platform,
          that meets your everyday daily needs.
        </h5>
      </div>
    </div>
  );
}
export default App;
