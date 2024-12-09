"use client"
import './Services.css';
import Image from 'next/image';

import img1 from '../../../public/services/qulf.jpg'
import img2 from '../../../public/services/murvat.jpg'
import img3 from '../../../public/services/xavfsizlik.jpg'
import img4 from '../../../public/services/img4.jpg'
import img5 from '../../../public/services/img5.jpg'
import img6 from '../../../public/services/xavfsiz.jpg'

import icon1 from '../../../public/services/icons/img1.png'
import icon2 from '../../../public/services/icons/img2.png'
import icon3 from '../../../public/services/icons/img3.png'
import icon4 from '../../../public/services/icons/img4.png'
import icon5 from '../../../public/services/icons/img5.png'
import icon6 from '../../../public/services/icons/img6.png'


const Services = () => {
    return (
        <div className='services' id='service'>
            <div className='container'>
                <div className='services-card'>
                    <Image className='services-image' src={img1} alt="image" />
                    <h2 className='services-title'>Eshik qulfini ochish</h2>
                    <p className='services-paragraph'>
                        Uyingiz xavfsizligi birinchi o`rinda turadi va bu xavfsizlikning asosiy elementlaridan biri eshik qulflarini to`g`ri o`rnatishdir.
                    </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>
                        <div className='service-icons'><Image src={icon1} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
                <div className='services-card'>
                    <Image className='services-image' src={img2} alt="image" />
                    <h2 className='services-title'>Murvat qulfi</h2>
                    <p className='services-paragraph'>
                        Uyingizni himoya qilish haqida gap ketganda, siz ko`rishingiz mumkin bo`lgan eng samarali choralardan biri bu yuqori sifatli qulflarni o`rnatishdir.
                    </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>

                        <div className='service-icons'><Image src={icon2} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
                <div className='services-card'>
                    <Image className='services-image' src={img3} alt="image" />
                    <h2 className='services-title'>Xavfsizlik tizimi</h2>
                    <p className='services-paragraph'>
                        Bizning aqlli uy xavfsizlik tizimlari uzluksiz himoyani ta`minlash uchun eng yangi texnologiyalarni birlashtiradi.                 </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>

                        <div className='service-icons'><Image src={icon3} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
                <div className='services-card'>
                    <Image className='services-image' src={img4} alt="image" />
                    <h2 className='services-title'>Avtomobil eshigi qulfi</h2>
                    <p className='services-paragraph'>
                        Bizning avtomobil xavfsizligi bo`yicha mutaxassislarimiz avtomobil eshiklari qulflari  haqida chuqur bilImagea ega.                </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>

                        <div className='service-icons'><Image src={icon4} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
                <div className='services-card'>
                    <Image className='services-image' src={img5} alt="image" />
                    <h2 className='services-title'>Kalitlarni Tiklash</h2>
                    <p className='services-paragraph'>
                        Our experienced technicians are skilled in the art of key duplication. They understand the intricacies of different key types.                </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>

                        <div className='service-icons'><Image src={icon5} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
                <div className='services-card'>
                    <Image className='services-image' src={img6} alt="image" />
                    <h2 className='services-title'>Xavfsiz qulf</h2>
                    <p className='services-paragraph'>
                        Xavfsiz qulflar sizning qimmatbaho narsalaringizni xavfsiz saqlashda hal qiluvchi rol o`ynaydi. An`anaviy kombinatsiyalangan . </p>
                    <div className='service-group'>
                        <a href="#contact" className="services-anchor">
                            <button className='services-button'>
                                Ko`proq bilish
                            </button>
                        </a>

                        <div className='service-icons'><Image src={icon6} alt="icon" className='services-icon' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
