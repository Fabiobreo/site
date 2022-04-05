import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faAddressCard, faCopy, faGraduationCap, faHome, faIdBadge, faUser } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="red">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Fabio Brea
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/site">
                    <FontAwesomeIcon icon={faHome} />  Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <FontAwesomeIcon icon={faCopy} />  Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experiences">
                    <FontAwesomeIcon icon={faIdBadge} />  Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/educations">
                    <FontAwesomeIcon icon={faGraduationCap} />  Educations
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <FontAwesomeIcon icon={faAddressCard} /> Portfolios
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/site">
              <i className="fas fa-home"/> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i className="fas fa-copy"/> Skills
            </Link>
          </li>
          <li>
            <Link to="/experiences">
              <i className="fas fa-id-badge"/> Experiences
            </Link>
          </li>
          <li>
            <Link to="/educations">
              <i className="fas fa-graduation-cap"/> Educations
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i className="fas fa-address-card"/> Portfolios
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}
