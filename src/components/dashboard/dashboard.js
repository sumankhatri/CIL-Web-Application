import React from 'react';
import './dashboard.scss';
import OngoingProjects from './ongoingProjects';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { getDashboard, getDashboard1 } from '../../actions/dashboardActions';
import DashboardMenu from './dashboardMenu';
import NewsLetter from './newsLetter';
import Polling from './polling';
import UpComingEvents from './upcomingEvents';
import SideBar from './sideBar';
import ProjectModal from './projectModal';
import TechStack from './techStack'
import LabVisits from './labVisits'
import TrendingIdeas from './trendingIdeas'


class Dashboard extends React.Component {
    constructor(props) {
      super(props);
	  this.state = {
        showModal: false
      };
      this.props.getDashboard();
      this.props.getDashboard1();
      this.openProjectDetails = this.openProjectDetails.bind(this);
      this.closeProjectDetails = this.closeProjectDetails.bind(this);
   }

   openProjectDetails () {
        this.setState({showModal : true});
   }
   closeProjectDetails () {
        this.setState({showModal : false});
   }

    componentWillMount () {
      
    }

    

    render() {        
        if(!this.props.dashboard) {
            return (<div><h4>Loading Dashboard....</h4></div>);
        }
        //else if(this.props.dashboard && ){}
        return (            
            <div>
                  <DashboardMenu />                    
                  <SideBar />

                  <div className="container-fluid container-p-l">
                    <div className="row space-top">
                          <OngoingProjects projectDetails={this.openProjectDetails}/>                                      
                          <NewsLetter />
                          <TechStack />

                                  
                      </div>
                      <div className="row space-top">
                        
                        <UpComingEvents eventData={this.props.dashboard.dashboard.events}/>                        
                        <LabVisits />
                        <TrendingIdeas />
                        <Polling />
                        
                      </div>
                  </div>
                  <ProjectModal showModal={this.state.showModal} hideModal={this.closeProjectDetails} projectData={this.props.project}/>
                </div>
            
        );
        
    }

    
}

function mapStateToProps(state) {
    return {        
        dashboard: state.dashboard,
        project: state.activeProject
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getDashboard: getDashboard, getDashboard1: getDashboard1}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);