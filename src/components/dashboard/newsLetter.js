import React, { Component } from 'react';


export default class NewsLetter extends Component {
    open () {
        window.open('/pdf/Newsletter_feb.pdf', '_blank', 'fullscreen=yes'); return false;
    }
    render() {        
        return (            
            
            <div className="col-md-3">
                                <div className="panel dashboard-panel panel-primary">
                                  <div className="panel-heading dashboard CIL-font">Newsletter</div>
                                  <div className="panel-body">
                                      
                                    <a href="#" onClick={this.open} className="cilFont14"><img src="./assets/images/image2.jpg" alt="BitCoin" width="40" height="38"></img>Newsletter: February 2017</a>            

                                  </div>
                              </div>
                          </div>
            
        );
    }

    
}