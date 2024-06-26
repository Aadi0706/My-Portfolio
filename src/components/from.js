import { useState } from "react";
import icon from "../img/arrow.svg";
import "../styles/form.css";
import emailjs from "emailjs-com";
function Form() {
  const [turn, setturn] = useState(false);
  const [formData, setformData] = useState({});

  function Handler(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  function submitEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fktkzgh",
        "template_iggbjpd",
        e.target,
        "zhyCM9713_VUK32LK"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setformData({
      name: "",
      email: "",
      message: "",
    });
    setturn(!turn);
  }
  return (
    <div className={turn ? "form form-face" : "form"}>
      <div className="form-side form-front">

      <div className="contact">
          <h2>Aditya Choubey</h2>
          <h2>adityachoubey07@gmail.com</h2>
          <h2>Mobile no.- 7509595467</h2>
        </div>

        {/* <form id="form1" onSubmit={submitEmail}> */}
          {/* <label>Name:</label> */}
          {/* <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={Handler}
            value={formData.name}
          /> */}
      
          {/* <label>Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={Handler}
            value={formData.email}
          /> */}
          {/* <button
            className="arrow-btn right--btn"
            onClick={(e) => {
              e.preventDefault();
              setturn(!turn);
            }}
          >
            <img src={icon} width="46px" height="46px" alt="" />
          </button> */}
        {/* </form> */}
      </div>
      <div className="form-side form-back">
        <textarea
          placeholder="Message"
          name="message"
          onChange={Handler}
          value={formData.message}
          form="form1"
        ></textarea>
        <input type="submit" value="send" form="form1" />

        <button
          className="arrow-btn left--btn"
          onClick={(e) => {
            e.preventDefault();
            setturn(!turn);
          }}
        >
          <img src={icon} width="46px" height="46px" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Form;
