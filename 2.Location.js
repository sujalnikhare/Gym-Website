import "./2.Location.css";
import LocBack from "./Images/loc-back.jpg";

function Location() {
  return (
    <>
      <div id="loc-main">
        <h1 id="loc">LOCATION</h1>
        <img id="locback" src={LocBack} alt="Location Background" />
      </div>

      <div id="locspace">
        <div id="locleft">
          <div id="mapblock">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.621070092923!2d79.08751907503544!3d21.16747318051686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c13a486091cd%3A0x3c39174b0dbd485e!2sFitness%20United!5e0!3m2!1sen!2sin!4v1738659906177!5m2!1sen!2sin"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div id="locright">
          <h1 id="loc-hed">DOPE FITNESS GYM</h1>
          
          <h3 id="loch3">Address:</h3>
          <p id="loc-para">Located in the Center of Nagpur, Kadbi Square, Next to the Zudio.</p>

          <h3 id="loch3">Phone:</h3>
          <p id="loc-para">+91 22 4578 7970</p>

          <h3 id="loch3">Mobile:</h3>
          <p id="loc-para">+91 99100 84402</p>

          <h3 id="loch3">Business Hours:</h3>
          <p id="loc-para">6 am – 12 am Monday – Saturday</p>
          <p id="loc-para">6 am – 10 pm Sunday</p>
        </div>
      </div>
    </>
  );
}

export default Location;
