import React from 'react';
import { Link } from 'react-router-dom';
import { HomeArea } from './styled';
import bannerMP4 from '../../images/banner.mp4';

function Home() {
  return (
    <>
      <HomeArea>
        <h1>To Developer</h1>
        <Link to="/eventos">Começar</Link>
        <div>
          <video autoPlay muted playsInline loop>
            <source src={bannerMP4}></source>
          </video>
        </div>
      </HomeArea>
    </>
  );
}
export default Home;
