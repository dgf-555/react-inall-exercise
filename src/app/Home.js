import React from 'react';
import {Link} from 'react-router-dom';
import './home.less';


class Home extends React.Component {
  render(){
    return (
    <div className="page">
      <section id="title">
        <p>在线实用工具</p>
      </section>
      <section id="links">
        <ul>
          <li>
            <img className="image-size" src={require('../images/calculator.png')} alt="calculator" />
            <Link to="/calculator">计算器</Link>
          </li>
          <li>
            <img className="image-size" src={require('../images/timer.png')} alt="timer" />
            <Link to="/timer">倒计时器</Link>
          </li>
        </ul>
      </section>
    </div>);
  }
}

export default Home;