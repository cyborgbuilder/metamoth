
import './App.css';
import Begining from './components/Begining';
import Blank from './components/Blank';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Story from './components/Story';
import Community from './components/Community'
import Website from './components/Website';
import MothsMatter from './components/MothsMatter';
import Game from './components/Game';
import styled from 'styled-components';
import VideoPage from './components/VideoPage';
import Roadmaps from './components/Roadmap';
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      {/* <Blank /> */}
      <SocialIcons>
        <FaDiscord style={{color: 'white', margin: '0 5px '}}/>
          <FaTwitter style={{color: 'white', margin: '0 5px '}} />
          <FaTelegram style={{color: 'white', margin: '0 5px '}}/>
          <FaInstagram style={{color: 'white', margin: '0 5px '}}/>
          <FaPinterest style={{color: 'white', margin: '0 5px '}}/>         
          <FaFacebook style={{color: 'white', margin: '0 5px '}}/>

          <Button>CONNECT</Button>
        </SocialIcons>
     <Hero />

     <Story />
     
     <Begining />
     <VideoPage />
     <Roadmaps />
     <Community />
     <Website />
     {/* <MothsMatter /> */}

    </div>
  );
}

const SocialIcons = styled.div`
    position: fixed;
    top: 0%;
    right: 1%;
    display: flex;
    z-index: 1000;
    display: flex;
    font-size: 45px;
    padding: 10px 0;

    @media only screen and (max-width: 1200px) {
      font-size: 30px;
    }
`

const Button = styled.button`
    border: 1px solid #fff;
    outline: none;
    padding: 10px;
    font-size: 17px;
    margin-left: 20px;
    background: none;
    font-family: 'Rubik Distressed', cursive

`

export default App;
