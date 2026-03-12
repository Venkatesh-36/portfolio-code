import "./Contact.css";
import mail from "../../assets/images/mail.png";
import cliq from "../../assets/images/cliq.png";
import people from "../../assets/images/people.png";
export default function Contact() {
  return (
    <div id="contact">
      <h1>Get In Touch</h1>
      <h2 className="section-title"></h2>
      <div className="details">
        <div className="left">
          <div className="connect">
            <img src={people} />
            <p>ZSTTK-413/25</p>
          </div>
          <div className="connect">
            <img src={cliq} />
            <p>venkatesh rajagopal</p>
          </div>
          <div className="connect">
            <img src={mail}/>
            <p>venkat.r@zohocorp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}