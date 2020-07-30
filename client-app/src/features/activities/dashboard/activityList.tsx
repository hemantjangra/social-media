import React from "react";
import { Row, Col } from "../../../styles/grid";
import { IActivity } from "../../../app/models/IActivity";
import {StyledTag} from '../../../styles/components/dashboard';
import { StyledActivityList, StyledActivityButton } from "../../../styles/components/styledActivityList";

interface IActivityListProps {
  activity: IActivity;
  selectedActivity: (id:string) => void;
}

const ActivityList: React.FC<IActivityListProps> = ({ activity, selectedActivity }) => {
  return (
    <StyledActivityList>
      <Row>
        <Col size={1}><h3>{activity.title}</h3></Col>
      </Row>
      <Row>
        <Col size={1}>{activity.date}</Col>
      </Row>
      <Row>
        <Col size={1}>{activity.description}</Col>
      </Row>
      <Row>
        <Col size={1}>
          {activity.city}, {activity.venue}
        </Col>
      </Row>
      <Row>
        <Col size={1}><StyledTag>{activity.category}</StyledTag></Col>
      </Row>
      <StyledActivityButton onClick={() =>selectedActivity(activity.id)} color="#02132e" floatProp="right">View</StyledActivityButton>
    </StyledActivityList>
  );
};

export default ActivityList;
