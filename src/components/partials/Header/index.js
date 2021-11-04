import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import imgLogo from '../../../images/icons/logo.png';

function Header() {
  return (
    <>
      <HeaderArea>
        <nav>
          <div>
            <Link to="/">
              <img src={imgLogo} />
            </Link>
            <ul>
              <li>
                <Link to="/sobre">O que somos?</Link>
              </li>
              <li>
                <Link to="/eventos">Eventos disponíveis</Link>
              </li>
              <li>
                <Link to="/ferramentas">Ferramentas para o uso</Link>
              </li>
            </ul>
          </div>
          <Link to="/eventos">Assistir</Link>
        </nav>
      </HeaderArea>
    </>
  );
}

export default Header;
