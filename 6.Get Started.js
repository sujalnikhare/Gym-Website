import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./6.Get Started.css";


function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  let goto = useNavigate();
  const HandleSubmit = () => {
    goto("/4.Buy");
  };

  const finalSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !age || !email || !address || !city) {
      alert("Please fill out all details.");
      return;
    } 
    else if (mobile.length !== 10) {
      alert("Mobile is Incorrect.");
      return;
    }
    else if (age<18) {
        alert("Age is Invalid.");
        return;
    }
    else if (age>30) {
        alert("Age is Invalid.");
        return;
    }
    else
      alert(`
            Name : ${name}
            Age : ${age}
            Mobile No.: ${mobile}
            Email : ${email}
            Address : ${address}
            City : ${city}
        `);

    HandleSubmit();
  };

  return (
    <>
      <div id="formm" onSubmit={finalSubmit}>
        <form>
          <h1 id="formh1">REGISTER</h1>
          <input
            id="inp"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="inpt"
            type="Number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            id="inpt"
            type="tel"
            placeholder="Mobile No."
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            id="inp"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="inp"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            id="inp"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <br />
          <button id="formsub">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
