import React, {Component} from 'react';
import styled from 'styled-components';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';
import classes from './Activities.css';

class activities extends Component{  
    
    constructor(props){
        super(props);
        this.state = {
            currentActivity: 'Technical',
            activityType : ["Technical","School","Extra Curricular"],
            activitiesList: [
                {'Technical': [
                    "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest) among 6000 students.",
                    "Won Inception 3.1 organized by ACM NIT-Surat",
                    "Won Codewars organized by Hertz SVNIT.",
                    "ABC" ] 
                }
                , { "School":[
                    "School 1",
                    "School 2",
                    "Won Codewars organized by Hertz SVNIT.",
                    "ABC" ]
                }, {"Extra Curricular": [
                    "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest) among 6000 students.",
                    "Won Inception 3.1 organized by ACM NIT-Surat",
                    "Won Codewars organized by Hertz SVNIT.",
                    "ABC" ]
                }
            ],
        }
    }

    changeActivity = (id)=>{
        // const curActivity = this.state.activities[0];
        // console.log( curActivity);
        // const listToDisplay = curActivity.activitiesList;
        // console.log(listToDisplay);
    }

    render(){       

        if(this.state.currentActivity === null) 
            this.setState({currentActivity:'Technical'});
        let curActivitiesList = this.state.activitiesList[this.state.currentActivity];
        if(curActivitiesList)
            console.log(curActivitiesList);

        return (
            <SectionContainer title="Activities"> 
                <article className={classes.Activities}>

                    <section className={classes.ActivityTypeContainer}>
                        {this.state.activityType.map(activity => {
                            return (
                                    <div className={classes.ActivityType} 
                                        onClick={() => this.changeActivity(activity.id)} 
                                        key={activity}> 
                                        {activity} </div>
                            );
                        })}
                    </section>

                    <section className={classes.ActivitiesListContainer}>
                        {curActivitiesList}
                        {/* {curActivitiesList.map(activityList=>{
                            return <div className={classes.ActivityList}>{activityList}</div>
                        }) }                     */}
                    </section>

                </article>
            </SectionContainer> 
        );
    }
}

export default activities;