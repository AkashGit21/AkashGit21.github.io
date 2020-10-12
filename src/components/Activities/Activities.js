import React, {Component} from 'react';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';
import classes from './Activities.css';
import { FaRegHandPointRight } from 'react-icons/fa';

class activities extends Component{  
    
    constructor(props){
        super(props);
        this.state = {
            currentActivity: null,
            activitiesType: ['Technical','School','ExtraCurricular'],
            activitiesList: {
                "Technical": [
                    "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest)",
                    "Won Inception 3.1 organized by ACM NIT-Surat",
                    "Won Codewars organized by IEEE Students Forum at SVNIT",
                    "Solved more than 400 problems on different platforms", 
                ],  
                "School":[
                    "Participated in Inter-School Quiz organized by St. John's Society",
                    "Achieved ranks for three cosecutive years in Spelling Bee Copetition from grade V to VIII",
                    "Participated in Inter-School Cultural Meet organized by St. John's Society",
                ] ,
                "ExtraCurricular": [
                    "Volunteered for Surat Night Marathon 2018",
                    "Volunteered for District Games at Special Olympics Bharat in 2014",
                     ] ,
            }
        }
    }


    changeActivity = (id)=>{
        this.setState({currentActivity:id}); 
    }

    render(){    

        let listToDisplay = (<div></div>);
        let curActivity = null;

        if(this.state.currentActivity === null )
            this.setState({currentActivity:'Technical'});

        if(this.state.currentActivity!==null && this.state.currentActivity!==curActivity ){
            curActivity = this.state.currentActivity;

            let index=0;
            listToDisplay = this.state.activitiesList[curActivity].map(item =>{
                return (<div className={classes.ActivityList} key={curActivity + (index++)}> {item} </div>)
            })
        }

        return (
            <SectionContainer title="Activities"> 
                <article className={classes.Activities}>
                    <section className={classes.ActivityTypeContainer}>
                        {this.state.activitiesType.map(activity=>{
                            return (
                                <div className={classes.ActivityType}
                                    onClick={() => this.changeActivity(activity)}
                                    key={activity}> &nbsp; <FaRegHandPointRight/> &nbsp; {activity} </div>
                            )
                        })
                        }
                    </section>

                    <section className={classes.ActivitiesListContainer}> {listToDisplay} </section>

                </article>
            </SectionContainer> 
        );
    }
}

export default activities;