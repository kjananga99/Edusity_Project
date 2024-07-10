import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@Janangawijewardhana</li>
            <li> <img src={phone_icon} alt="" />076-4846356</li>
            <li> <img src={location_icon} alt="" />KALANA,KAVISIGAMUWA<br/> 6008 , UDAGAMA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>sending</span>
      </div>
    </div>
  )
}

export default Contact
