import React from "react";
import './Login.css';
import password from './../../images/password.gif'

const Login = () => {
    return (
        <div className="section2" id="login">
            <div className="container">
                <h3 className='title'><span className='highlights'>লগইন</span></h3>
                <p className='subtitle'>লগইন করে কানেক্টেড থাকুন</p>

                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        {/* <img src={password} alt="password"></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;