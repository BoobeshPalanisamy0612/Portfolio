import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "444ad651-11dd-4856-a8a8-307087834bc7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id="contact" className='Contact'>
        <div className="Contact-title">
            <h1> Get in Touch </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1> Let's Talk </h1>
                <p>I am eager to take on new opportunities and projects where I can apply my skills, learn, and grow. Feel free to reach out to me with any ideas or opportunities — I’d be glad to connect and contribute.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/> <p>boobeshpalanisamy0612@gmail.com</p>
                     </div>
                     <div className="contact-detail">
                        <img src={call_icon} alt=""/> <p>+91 8248096268</p>
                     </div> 
                     <div className="contact-detail">
                        <img src={location_icon} alt=""/> <p>Erode, Tamil Nadu</p>
                     </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name"> Name </label>
                <input type="text" placeholder="Your Name" name="name" />
                <label htmlFor="email"> Email </label>
                <input type="email" placeholder="Your Email" name="email" />
                <label htmlFor="message"> Your Message !!! </label>
                <textarea name="message" placeholder="Your Message" rows="8"></textarea>
                <button type="submit" className="contact-submit"> Submit Now </button>
            </form>
        </div>
    </div>
    )
}

export default Contact