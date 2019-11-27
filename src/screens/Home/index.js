import React from 'react';
import '../../assets/Landing_page/css/normalize.css';
import '../../assets/Landing_page/css/isw-dev.webflow.css';
import './Home.css';
import image2 from '../../assets/Landing_page/images/02.png';
import image3 from '../../assets/Landing_page/images/03.png';
import image4 from '../../assets/Landing_page/images/04.png';
import image1 from '../../assets/Landing_page/images/01.png';
import JsonCode from '../../assets/Landing_page/images/Code.svg';
import Zenith from '../../assets/Landing_page/images/Zenith.svg';
import Lafarge from '../../assets/Landing_page/images/Lafarge.svg_.png';
import Opay from '../../assets/Landing_page/images/Opay.svg';
import Ekedc from '../../assets/Landing_page/images/Ekedc.jpg';
import Bet9ja from '../../assets/Landing_page/images/Bet9ja_Logo.svg';
import DSTV from '../../assets/Landing_page/images/DSTV.png';
import First_Bank_Nigeria from '../../assets/Landing_page/images/First_Bank_Nigeria_Logo.svg';
import Flutterwave from '../../assets/Landing_page/images/Flutterwave_Logo.svg';
import Mines_io from '../../assets/Landing_page/images/Mines-logo_transparent.png';
import Paystack from '../../assets/Landing_page/images/Paystack.png';



function Home(){
    
    return (
        <div>
            <div className="page-wrapper">
                <div className="section hero-v3-section">                    
                    <div className="hero-image landscape"></div>
                    <div className="wrapper">
                        <div className="side-blocks mobile-reverse">
                            <div className="side-block mobile">
                                <div className="side-info hero mobile">
                                    <h1 className="heading">Let’s Develop the Future of Fintech</h1>
                                    <div className="text-primary hero" style={{marginBottom: '2.1875rem'}}>Create amazing apps for your users and easily customize them within your project</div>
                                    <a href="/" className="cta-button">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section feature">
                    <div className="wrapper">
                        <div className="side-blocks">
                            <div className="side-block">
                                <div className="side-info">
                                    <h2 className="section-header"><strong className="bold-text">Gain an unfair advantage</strong></h2>
                                    <h5 className="text-primary lhs">Interested in leveraging our products to drive your business, accessing third-party platforms, or simply exploring the details of our vast product offerings?<br />Interswitch Developer Console exposes you to endless possibilities, empowering you to do much more</h5>
                                    <div className="side-features">
                                        <div className="feature div-block div-block-2"><img src={image2} width="60" alt="" />
                                            <h4 className="section-topic"><strong>Activate your</strong><br /><strong>awesome ideas</strong></h4>
                                            <div className="text-primary feature">Our APIs are designed to help you achieve your business goals and bring your awesome ideas to life. Leverage our expertise and industry experience.</div>
                                        </div>
                                        <div className="feature div-block div-block-2"><img src={image3} width="60" alt="" />
                                            <h4 className="section-topic"><strong className="bold-text-3">Develop applications<br />end to end </strong></h4>
                                            <div className="text-primary feature">Create, test, and implement payment applications through a simple to use interface. Give your developers something to love.</div>
                                        </div>
                                        <div className="feature div-block div-block-2"><img src={image4} width="60" alt="" />
                                            <h4 className="section-topic"><strong>Get real time<br />industry support</strong></h4>
                                            <div className="text-primary feature">Our industry experts understand the complexity of your business and are willing to collaborate with you. Connect with like minds.</div>
                                        </div>
                                        <div className="feature div-block div-block-2"><img src={image1} width="60" alt="" />
                                            <h4 className="section-topic"><strong>You are in<br />great company</strong></h4>
                                            <div className="text-primary feature">Join the ever-growing list of partners we empower to deliver world-className products and services</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side-media">
                                <img src={JsonCode} width="276" alt="" className="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section clients">
                    <div className="wrapper">
                        <div className="side-blocks clients">
                            <div className="intro">
                                <h2 className="section-header"><strong className="bold-text-2">Partnerships that work</strong></h2>
                                <div className="text-primary">We enable our partners deliver world-class products</div>
                            </div>
                            <div className="w-layout-grid grid">
                                <a id="w-node-ab0b54d6c9aa-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Lafarge} width="120" alt="" />
                                </a>
                                <a id="w-node-ab0b54d6c9ac-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Zenith} width="56" alt="" />
                                </a>
                                <a id="w-node-ab0b54d6c9ae-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Ekedc} width="115" alt="" />
                                </a>
                                <a id="w-node-ab0b54d6c9b0-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Opay} alt="" />
                                </a>
                                <a id="w-node-ab0b54d6c9b2-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={First_Bank_Nigeria} width="75" alt="" />
                                </a>
                                <a id="w-node-ab0b54d6c9b4-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={DSTV} width="130" alt=""/>
                                </a>
                                <a id="w-node-ab0b54d6c9b6-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Paystack} width="374" alt=""/>
                                </a>
                                <a id="w-node-ab0b54d6c9b8-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Flutterwave} alt=""/>
                                </a>
                                <a id="w-node-ab0b54d6c9ba-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Mines_io} width="115" alt=""/>
                                </a>
                                <a id="w-node-ab0b54d6c9bc-d5433110" href="/" className="client-card-logo client w-inline-block">
                                    <img src={Bet9ja} width="75" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section cta">
                    <div className="wrapper">
                        <div className="intro cta">
                            <h2 className="section-header"><strong className="bold-text">Ready to get started?</strong></h2>
                            <div className="text-primary cta"  style={{marginBottom: '1.125rem'}}>Seamlessly create your project and integrate to any one of our products</div>
                            <a href="/" className="cta-button">Access our Dev Console</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;