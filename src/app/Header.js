import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render(){
        return(  <header>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/calculator">在线计算器</Link></li>
              <li><Link to="/timer">在线倒计时器</Link></li>
            </ul>
          </header>);
    }
}
export default Header;