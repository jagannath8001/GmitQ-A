import React from 'react';
import './assets/css/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
      return (
            <>
            <br/>
            <br/>
            
          




            {/* <!-- Footer Start --> */}
            <div className="footer">
                <div className="containerfoot">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>Get In Touch</h2>
                                <p><i className="fa fa-map-marker-alt"></i>700144 Baruipur, Kolkata, INDIA</p>
                                <p><i className="fa fa-phone-alt"></i>+91 7001587784</p>
                                <p><i className="fa fa-envelope"></i>Jagannathkuilya8@gmail.com.com</p>
                                <div className="footer-social">
                                    {/* <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Useful Link</h2>
                                <Link as={Link} to = "/about" >About</Link>
                                <Link as={Link} to = "/about" >Privacy</Link>
                                <Link as={Link} to = "/about" >Terms</Link>
                            <Link as={Link} to = "/about" >Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Useful Link</h2>
                                <Link as={Link} to = "/about" >Languages</Link>
                                <Link as={Link} to = "/about" >Customer Support</Link>
                                <Link as={Link} to = "/about" >FAQs</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <from action="#">
                            <div className="footer-form">
                                <h2>Feed Back</h2>
                                <p>
                                    You Visit This Site ,What Your Opinion For Upgread This Site.
                                </p>
                                <input className="form-control" placeholder=""></input><br/><br/>
                                <button  type="submit" className="btn" value="submit">Submit</button>
                            </div>
                            </from>
                        </div>
                    </div>
                </div>
                <div className="containerfoot footer-menu">
                    <div className="f-menu">
                    <Link as={Link} to = "/about" >Terms of use</Link>
                    <Link as={Link} to = "/about" >Privacy policy</Link>
                    <Link as={Link} to = "/about" >Cookies</Link>
                    <Link as={Link} to = "/about" >Help & FQAs</Link>
                <Link as={Link} to = "/about" >Contact us</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
            </>
      );
}
export default Footer;
