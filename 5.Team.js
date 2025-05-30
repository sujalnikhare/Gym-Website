import './5.Team.css'
import { Link, Outlet } from "react-router-dom";
import TeamBanner from "./Images/team banner.jpg"
import TeamSaket from "./Images/Team Saket.jpg"
import MihirPawaskar from "./Images/TEAM MIHIR.jpg"
import RohitChauhan from "./Images/TEAM Rohit Chauhan.jpg"
import MohitChauhan from "./Images/TEAM MOHIT.jpg"
import IshaanThakur from "./Images/TEAM Ishaan Thakur.jpg"
import SouravRajput from "./Images/TEAM Sourav Singha Rajput.jpg"
import JasonBjarnson from "./Images/TEAM Jason Bjarnson.jpg"
import MohitSikarwar from "./Images/TEAM Mohit Sikarwar.jpg"
import KartikRana from "./Images/TEAM KARTIK RANA.jpg"
import Shadman from "./Images/TEAM Shadman.jpg"
import ShreyGupta from "./Images/TEAM Shrey Gupta.jpg"
import AdityaMisra from "./Images/TEAM Aditya Misra.jpg"


function Team(){
    return(
        <>
        <div id="team-main">
            <h1 id="team">TEAM MEMBERS</h1>
            <img id="teamback" src={TeamBanner} alt=""/>
        </div>

        <div id="team-space">
        <div id="team-img1">
            <div id="team-img">
                <img id="team-id" src={TeamSaket} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/saketgokhale/"><h2 id="prof">Saket Gokhale</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={MihirPawaskar} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/mihirlifts/"><h2 id="prof">Mihir Pawaskar</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={RohitChauhan} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/trainwithrc/"><h2 id="prof">Rohit Chauhan</h2></Link>
                <Outlet/>
            </div>
        </div>
        </div>


        <div id="team-space">
        <div id="team-img1">
            <div id="team-img">
                <img id="team-id" src={MohitChauhan} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/mohitchauhan__/"><h2 id="prof">Mohit Chauhan</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={IshaanThakur} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/ishaanthakurr/"><h2 id="prof">Ishaan Thakur</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={SouravRajput} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/singha__10/"><h2 id="prof">Sourav Rajput</h2></Link>
                <Outlet/>
            </div>
        </div>
        </div>


        <div id="team-space">
        <div id="team-img1">
            <div id="team-img">
                <img id="team-id" src={JasonBjarnson} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/bjarnson_fitness/"><h2 id="prof">Jason Bjarnson</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={MohitSikarwar} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/dr.destruction_/"><h2 id="prof">Mohit Sikarwar</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={Shadman} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/shadman_shadyyy/"><h2 id="prof">Shadman</h2></Link>
                <Outlet/>
            </div>
        </div>
        </div>


        <div id="team-space">
        <div id="team-img1">
            <div id="team-img">
                <img id="team-id" src={KartikRana} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/kartikranaaa/"><h2 id="prof">Kartik Rana</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={ShreyGupta} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/shreyygupta/"><h2 id="prof">Shrey Gupta</h2></Link>
            </div>
        </div>
        <div id="team-img2">
            <div id="team-img">
                <img id="team-id" src={AdityaMisra} alt=""/>
            </div>
            <div id="id-name">
                <Link id='teamlink' to="https://www.instagram.com/adityaa.lifts/"><h2 id="prof">Aditya Misra</h2></Link>
                <Outlet/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Team