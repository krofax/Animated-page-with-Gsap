import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu"
import { textIntro } from "./Animate"

const Header = ({ history }) => {

  let logo = useRef(null)
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //When the component mounts
  useEffect(() => {
    textIntro(logo)
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  //toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  // check if out button is disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo" ref={(el) => (logo = el)}>
              <Link to="/">SHOPPER.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);