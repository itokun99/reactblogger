import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render(){
    return(
      <footer className="footerSection">
        <div className="footerContainer">
          <div className="footerContent">
            <div className="copyRightHolder">
              <p>@Copyright by Code Pelajar since 2019</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;