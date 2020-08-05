import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap"
import { Link } from "react-router-dom"

import {
  staggerShow,
  staggerHide,
  staggerLinks,
  fadeIn,
  hoverLink,
  hoverExit,
  cityImage,
  removeCityImage
} from './Animate'

import forest from '../images/forest.jpg'
import lights from '../images/lights.jpg'
import mountains from '../images/mountains.jpg'
import terre from '../images/terre.jpg'

const location = [
  { name: "forest", image: forest },
  { name: "lights", image: lights },
  { name: "mountains", image: mountains },
  { name: "terre", image: terre },
  
]
const Menu = ({ state }) => {
   //create refs for our DOM elements
  
  let menuWrapper = useRef(null)
  let show1 = useRef(null)
  let show2 = useRef(null)
  let imageBackground = useRef(null)
  let info = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerShow(show1, show2);
      fadeIn(info);
      staggerLinks(line1, line2, line3);
    }
  }, [state])
  
  return (
    <div ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <div
        ref={(el) => (show1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (show2 = el)} className="menu-layer">
        <div
          ref={(el) => (imageBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverLink(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                {/* Returning the list of cities */}
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => cityImage(el.image, imageBackground)}
                    onMouseOut={() => removeCityImage(imageBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu