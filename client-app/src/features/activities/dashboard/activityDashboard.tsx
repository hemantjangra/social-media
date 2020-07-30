import React, { useState, useEffect } from "react";

import ActivityList from "./activityList";
import ActivityDetail from "../details/activityDetail";
import ActivityForm from "../details/activityForm";

import { IActivity } from "../../../app/models/IActivity";
import { IHttpWrapper } from "../../../app/models/IHttpWrapper";

import {navCreateSubject} from '../../Navigation/navBar';

import httpWrapper from "../../../app/utility/httpHelper";

import { StyledActivityDashboard } from "../../../styles/components/dashboard";
import { Grid, Row, Col } from "../../../styles/grid";


const ActivityDashboard: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const [activity, selectedActivity] = useState<IActivity|null>();

  const [editMode, setEditMode] = useState(false);

  const getActivities = () => {
    httpWrapper
      .getRequest("http://localhost:5000/api/activity")
      .then((data: IHttpWrapper) => setActivities(data.results))
      .catch((err: any) => {
        throw err;
      });
  };
  useEffect(getActivities, []);

  const handleActivity = (id: string) => {
    navCreateSubject.next({value:false});
    selectedActivity(activities.find((activity) => activity.id === id));
  };

  const handleEditMode = (isEditable: boolean) =>{
    setEditMode(true);
  };

  const setSelectedActivity = (activity: IActivity | null) => {
    selectedActivity(activity);
  }

  console.log(`I am activity dashboard`);

  navCreateSubject.subscribe({
    next: ({value}) => setEditMode(value),
    error: (err) => console.log(`error occured while subscribing to ICreateMode observable`),
    complete: () => console.log(`observable of type ICreateMode has been completed`)
  });

  return (
    <StyledActivityDashboard>
      <Grid>
        <Row>
          <Col size={2}>
            {activities.map((activity) => (
              <ActivityList
                key={activity.id}
                activity={activity}
                selectedActivity={handleActivity}
              />
            ))}
          </Col>
          <Col size={1}>
            {activity && !editMode && <ActivityDetail activity={activity} setEditMode={handleEditMode} setActivity={setSelectedActivity} />}
            {editMode && <ActivityForm/>}
          </Col>
        </Row>
      </Grid>
    </StyledActivityDashboard>
  );
};

export default ActivityDashboard;
