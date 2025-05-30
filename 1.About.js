import './1.About.css'
import ABOUT from './Images/About.jpg'
import About1 from './Images/About img 1.jpg'
import About2 from './Images/About img 2.jpg'
import About3 from './Images/About img3.jpg'
import About4 from './Images/About img4.jpg'
import { Link, Outlet } from 'react-router-dom'




function About(){
    return(
        <>
        <div id="about-main">
            <h1 id="about">ABOUT</h1>
            <img id="aboutback" src={ABOUT} alt=""/>
        </div>

        <div id="about-space">
            <div id="about-space1">
                <div id="about-left">
                    <img id="about-img1" src={About1} alt=""/>
                </div>

                <div id="about-right">
                    <div id="about-data1">
                        <h1 id="about-hed">WHAT’S DOPE FITNESS?</h1>
                        <p id="about-para">
                            Welcome to DOPE FITNESS where we've reimagined the modern workout with
                            our Transformer Pilates classes. Infused with the vibrant spirit of NYC, 
                            our sessions are designed for the fast-paced London lifestyle.
                            <br/>
                            <br/>
                            Each 50-minute class takes place on our custom-built, resistance-based 
                            Transformer machines. We start with a warm-up, followed by a high-intensity 
                            full-body workout, and finish with a stretch and mindfulness session to reset 
                            both body and mind.
                            <br/>
                            <br/>
                            At the heart of our classes is the belief that a strong mind fuels a strong body. 
                            Cultivate a "yes I can" mindset, and the results will follow. Our instructors will 
                            guide and motivate you, but the power to push through lies in your hands.
                        </p>
                    </div>
                </div>
            </div>

            <div id="about-space2">
                <div id="about-right">
                    <div id="about-data2">
                        <h1 id="about-hed">Energized by Endorphins, Shaped by Innovation.</h1>
                        <p id="about-para">
                            The “Get Marathon Ready” package is designed to push your limits while ensuring adequate 
                            recovery and preparation for the big day. Let DOPE Fitness help you understand your 
                            body, make necessary adjustments, and maintain the right habits for nutrition, hydration, 
                            and sleep, especially as the Marathon approaches. 
                            <br/>
                            <br/>
                            The training program is specifically designed for advanced/regular runners who are willing 
                            to optimize their performance for a Marathon. The program includes in-gym workout 
                            sessions along with exceptional outdoor running sessions, concentrating on building 
                            strength, enhancing endurance, and refining speed and race pace. 
                            <br/>
                            <br/>
                        </p>
                    </div>
                </div>
                <div id="about-left">
                    <img id="about-img2" src={About2} alt=""/>
                </div>
            </div>
        </div>


        <div id="about-space">
            <div id="about-space1">
                <div id="about-left">
                    <img id="about-img1" src={About3} alt=""/>
                </div>

                <div id="about-right">
                    <div id="about-data1">
                        <h1 id="about-hed">FITNESS FOR ALL</h1>
                        <p id="about-para">
                            Fitness is not the prerogative of a few AF gyms in India. It is the right 
                            of each individual on the same premise, and we are committed to ‘Make 
                            Healthy Happen’ for all.
                            <br/>
                            <br/>
                            To realise this dream, AF offers a 24/7/365 open-door policy, so that your 
                            gym schedule works according to you. AF also has Personal Training and Fitness 
                            consultations based on your goals, current lifestyle, and various other demographics.
                            <br/>
                            <br/>
                            At the heart of our classes is the belief that a strong mind fuels a strong body. 
                            Cultivate a "yes I can" mindset, and the results will follow. Our instructors will 
                            guide and motivate you, but the power to push through lies in your hands.
                        </p>
                    </div>
                </div>
            </div>

            <div id="about-space2">
                <div id="about-right">
                    <div id="about-data2">
                        <h1 id="about-hed">Customised Workout Plans</h1>
                        <p id="about-para">
                            The “Get Marathon Ready” package is designed to push your limits while ensuring adequate 
                            recovery and preparation for the big day. Let DOPE Fitness help you understand your 
                            body, make necessary adjustments, and maintain the right habits for nutrition, hydration, 
                            and sleep, especially as the Marathon approaches. 
                            <br/>
                            <br/>
                            The training program is specifically designed for advanced/regular runners who are willing 
                            to optimize their performance for a Marathon. The program includes in-gym workout 
                            sessions along with exceptional outdoor running sessions, concentrating on building 
                            strength, enhancing endurance, and refining speed and race pace. 
                            <br/>
                            <br/>
                            <Link id="buttonforteam" to="/3.Studio">Studio</Link>
                            <Outlet/>

                        </p>
                    </div>
                </div>
                <div id="about-left">
                    <img id="about-img2" src={About4} alt=""/>
                </div>
            </div>
        </div>




        
        </>
    )
}

export default About