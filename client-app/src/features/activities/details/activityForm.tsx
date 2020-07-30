import React from "react";

import {navCreateSubject} from '../../Navigation/navBar';

import {
  StyledActivityForm,
  StyledInput,
} from "../../../styles/components/styledActivityForm";
import { CenterButton } from "../../../styles/components/styledActivityDetail";
import { Row, Col } from "../../../styles/grid";

const ActivityForm: React.FC = () => {

  const handleCreateMode = () =>{
    navCreateSubject.next({value: false});
  };
  return (
    <StyledActivityForm>
      <form>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Title" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Description" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Date" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Category" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="City" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Venue" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <CenterButton>Submit</CenterButton>
          </Col>
          <Col size={1}>
            <CenterButton onClick={() => handleCreateMode()}>Cancel</CenterButton>
          </Col>
        </Row>
      </form>
    </StyledActivityForm>
  );
};

export default ActivityForm;
