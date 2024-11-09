import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/Hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContect">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ramkumar</span> <br />Website Designer</span>
                <p className="introPara">I am a Skilled Web Devloper With Experience in creating <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>

            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )

}
export default Intro;