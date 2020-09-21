import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import {v4 as uuid} from 'uuid';
import dayjs, {Dayjs} from 'dayjs';

import {navCreateSubject} from '../../Navigation/navBar';

import httpHelper from '../../../app/utility/httpHelper'

import {
  StyledActivityForm,
  StyledInput,
} from "../../../styles/components/styledActivityForm";
import { CenterButton } from "../../../styles/components/styledActivityDetail";
import { Row, Col } from "../../../styles/grid";
import "react-datepicker/dist/react-datepicker.css";

import { IActivity } from '../../../app/models/IActivity';



const ActivityForm: React.FC = () => {

  const [formState, updateFormState] = useState<IActivity>({id: uuid(), title: '', description: '', date: new Date(), venue: '', city: '', category: ''});

  const handleCreateMode = () =>{
    navCreateSubject.next({value: false});
  };

  const handleactivitySubmit = () =>{
    httpHelper.postRequest('https://localhost:5001/api/activity', formState).then(results => alert(results.results));
  };

  const updateFormStateItems = (event: any, key: string) =>{
    let formValues: IActivity = formState ? {...formState} : {id: uuid()};
    switch (key){
      case 'title':
        formValues.title = event.target.value;
        break;
      case 'description':
        formValues.description = event.target.value;
        break;
      case 'category':
        formValues.category = event.target.value;
        break;
      case 'date':
        console.log('date value is', dayjs(event).toISOString());
        formValues.date = event;
        break;
      case 'city':
        formValues.city = event.target.value;
        break;
      case 'venue':
        formValues.venue = event.target.value;
        break;
      default:
        return;
    }
    updateFormState(formValues);
  };

  return (
    <StyledActivityForm>
      <form onSubmit={() =>handleactivitySubmit()}>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Title" value={formState?.title} onChange={(event) => updateFormStateItems(event, 'title')} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Description" value={formState?.description} onChange={(event) => updateFormStateItems(event, 'description')} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            {/* <StyledInput type="text" placeholder="Date" value={formState?.date?.toDateString()} onChange={(event) => updateFormStateItems(event, 'date')} /> */}
            <DatePicker selected={formState?.date} onChange={(date) => updateFormStateItems(date, 'date')} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Category" value={formState?.category} onChange={(event) => updateFormStateItems(event, 'category')} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="City" value={formState?.city} onChange={(event) => updateFormStateItems(event, 'city')} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <StyledInput type="text" placeholder="Venue" value={formState?.venue} onChange={(event) => updateFormStateItems(event, 'venue')} />
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
