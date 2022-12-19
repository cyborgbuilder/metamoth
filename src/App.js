
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
import Footer from './components/Footer'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      {/* <Blank /> */}
      <SocialIcons>
      <a href='https://discord.com/'><FaDiscord style={{color: '#fff', margin: '0 5px '}}/></a> 
        <a href='https://twitter.com/j10hunter'><FaTwitter style={{color: '#fff', margin: '0 5px '}} /></a>
          <a href='https://t.me/Metamoths'><FaTelegram style={{color: '#fff', margin: '0 5px '}}/></a>
          <a href='https://www.instagram.com/Metamoths'><FaInstagram style={{color: '#fff', margin: '0 5px '}}/></a>
          

          <Button>CONNECT</Button>
        </SocialIcons>
     <Hero />

     <Story />
     
     <Begining />
     <VideoPage />
     <Roadmaps />
     <Community />
     <Website />
     <MothsMatter />
     <Website />
     <Footer />

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
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (max-width: 1200px) {
      font-size: 30px;
    }

    a{
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      &:hover{
        cursor: pointer;
        transform: scale(1.01);
      }
    }
`

const Button = styled.button`
    border: 1px solid #fff;
    height: 50px;
    outline: none;
    padding: 10px;
    font-size: 17px;
    margin-left: 20px;
    background: none;
    font-family: 'Rubik Distressed', cursive;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
      background: #fff;
      color: black;
      cursor: pointer;
    }

`

export default App;
