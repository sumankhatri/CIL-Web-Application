import React, { Component } from 'react';


export default class TrendingIdeas extends Component {
    
    render() {
        var jumboBg= { backgroundImage: 'url(./assets/images/ideas.jpg)' };        
        return (            
            
            <div className="col-md-3" >
                                <div className="panel dashboard-panel panel-primary">
                                  <div className="panel-heading dashboard CIL-font">Trending Ideas</div>
                                  <div className="panel-body trend-ideas" style={jumboBg}>
                                     <div className="ideas-content"> 
                                        TrendingIdeas
                                     </div>

                                  </div>
                              </div>
                          </div>
            
        );
    }

    
}