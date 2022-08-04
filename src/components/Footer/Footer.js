import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div class="container">
                <footer class="row mt-5">
                    <div class="col-md-3 col-sm-12">
                        <a href='#home' className='logo'>আন নাসর</a>
                        <p class="text-muted">© ২০২২</p>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <h5>ঠিকানা</h5>
                        <ul class="nav">
                            <li>৬৪/এ, প্রথম কলোনী,</li>
                            <li>মিরপুর ১, ঢাকা</li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <h5>ই-মেইল</h5>
                        <ul class="nav">
                            <li>annasor2022@gmail.com</li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <h5>সামাজিক মাধ্যম</h5>
                        <ul class="nav">
                            <li>ফেসবুক</li>
                            <li>টুইটার</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer;