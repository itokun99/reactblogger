import React, { Component } from 'react';

const SidebarWidget = (WidgetItem) => {
  return(
    class ParentComponent extends Component {
      render(){
        return(
          <div className="sidebarWidget">
            <WidgetItem {...this.props} />
          </div>
        )
      }
    }
  )
}

export default SidebarWidget;