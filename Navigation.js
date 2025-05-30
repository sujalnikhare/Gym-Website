import "./Navigation.css";
import MainLogo from "./Images/Main Logo.png";
import LogoName from "./Images/Name.png";
import { Link, Outlet } from "react-router-dom";

function NAVIGATION() {
  return (
    <>
      <nav>
        <div id="logo">
          <Link to="/">
            <img id="main-logo" src={MainLogo} alt=""/>
          </Link>
        </div>

        <div id="name">
          <Link to="/">
            <img id="logo-name" src={LogoName} alt=""/>
          </Link>
        </div>

        <div id="navsec">
          <Link id="anchor1" to="./1.About">
            ABOUT
          </Link>
          <Link id="anchor" to="./2.Location">
            LOCATION
          </Link>
          <Link id="anchor" to="./3.Studio">
            STUDIO
          </Link>
          <Link id="anchor" to="./4.Buy">
            BUY
          </Link>
          <Link id="anchor" to="./5.Team">
            TEAM
          </Link>
          <Outlet />
        </div>

        <div id="lastnav">
          <Link id="button" to="./6.Get Started">
            GET STARTED
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NAVIGATION;
