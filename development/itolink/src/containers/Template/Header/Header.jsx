import React, { Component } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import { GlobalConsumer } from '../../../context/context';

class Header extends Component {
  render(){
    return(
      <header className="headerSection">
        <div className="headerContainer">
          <div className="headerContent">
            <div className="headerBrand">
              <div className="headerBrandItem">
                <h1 className="headerBrandTitle">
                  <Link to='/'>{this.props.state.SiteTitle}</Link>
                </h1>
              </div>
            </div>
            <div className="headerNavigation">
              <ul className="Nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default GlobalConsumer(Header);