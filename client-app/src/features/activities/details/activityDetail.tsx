import React from "react";
import { StyledImage } from "../../../styles/atoms/StyledImage";
import { Row, Col } from "../../../styles/grid";
import { StyledActivityDetail, CenterButton } from "../../../styles/components/styledActivityDetail";
import { IActivity } from "../../../app/models/IActivity";

interface IProps{
  activity: IActivity | undefined,
  setEditMode: (editable: boolean) => void;
  setActivity: (activity: IActivity | null) => void;
}

const ActivityDetail:React.FC<IProps> = ({activity, setEditMode, setActivity}) => {
  return (
    <StyledActivityDetail>
      <Row>
        <Col size={1}>
          <StyledImage src={`/assets/categoryImages/${activity?.category}.jpg`} alt=""></StyledImage>
        </Col>
      </Row>
      <Row>
  <Col size={1}>{activity?.title}</Col>
      </Row>
      <Row>
        <Col size={1}>{activity?.date}</Col>
      </Row>
      <Row>
        <Col size={1}>{activity?.description}</Col>
      </Row>
      <Row>
        <Col size={1}>
          <CenterButton onClick={() => setEditMode(true)}>Edit</CenterButton>
        </Col>
        <Col size={1}>
          <CenterButton onClick={() => setActivity(null)}>Cancel</CenterButton>
        </Col>
      </Row>
    </StyledActivityDetail>
  );
};

export default ActivityDetail;
