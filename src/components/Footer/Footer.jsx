import './Footer.css';
import Image from 'next/image';
import logo from '../../../public/logo_main.jpg';
import img1 from '../../../public/footer/img1.png';
import img2 from '../../../public/footer/img2.svg';
import img3 from '../../../public/footer/img3.svg';
import img4 from '../../../public/footer/img4.webp';
import img5 from '../../../public/footer/img5.png';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <a href="#"> <Image className='footer-logo' src={logo} alt="logo" /></a>
                <div className='footer-lists'>
                    <ul className="footer-lists">
                        <li className="footer-list">Manzil</li>
                        <a className='footer-link' href="https://yandex.uz/maps/10335/tashkent/geo/1724226780/?ll=69.221463%2C41.360935&z=14.81">
                            <li className="footer-list">Toshkent shahar, Olmazor tumani, <br /> Qorakhamish 1/4</li>
                        </a>
                    </ul>

                </div>
                <div className='footer-items'>
                    <ul className="footer-item">
                        <li className="footer-subline active">Biz bilan bog`laning : <Image className='footer-phone' src={img1} alt="phone" /></li>
                        <a className='footer-subline-link' href="tel:998900915567"><li className="footer-subline">+998900915567 </li></a>
                        <a className='footer-subline-link' href="tel:998909991435"><li className="footer-subline">+998909991435 </li></a>
                        <a className='footer-subline-link' href="tel:998900222049"><li className="footer-subline">+998900222049 </li></a>
                        <a className='footer-subline-link' href="tel:998997223839"><li className="footer-subline">+998997223839 </li></a>
                        <a className='footer-subline-link' href="tel:998983606533"><li className="footer-subline">+998983606533 </li></a>
                    </ul>

                </div>
                <div className='footer-sublinks'>
                    <a href="" className="footer-iconic">Ijtimoiy tarmoqlarimiz : </a>
                    <ul className='footer-module'>
                        <li className='footer-subline'><a href="" className="footer-icons"><Image src={img2} className='footer-iconics insta' alt='' /></a></li>
                        <li className='footer-subline'><a href="" className="footer-icons"><Image src={img3} className='footer-iconics link' alt='' /></a></li>
                    </ul>
                    <ul className='footer-modules'>
                        <li className='footer-subline'><a href="" className="footer-icons"><Image src={img4} className='footer-iconics you' alt='' /></a></li>
                        <li className='footer-subline'><a href="" className="footer-icons"><Image src={img5} className='footer-iconics tel' alt='' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
