import {Link, Outlet } from 'react-router-dom'
import './4.Buy.css'
import backimg from "./Images/backimg.jpg"

function Buy(){
    return(
        <>
        <div id="buymain">
            <img id="buyimg" src={backimg} alt=""/>
        </div>


        <div id="fmain6">
        <div id="fmainhalf1">
            <h1 id="fhed">DOPE FITNESS CLASS PACKS</h1>
            <p id="fp">
                DOPE FITNESS, the best version of yourself, one class at a time. Select the best package for your transformation goals.
            </p>
                <br/>
                <br/>
                <ul>
                    <li id="fpli">Expiry date starts from first booking.</li>
                    <li id="fpli"> Class packs are not refundable, non-shareable and non-transferable with the exception of the 40 & 100 class pack, which can be shared with one named person by request.</li>
                </ul>
            
        </div>
        <div id="fmainhalf2">
            <div id="boox1">
                <h2 id="booxhed">100 CLASS PACK</h2>
                <p id="fpara">12 months expiry</p>
                <h2 id="booxpara">30,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox1">
                <h2 id="booxhed">40 CLASS PACK</h2>
                <p id="fpara">12 months expiry</p>
                <h2 id="booxpara">25,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">20 CLASS PACK</h2>
                <p id="fpara">6 months expiry</p>
                <h2 id="booxpara">18,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">10 CLASS PACK</h2>
                <p id="fpara">3 months expiry</p>
                <h2 id="booxpara">12,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">5 CLASS PACK</h2>
                <p id="fpara">42 days expiry</p>
                <h2 id="booxpara">8,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">SINGLE DROP IN SESSION</h2>
                <p id="fpara">14 days expiry</p>
                <h2 id="booxpara">2,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
        </div>
    </div>



    <div id="fmain6">
        <div id="fmainhalf1">
            <h1 id="fhed">DOPE FITNESS COMMITMENT MEMBERSHIPS *BEST VALUE*</h1>
            <p id="fp">DOPE FITNESS the Best Version of Yourself. Choose Membership Options for your Fitness Goals.</p>
            <h2 id="fhed2">Membership perks include:</h2>
             <ul>
                <li id="fpli">Expiry date starts from first booking.</li>
                <li id="fpli"> Class packs are not refundable, non-shareable and non-transferable with the exception of the 40 & 100 class pack, which can be shared with one named person by request.</li>
            </ul>
            <h2 id="fhed2">General Membership rules apply:</h2>
            <ul>
                <li id="fpli">Unused credits do not carry over to the next month</li>
                <li id="fpli">Minimum 3 months commitment on all monthly memberships</li>
                <li id="fpli">All memberships require 30 days notice for termination. Other Terms and Conditions apply</li>
            </ul>
        </div>
        <div id="fmainhalf2">
            <div id="boox1">
                <h2 id="booxhed">ANNUAL MEMBERSHIP</h2>
                <p id="fpara">Renews every 12 month</p>
                <h2 id="booxpara">50,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox1">
                <h2 id="booxhed">UNLIMITED MEMBERSHIP</h2>
                <p id="fpara">Renews every month</p>
                <h2 id="booxpara">33,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">DEFINE 12 CLASS MONTHLY</h2>
                <p id="fpara">Renews every month</p>
                <h2 id="booxpara">15,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">DEFINE 8 CLASS MONTHLY</h2>
                <p id="fpara">Renews every month</p>
                <h2 id="booxpara">10,000/-</h2>
                <Link id="payment" to="">BUY</Link>
            </div>
            <div id="boox">
                <h2 id="booxhed">MAINTAIN 4 CLASS MONTHLY</h2>
                <p id="fpara">Renews every month</p>
                <h2 id="booxpara">5,000/-</h2>
                <Link id="payment" to="">BUY</Link>
                <Outlet/>
            </div>
            
        </div>
    </div>



    <div id="fmain6-3">
        <div id="memdetail">
            <div id="memhed">
                <h1 id="memhedline">MEMBERSHIP DETAILS</h1>
            </div>
            <div id="memdata">
                <div id="memdata1">
                    <h2 id="mem-hed">Membership Types</h2>
                    <p id="mem-p">
                        We have various memberships types to suit your requirement. 
                        You will get the most value from fitness when it's part of your 
                        everyday life. That's why we offer a 6-month membership as standard. 
                        We also have short-term options available to get started with. 
                        Please click here to for membership types and prices.
                    </p>
                </div>
                <div id="memdata2">
                    <h2 id="mem-hed">Ways to pay</h2>
                    <p id="mem-p">
                        You can pay for your membership as a monthly recurring payment or 
                        lumpsum all at once. You can also choose the date you want your 
                        membership to start, so you’ll only pay from your first session onwards."
                    </p>
                </div>
                <div id="memdata3">
                    <h2 id="mem-hed">Recommend us to a friend</h2>
                    <p id="mem-p">
                        Training with a friend is fun. And evidence shows that it keeps you motivated 
                        too. If a friend joins on your recommendation, you and your new training buddy 
                        will both benefit. Ask a member of the team for details.
                    </p>
                </div>
            </div>
            

        </div>
    </div>
        </>
    )
}

export default Buy