"use client"
import CountUp from "react-countup";
import Image from "next/image";
import { useState, useEffect } from "react";
import './About.css';
import { useInView } from "react-intersection-observer";

import img1 from '../../../public/about/img1.png';
import img2 from '../../../public/about/img2.png';
import img3 from '../../../public/about/img3.png';
import img4 from '../../../public/about/img4.png';

const About = () => {
    const [counterOn1, setCounterOn1] = useState(false);
    const [counterOn2, setCounterOn2] = useState(false);
    const [counterOn3, setCounterOn3] = useState(false);
    const [counterOn4, setCounterOn4] = useState(false);

    // Use the `useInView` hook to trigger counters when sections are in view
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false });

    // Use effect to set counters based on inView
    useEffect(() => {
        if (inView1) setCounterOn1(true);
        if (!inView1) setCounterOn1(false);
    }, [inView1]);

    useEffect(() => {
        if (inView2) setCounterOn2(true);
        if (!inView2) setCounterOn2(false);
    }, [inView2]);

    useEffect(() => {
        if (inView3) setCounterOn3(true);
        if (!inView3) setCounterOn3(false);
    }, [inView3]);

    useEffect(() => {
        if (inView4) setCounterOn4(true);
        if (!inView4) setCounterOn4(false);
    }, [inView4]);

    return (
        <div className='about' id='about'>
            <div className='container'>
                {/* First Card */}
                <div className="about-card" ref={ref1}>
                    <Image className='about-images' src={img1} alt="Image 1" />
                    {counterOn1 && (
                        <span>
                            <h4 className='about-text'>
                                <CountUp start={0} end={25} duration={2} separator="" />
                            </h4>
                        </span>
                    )}
                    <p className='about-paragraph'>Yillik tajriba</p>
                </div>

                {/* Second Card */}
                <div className="about-card" ref={ref2}>
                    <Image className='about-images' src={img2} alt="Image 2" />
                    {counterOn2 && (
                        <span>
                            <h4 className='about-text'>
                                <CountUp start={0} end={1000} duration={2} separator="" />
                                +
                            </h4>
                        </span>
                    )}
                    <p className='about-paragraph'>Xursand mijozlar</p>
                </div>

                {/* Third Card */}
                <div className="about-card" ref={ref3}>
                    <Image className='about-images' src={img3} alt="Image 3" />
                    {counterOn3 && (
                        <span>
                            <h4 className='about-text'>
                                <CountUp start={0} end={100} duration={2} separator="" />
                                +
                            </h4>
                        </span>
                    )}
                    <p className='about-paragraph'>Texnik mutaxasis</p>
                </div>

                {/* Fourth Card */}
                <div className="about-card" ref={ref4}>
                    <Image className='about-images' src={img4} alt="Image 4" />
                    {counterOn4 && (
                        <span>
                            <h4 className='about-text'>
                                <CountUp start={0} end={1200} duration={2} separator="" />
                                +
                            </h4>
                        </span>
                    )}
                    <p className='about-paragraph'>Ochilgan qulflar</p>
                </div>
            </div>
        </div>
    );
};

export default About;
