import React, { Component } from 'react';

class Wizard extends Component {



  render() {
   
  
    return (
      <li className={`card ${this.props.wizardObj.house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3></h3>
              </div>
              <div className="border">

                
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name"></p>
              <p className="description">Wand: </p>
              <button >
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
