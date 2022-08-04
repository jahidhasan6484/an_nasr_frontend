import React from 'react';
import './Home.css';

import { FaCashRegister } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdNaturePeople } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { BsGraphDown } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';

const Home = () => {
    return (
        <div className='section' id='home'>
            <div className='container'>
                <h3 className='title'>এক নজরে আমাদের <span className='highlights'>সফলতা</span></h3>
                <p className='subtitle'>মানুষ মানুষের জন্যে</p>
                <div className='total'>
                    <div class="row">
                        <div class="col-md-4 total_card">
                        <GiCash className="icon"/>
                            <h6>সর্বমোট ফান্ড</h6>
                            <p>১,২৩,৯১২ টাকা</p>
                        </div>
                        <div class="col-md-4 total_card">
                            <GiReceiveMoney className="icon"/>
                            <h6>দানকৃত ফান্ড</h6>
                            <p>২৩,৯১২ টাকা</p>
                            </div>
                        <div class="col-md-4 total_card">
                            <BsGraphDown className="icon"/>
                            <h6>অনন্যা খরচ</h6>
                            <p>০০০ টাকা</p>
                            </div>
                        <div class="col-md-4 total_card">
                            <FaCashRegister className="icon"/>
                            <h6>বর্তমান ফান্ড</h6>
                            <p>১,০০,০০০ টাকা</p>
                            </div>
                        <div class="col-md-4 total_card">
                          <GiTakeMyMoney className="icon"/>
                            <h6>ডোনারের সংখ্যা</h6>
                            <p>২১২ জন</p></div>
                        <div class="col-md-4 total_card">
                            <MdNaturePeople className="icon"/>
                            <h6>সাহায্য প্রাপ্তদের সংখ্যা</h6>
                            <p>২৩ জন</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;