import Image from "next/image";
import './Home.css';
import homeImg from '../../../public/home2.jpg';
const Home = () => {
    return (
        <div className='home' id='#'>
            <div className='container'>
                <div className='home-left'>
                    <h1 className='home-title'>
                        <span className='home-subline'>E</span>kipaj xizmatiga xush kelibsiz!
                    </h1>
                    <div className="home-contact">
                        <div className="home-contact-title">Biz bilan bog`laning: </div>
                        <ul className="home-contact-items">
                            <li className="home-contact-item">
                                <a href="tel:998900915567" className="home-contact-link">+998900915567</a>
                            </li>
                            <li className="home-contact-item">
                                <a href="tel:998909991435" className="home-contact-link">+998909991435</a>
                            </li>
                            <li className="home-contact-item">
                                <a href="tel:998900222049" className="home-contact-link">+998900222049</a>
                            </li>
                            <li className="home-contact-item">
                                <a href="tel:998997223839" className="home-contact-link">+998997223839</a>
                            </li>
                            <li className="home-contact-item">
                                <a href="tel:998983606533" className="home-contact-link">+998983606533</a>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-container">
                        <a href="#contact" className='home-anchor'><button className='home-btn'>Bog`lanish</button></a>
                    </div>
                </div>
                <div className="img-container">
                    <Image className='home-Image' src={homeImg} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Home
