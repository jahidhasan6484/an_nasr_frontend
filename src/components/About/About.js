import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='section'>
            <div className='container'>
                <h3 className='title'><span className='highlights'>তথ্য</span> সমূহ</h3>
                <p className='subtitle'>আন নাসর সম্পর্কে জানুন</p>

                <div className='row'>
                    <div className='col-md-12 about'>
                        <div className='row inside_about'>
                            <div className='col-md-4'>
                                <h4 className='second_title'>আমাদের কার্যক্রম</h4>
                            </div>
                            <div className='col-md-8'>
                                সিলেটের এম এ জি ওসমানী মেডিকেল কলেজের দুই ছাত্রের ওপর হামলার ঘটনায় হওয়া মামলায় গ্রেপ্তার দুজন ছাত্রলীগের রাজনীতির সঙ্গে জড়িত বলে তথ্য পাওয়া গেছে। গত সোমবার দিবাগত রাতে তাঁদের আটক করা হয়।
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 about'>
                        <div className='row inside_about'>
                            <div className='col-md-4'>
                                <h4 className='second_title'>নিময়কানন</h4>
                            </div>
                            <div className='col-md-8'>
                                গতকাল মঙ্গলবার বিকেলে ওসমানী মেডিকেল কলেজ কর্তৃপক্ষ হত্যাচেষ্টার অভিযোগ এনে মামলা করলে ওই দুজনকে গ্রেপ্তার দেখানো হয়।
                                গ্রেপ্তার দুজন হলেন এহসান আহমদ ও সাঈদ হাসান ওরফে রাব্বি। এর মধ্যে সাঈদ হাসান সিলেট মহানগর ছাত্রলীগের ৩ নম্বর ওয়ার্ডের সাধারণ সম্পাদক। এহসান আহমদও ছাত্রলীগের রাজনীতির সঙ্গে যুক্ত। তবে তিনি কোনো পদে নেই।
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 about'>
                        <div className='row inside_about'>
                            <div className='col-md-4'>
                                <h4 className='second_title'>উপকারিতা</h4>
                            </div>
                            <div className='col-md-8'>
                                সিলেট মহানগর ছাত্রলীগের সাধারণ সম্পাদক নাঈম আহমদ বলেন, সাঈদ হাসান মহানগর ছাত্রলীগের ৩ নম্বর ওয়ার্ডের সাধারণ সম্পাদক, এটা ঠিক। তবে তিনি দায়িত্ব পাওয়ার আগে মহানগর ছাত্রলীগের ওই ওয়ার্ডের কমিটি হয়েছে। তাই তিনি এ বিষয়ে কিছু জানেন না। তবে এহসান আহমদকে চেনেন না বলে দাবি করেছেন তিনি।

                                এ বিষয়ে সাংগঠনিক কোনো ব্যবস্থা নেওয়া হবে কি না, জানতে চাইলে নাঈম আহমদ বলেন, মহানগর ছাত্রলীগের সভাপতি কিশওয়ার জাহান দেশের বাইরে আছেন। তিনি ফিরলে এ বিষয়ে সিদ্ধান্ত হবে।
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;