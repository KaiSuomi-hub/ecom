import React from 'react';
import './homepage.styles.css';

const HomePage = () => (
    <div className="homepage">
        <h1>It's a store-a!</h1>
        <div className="directory-menu">

                <div className="menu-item">
                    <div className="content">
                        <div className="title">HATS </div>
                        <span className="subtitle">BUY NOW!</span>
                    </div>
                </div>


                <div className="menu-item">
                    <div className="content">
                        <div className="title">JACKETS</div>
                        <span className="subtitle">BUY NOW!</span>
                    </div>
                </div>



                <div className="menu-item">
                    <div className="content">
                        <div className="title">SNEAKERS</div>
                        <span className="subtitle">BUY NOW!</span>
                    </div>
                </div>



                <div className="menu-item">
                    <div className="content">
                        <div className="title">WOMEN'S CLOTHING</div>
                        <span className="subtitle">BUY NOW!</span>
                    </div>
                </div>



                <div className="menu-item">
                    <div className="content">
                        <div className="title">MEN'S CLOTHING</div>
                        <span className="subtitle">BUY NOW!</span>
                    </div>
                </div>
        </div>
    </div>

)

export default HomePage;