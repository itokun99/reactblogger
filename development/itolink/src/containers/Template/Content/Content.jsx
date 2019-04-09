import React, {Component} from 'react';
import './Content.css'

const Content = (MainSection) => {
  return(
    class ParentComponent extends Component {
      render(){
        return(
          <div className="contentSection">
            <div className="contentContainer">
              <MainSection {...this.props} />
            </div>
          </div>
        );
      }
    }
  )
}


export default Content;