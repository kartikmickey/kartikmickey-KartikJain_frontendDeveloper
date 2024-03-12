import React from 'react'
import './Home.css';
import navimg from "../Images/navimg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import div2 from "../Images/div2.png"
import { faInstagram, faEnvelope,faPaperPlane} from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <>
    <div id='div1' >
        <div>
            <div>
                <p id='navImg'><img src={navimg} alt="Saviour" />
                Saviour</p>
            </div>
            <div id='nav'>
                <a href="">Home</a>
                <a href="">IDO</a>
                <a href="">Takenomics</a>
                <a href="">Roadmap</a>
                <a href="">Coming Soon</a>
                <a href=""><FontAwesomeIcon icon={faAngleDown} /></a>
            </div>
            <div id='btn'>
            <button >
                Connect Wallet
            </button>
            </div>
        </div>
        <h1>
        Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </h1>
    </div>
    <div id="div2">
        <div id='div2Left'>
            <h2>Introduction</h2>
            <p>
            We've all been in the mud once, and now we've decided to fight it out.<br/> 
Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! <br/>
Our mission is to empower everyone to share wealth and succeed. <br/>
<span>read more...</span>
         </p>
         <button>Documents <FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
        <div><img src={div2} alt="" /></div>
    </div>
    <div id='div3' >
            <img id='div3img' src={navimg} alt="" />
            <h2 style={{"-webkit-background-clip": "text"}} >SITEMAP</h2>
    <div id='footer'>
                <a href="">Home</a>
                <a href="">IDO</a>
                <a href="">Takenomics</a>
                <a href="">Roadmap</a>
                <a href="">Whitepaper</a>
                <a href="">Pledge</a>
                <a href="">NFT</a>
                <a href="">Games</a>
            </div>
            <div id='last'>
                <a href=""> <FontAwesomeIcon icon={faEnvelope}/></a>
                <a href=""><FontAwesomeIcon icon={faPaperPlane}/>
</a>
                <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>    
    </div>
    </>
  )
}

export default Home
