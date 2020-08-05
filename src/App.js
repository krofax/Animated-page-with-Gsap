import React, {useEffect, useRef} from "react"
import "./App.scss";
import Header from "./components/Header"
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
    // //make gallery skew
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
    // let clamp = gsap.utils.clamp(-20, 20)
    // ScrollTrigger.create({
    //   trigger: ".skewElem",
    //   onUpdate: (self) => {
    //     const velocity = clamp(Math.round(self.getVelocity() / 300));

    //     gsap.to(".skewElem", {
    //       skew: 0,
    //       skewY: velocity,
    //       ease: "power3",
    //       duration: 0.8,
    //       overwrite: true,
    //     });
    //   },
    // });

  }, []);
  return (
    <div ref={(el) => (skewImage = el)}>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=1" alt="random1" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=2" alt="random2" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=3" alt="random3" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=4" alt="random4" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=5" alt="random5" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=6" alt="random6" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=7" alt="random7" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=8" alt="random8" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=9" alt="random9" className="skewElem"/>
      <img width="600" height="600" src="https://picsum.photos/600/600?random=10" alt="random0" className="skewElem"/>

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
