import React from 'react';
import './Branches.css';

import { FaCashRegister } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdNaturePeople } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { BsGraphDown } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';

const Branches = () => {
    return (
        <div className='section'>
            <div className="container">
                <h3 className='title'>আমাদের সকল <span className='highlights'>ব্র্যাঞ্চসমূহ</span></h3>
                <p className='subtitle'>দেখুন, মিলিয়ে নিন আমাদের কার্যক্রম</p>

                <select class="form-select" aria-label="Default select example">
                    <option selected>যে ব্রাঞ্চ সম্পর্কে জানতে চান সেটি সিলেক্ট করুন</option>
                    <option value="1">মিরপুর</option>
                    <option value="2">ধানমন্ডি</option>
                    <option value="3">কলাবাগান</option>
                    <option value="3">আশুলিয়া</option>
                </select>

                <h4 className='branch_title'>মিরপুর ব্রাঞ্চ</h4>
                <div className='total'>
                    <div class="row">
                        <div class="col-md-3 total_card">
                            <GiCash className="icon" />
                            <h6>সর্বমোট ফান্ড</h6>
                            <p>১,২৩,৯১২ টাকা</p>
                        </div>
                        <div class="col-md-3 total_card">
                            <GiReceiveMoney className="icon" />
                            <h6>দানকৃত ফান্ড</h6>
                            <p>২৩,৯১২ টাকা</p>
                        </div>
                        <div class="col-md-3 total_card">
                            <BsGraphDown className="icon" />
                            <h6>অনন্যা খরচ</h6>
                            <p>০০০ টাকা</p>
                        </div>
                        <div class="col-md-3 total_card">
                            <FaCashRegister className="icon" />
                            <h6>বর্তমান ফান্ড</h6>
                            <p>১,০০,০০০ টাকা</p>
                        </div>

                    </div>
                </div>

                <h5 className='branch_title mt-5'>সাহায্যপ্রাপ্তদের তালিকা</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">আইডি</th>
                            <th scope="col">নাম</th>
                            <th scope="col">এমাউন্ট</th>
                            <th scope="col">স্ট্যাটাস</th>
                            <th scope="col">ডিটেলস</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>০০০১</td>
                            <td>গাজী রাশিদুল</td>
                            <td>৫০০০ টাকা</td>
                            <td>হয়ে গেছে</td>
                            <td>বাড়ি মেরামতের জন্য</td>
                        </tr>
                        <tr>
                            <td>০০০১</td>
                            <td>গাজী রাশিদুল</td>
                            <td>৫০০০ টাকা</td>
                            <td>হয়ে গেছে</td>
                            <td>বাড়ি মেরামতের জন্য</td>
                        </tr>
                        <tr>
                            <td>০০০১</td>
                            <td>গাজী রাশিদুল</td>
                            <td>৫০০০ টাকা</td>
                            <td>হয়ে গেছে</td>
                            <td>বাড়ি মেরামতের জন্য</td>
                        </tr>
                        <tr>
                            <td>০০০১</td>
                            <td>গাজী রাশিদুল</td>
                            <td>৫০০০ টাকা</td>
                            <td>হয়ে গেছে</td>
                            <td>বাড়ি মেরামতের জন্য</td>
                        </tr>
                        <tr>
                            <td>০০০১</td>
                            <td>গাজী রাশিদুল</td>
                            <td>৫০০০ টাকা</td>
                            <td>হয়ে গেছে</td>
                            <td>বাড়ি মেরামতের জন্য</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Branches;