import "./Footer.css";
import footlogo from "./Images/LOGO.png";
import { Link,Outlet } from "react-router-dom";

function FOOTER() {
  return (
    <>
      <div id="footer">
        <div id="footup">
          <div id="foot1">
            <img id="foot-logo" src={footlogo} alt=""/>
            <p id="footpara">
              Inspired by the Big Apple, on the pulse <br />
              of the Big Smoke, we redefine the modern-day
              <br />
              workout with our signature Transformer Pilates classes.
              <br />
              We capture New York’s infectious energy,
              <br />
              tailored to London lifestyles.
            </p>
          </div>
          <div id="foot2">
            <ul id="footlist">
              <li>
                <Link id="roll" to="">GIFT</Link>
              </li>
              <li>
                <Link id="roll" to="">BUY</Link>
              </li>
              <li>
                <Link id="roll" to="">TEAM</Link>
              </li>
              <li>
                <Link id="roll" to="">CONTACT US</Link>
              </li>
              <Outlet/>
            </ul>


            <ul id="footlist">
              <li>
                <Link id="roll" to="">FAQ's</Link>
              </li>
              <li>
                <Link id="roll" to="">FRANCHISE</Link>
              </li>
              <li>
                <Link id="roll" to="">EVENTS</Link>
              </li>
              <li>
                <Link id="roll" to="">TERMS AND CONDITION</Link>
              </li>
              <li>
                <Link id="roll" to="">PRIVACY POLICY</Link>
              </li>
              <Outlet/>
            </ul>


          </div>
        </div>
        <div id="footbottom">
            <div id="footleft"><p id="copy1">©Copyright By DOPE FITNESS 2025</p></div>
            <div id="footright"><p id="copy2">TRANSFORM YOUR MIND | TRANSFORM YOUR BODY</p></div>
        </div>
      </div>
    </>
  );
}

export default FOOTER;
