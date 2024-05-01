import React, { useState } from 'react'
import '../scss/pagesStyle/Register.scss'
import logo from '../images/logo.svg';
import { IoMdClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { RxCaretRight } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleBack = () => {
        navigate(-1);
    }

  return (
      <section className='RegisterPage'>
          <div className='RegisterInfo'>
              <div className='RegisterInfoHeader'>
                  <IoMdClose size={"40px"} cursor={"pointer"} onClick={handleBack}/>
                  <img src={logo} alt="" />
              </div>
              <div className='RegisterInfoBody'>
                  <h1>Subscribe now and start streaming</h1>
              </div>
          </div>
          
          <div className="RegisterPlans">
          <div className="RegisterHeader">
              
              </div>
              <div className="RegisterPlansHeader">
                  <h3 className={`Header ${activeIndex === 1 ? 'active' : ''}`}>Mobile</h3>
                  <h3 className={`Header ${activeIndex === 2 ? 'active' : ''}`}>Super</h3>
                  <h3 className={`Header ${activeIndex === 3 ? 'active' : ''}`}>Premium</h3>
              </div>
              <div className="RegisterPlansContent">
              <div className="RegisterPlansTypes">
                  <h4>All Content</h4>
                  <h4>Watch on TV or Laptop</h4>
                  <h4>Ads free movies and shows</h4>
                  <h4>Number of devices that can be logged in</h4>
                  <h4>Max video quality</h4>
                  <h4>Max audio quality</h4>
              </div>
              <div className="RegisterPlansCategories">
                  <div className={`RegisterPlansMobile ${activeIndex === 1 ? 'active' : ''}`}>
                            <IoCheckmark size={"40px"} color='white'/>
                            <IoMdClose size={"40px"} color='white'/>
                            <IoMdClose size={"40px"} color='white'/>
                            <h4>1</h4>
                            <h4>HD 720p</h4>
                            <h4>Stereo</h4>
                  </div>
                  <div className={`RegisterPlansSuper ${activeIndex === 2 ? 'active' : ''}`}>
                          <IoCheckmark size={"40px"} color='white'/>
                          <IoCheckmark size={"40px"} color='white'/>
                          <IoMdClose size={"40px"} color='white'/>
                          <h4>2</h4>
                          <h4>Full HD 1080p</h4>
                          <h4>Dolby Atmos</h4>
                  </div>
                  <div className={`RegisterPlansPremium ${activeIndex === 3 ? 'active' : ''}`}>
                          <IoCheckmark size={"40px"} color='white'/>
                          <IoCheckmark size={"40px"} color='white'/>
                          <IoCheckmark size={"40px"} color='white'/>
                          <h4>4</h4>
                          <h4>Full HD 1080p</h4>
                          <h4>Dolby Atmos</h4>

                  </div>
                  </div>
              </div>
            
              <div className="RegisterPlansPricing">
                  <div className={`Pricing Mobile ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                      <h2>Mobile</h2>
                      <div className="Price">
                      <span className='Rupee'>₹</span>
                          <span className='Amount'>149</span>
                          <span className='Time'>/3months</span>
                      </div>
                  </div>
                  <div className={`Pricing Super ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                  <h2>Super</h2>
                      <div className="Price">
                          <span className='Rupee'>₹</span>
                          <span className='Amount'>299</span>
                          <span className='Time'>/3months</span>
                      </div>
                  </div>
                  <div className={`Pricing Premium ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                  <h2>Premium</h2>  
                      <div className="Price">
                      <span className='Rupee'>₹</span>
                          <span className='Amount'>499</span>
                          <span className='Time'>/3months</span>
                      </div>
                  </div>
                  </div>
                  <div className="SubmitBox">
                  <button className="SubmitButton">
                      <h2>Continue with mobile</h2>
                      <RxCaretRight size={"40px"}/>
                      </button>
                  </div>
              </div>
             
          
    </section>
  )
}

export default Register