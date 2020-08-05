import React, {useEffect, useRef} from "react"
import "./App.scss";
import Header from "./components/Header"
import {Image} from "./components/Image"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { textIntro, skewGallery } from "./components/Animate"

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={About} />
                <Route exact path="/contact-us" component={Contact} />
                <Route exact path="/gallery" component={Gallery} />
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

function Contact() {
  return <p>Feel free to reach us.</p>;
}
function Gallery() {
  let skewImage = useRef(null);
  useEffect(() => {
    skewGallery(skewImage)

  }, []);
  return (
    <div ref={(el) => (skewImage = el)}>
      <Image/>

    </div>
  )
}

function Home() {
  //Create a variable for our dom nodes
  let intro = useRef(null)

  useEffect(() => {
    //animate text
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
