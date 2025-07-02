import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-left'>
                <img className='logo-bottom' src={assets.logo_bottom} alt="" />
                <p>Food Prep is a full-stack project designed for hands-on teaching, helping students learn full-stack development. It's used by FACEPrep, an ed-tech company focused on equipping students with the skills to achieve their career aspirations.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-center'>
                <h2>Company</h2>
                <ul>
                    <li><a href='https://faceprep.edmingle.com/'>Home</a></li>
                    <li><a href="https://faceprep.edmingle.com/contact-us">About Us</a></li>
                    <li><a href="https://faceprep.edmingle.com/courses">Courses</a></li>
                    <li><a href="https://faceprep.edmingle.com/reviews">Reviews</a></li>
                </ul>
            </div>
            <div className='footer-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 8328255969</li>
                    <li>enquiry@foodprep.in</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 FoodPrep. All rights reserved.</p>
    </div>
  )
}

export default Footer