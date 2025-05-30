import './3.Studio.css'
import { Link, Outlet } from "react-router-dom";
import studback from "./Images/Studio img 2.jpg"
import studiovid1 from "./Videos/Club Studio Irvine Tour.mp4"
import studiovid2 from "./Videos/LUXURIOUS GYM TOUR __ MINISTRY OF FITNESS __ INTERIOR DESIGN BY AP INTERIOR STUDIO.mp4"
import cafe from "./Images/cafe.jpg"

function Studio(){
    return(
        <>
        <div id="stud-main">
            <img id="studioback" src={studback} alt=""/>
        </div>

        <div id="club-v">
            <div id="clubvidd">
                <video id="club-vid" src={studiovid1} controls muted autoPlay loop></video>
            </div>
        </div>

        <div id="read">
        <div id="repara">
            <p id="readpara">
                In our urban loft-inspired studio, the lights dim and the music amps up, creating an electrifying 
                atmosphere around our custom DOPE transformer machines. These machines are fully adjustable, 
                offering a tailored experience to match your unique needs. Our signature method combines Pilates-based 
                sequences with dynamic resistance to transform your body and mind. Guided by passionate, high-energy 
                instructors, our 50-minute classes are crafted to push you beyond your limits for maximum results. 
                With just 12 machines, each session is designed to help you exceed your goals.
            </p>
            <Link id="buttonteam" to="/5.Team">TEAM</Link>
        </div>
        </div>


        <div id="stud-space">
        <div id="sec2">
            <div id="sub2">
                <div id="sec2-1">
                    <h1 id="cap1">CLUB STUDIO</h1>
                    <p id="cap1p">
                        Our wellbeing haven was created to support our clients’ busy lifestyles. 
                        Replicating the eclectic streets of Manhattan’s Soho with a serene spa vibe, our 
                        club offers a café with coffee, custom smoothies, and work spaces. Whether it’s a 
                        business meeting over a post-workout shake or just catching up with a friend, our 
                        space will quickly become an extension of your healthy lifestyle.
                    </p>
                </div>
            </div>
            <div id="stud-sub1">
                <div id="stud-v">
                    <video id="stud-vid" src={studiovid2} controls muted autoPlay loop></video>

                </div>
            </div>
        </div>
        </div>


        <div id="stu-spa">
        <div id="stu-space1">
            <img id="loca-img1" src={cafe} alt=""/>
        </div>
        <div id="stu-space2">
            <div id="loca-data1">
                <h1 id="loca-hed">Cafe & Lounge Area:</h1>
                <p id="loca-para">
                    At our studio, we’ve thought of everything to enhance your experience with loving and energized environment. Indulge 
                    in a wide selection of freshly brewed coffee, refreshing smoothies, and premium 
                    teas to keep you energized before or after your workout.  
                    <br/>
                    <br/>
                    Need to recharge? Take 
                    advantage of our dedicated phone and laptop charging areas. Stay hydrated with unlimited 
                    access to our water fountain, ensuring you’re always fueled and refreshed.
                    <br/>
                    <br/>
                    And if you arrive without your gear, no worries! Our in-studio merch has you covered with 
                    stylish sportswear available for purchase.
                </p>
                <Link id="buttonpop" to="/4.Buy">BUY</Link>
                <Outlet/>

            </div>
        </div>
    </div>
        </>
    )
}

export default Studio