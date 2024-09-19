import React from 'react'
import './Footer.css'
import logo from '../../assets/images/1370677824big-graphic-logo.png';

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer-head'>
              <h1 className='mb-3'>Join our team.</h1>
              <p className='mb-3'>Realize your potential.</p>
              <p><button className='footer-btn'>Explore TechTorch careers</button></p>
            </div>
            <hr />
          </div>
          <div className='row'>
            <p>SOCIAL</p>
            <h2>Follow us for the latest updates</h2>
            <div className='footer-head-icon'>
              <a href='/'><i class="fa-brands fa-facebook-f"></i><span>facebook</span></a>
              <a href='/'><i class="fa-brands fa-x-twitter"></i><span>Twitter</span></a>
              <a href='/'><i class="fa-brands fa-youtube"></i><span>YouTube</span></a>
              <a href='/'><i class="fa-brands fa-instagram"></i><span>Instagram</span></a>
              <a href='/'><i class="fa-brands fa-linkedin"></i><span>Linkedin</span></a>
            </div>
            <hr />
          </div>
          <div className='row py-4'>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
              <h6>Industries</h6>
              <ul className='ps-0  list-unstyled footer-links-container'>
                <li><a href='/' className='footer-link'>Finance</a></li>
                <li><a href='/' className='footer-link'>Education</a></li>
                <li><a href='/' className='footer-link'>Medical</a></li>
                <li><a href='/' className='footer-link'>Energy</a></li>
                <li><a href='/' className='footer-link'>Transportation</a></li>
                <li><a href='/' className='footer-link'>FMCG</a></li>

              </ul>

            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
              <h6>Services</h6>
              <ul className='ps-0  list-unstyled footer-links-container'>
                <li><a href='/' className='footer-link'>Artificial Intelligence (Alass)</a></li>
                <li><a href='/' className='footer-link'>Web Solutions (SaaS)</a></li>
                <li><a href='/' className='footer-link'>Enterprise Resources Planning (Saas)</a></li>
                <li><a href='/' className='footer-link'>Business Process Outsourcing (BPO)</a></li>
                <li><a href='/' className='footer-link'>Cloud Infra (lass)</a></li>
                <li><a href='/' className='footer-link'>Tech Courses</a></li>

              </ul>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
              <h6>Products and Platforms</h6>
              <ul className='ps-0  list-unstyled footer-links-container'>
                <li><a href='/' className='footer-link'>Enterprise Resource Planning (PaaS)</a></li>
                <li><a href='/' className='footer-link'>Customer Relationship Management (Pass)</a></li>
                <li><a href='/' className='footer-link'>Cyber Security (PaaS)</a></li>
                <li><a href='/' className='footer-link'>Cloud Infra (PaaS)</a></li>


              </ul>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
              <h6>Insights</h6>
              <ul className='ps-0  list-unstyled footer-links-container'>
                <li><a href='/' className='footer-link'>News</a></li>
                <li><a href='/' className='footer-link'>Events</a></li>
                <li><a href='/' className='footer-link'>Case Studies</a></li>
                <li><a href='/' className='footer-link'>Views</a></li>
                <li><a href='/' className='footer-link'>Analyst</a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-0 mb-3 '>
              <a href='/'>
                <img src={logo}
                  className='img-fluid footer-logo' alt='...' />
              </a>
            </div>
            <div className='col-lg-10 col-md-9 mt-3'>
            <span className='footer-copyright me-lg-5 me-md-3 me-sm-3'>©2024 TechTorch Solutions Private Limited</span>
              <ul className='footer-bottom-links '>
                <li><a href='/'>Terms of Use</a></li>
                <li><a href='/'>Accessibility</a></li>
                <li><a href='/'>Privacy</a></li>
                <li><a href='/'>Cookie</a></li>
              </ul>
    
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
