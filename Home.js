import './Home.css'
import bigname from './Images/Name.png'
import Gyms from './Images/156-Gyms.png'
import Cities from './Images/95-Cities.png'
import States from './Images/26-States-1.png'
import Training from './Images/Personal-Training.png'
import Wellness from './Images/Corporate-Wellness-Program.png'
import Exercise from './Images/Group Exercise Program.png'
import Travel from './Images/Travel-Pass.png'
import Focus from './Videos/vid1 FOCUS.mp4'
import Outside from './Videos/vid2 OUTSIDE.mp4'


function HOME(){
    return(
        <>
        <div id="space">
        <div id="main">
           <img id="image" src={bigname} alt=""/>
        </div>
        <div id="quot">
            <h1 id="QUOTE">TRAIN WITH INSANE OR REMAIN THE SAME</h1></div>
        </div>

        <div id="space2">
        <div id="container">
            <h1 id="contain">What Makes Us <br/>
                Different Than Others</h1>
            <div id="box1">
                <div id="subox">
                    <img id="boxy" src={Gyms} alt=""/>
                    <p id="boxyp">156 Gyms</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={Cities} alt=""/>
                    <p id="boxyp">95 Cities</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={States} alt=""/>
                    <p id="boxyp">26 States</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={Training} alt=""/>
                    <p id="boxyp">Personal Training Program</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={Wellness} alt=""/>
                    <p id="boxyp">Corporate Wellness Program</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={Exercise} alt=""/>
                    <p id="boxyp">Group Exercise Program</p>
                </div>
            </div>
            <div id="box">
                <div id="subox">
                    <img id="boxy" src={Travel} alt=""/>
                    <p id="boxyp">Domestic & International
                        Travel Pass</p>
                </div>
            </div>
        </div>
        </div>

        <div id="space3">
        <div id="sec1">
            <div id="sub1">
                <div id="sec1-1">
                    <video id="vid" src={Focus} autoPlay controls  muted loop></video>
                </div>
            </div>
            <div id="sub2">
                <div id="sec1-2">
                    <h1 id="cap1">TRANSFORMER PILATES STUDIO</h1>
                    <p id="cap1p">
                        With the lights turned low, and the music cranked high, exhilarating beats 
                        pulsate from our urban loft style studio centered around our custom made DOPE 
                        Transformer machines. Powered by our high energy and passionate instructors, our 
                        studio experience will transform your body and mind with intentional and expertly 
                        executed Pilates-based sequences, leading to maximum results. Our machines are 
                        configured to offer a range of resistance levels to challenge you as you make your 
                        way through our 50-minute class.
                    </p>
                </div>
            </div>
        </div>
        <div id="sec2">
            <div id="sub2">
                <div id="sec2-1">
                    <h1 id="cap1">CLUB</h1>
                    <p id="cap1p">
                        Our wellbeing haven was created to support our clients’ busy lifestyles. 
                        Replicating the eclectic streets of Manhattan’s Soho with a serene spa vibe, our 
                        club offers a café with coffee, custom smoothies, and work spaces. Whether it’s a 
                        business meeting over a post-workout shake or just catching up with a friend, our 
                        space will quickly become an extension of your healthy lifestyle.
                    </p>
                </div>
            </div>
            <div id="sub1">
                <div id="sec2-2">
                    <video id="vid" src={Outside} autoPlay controls muted loop></video>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default HOME