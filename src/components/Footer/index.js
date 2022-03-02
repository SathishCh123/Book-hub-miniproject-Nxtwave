import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-section-main-container">
    <div className="footer-icons-container">
      <FaGoogle className="footer-icon" />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
    </div>
    <p className="footer-title">Contact us</p>
  </div>
)

export default Footer
