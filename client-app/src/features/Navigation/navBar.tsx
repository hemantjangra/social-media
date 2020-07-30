import React from "react";
import {Subject} from 'rxjs';

// import { ObservableService } from '../../app/utility/observableWrapper';

import { StyledNavBar } from "../../styles/components/navBar";
import { StyledButton } from "../../styles/atoms/button";
import { StyledImage } from "../../styles/atoms/StyledImage";

export interface ICreateMode{
  value: boolean
}

export const navCreateSubject = new Subject<ICreateMode>();

const NavBar: React.FC = () => {

  const publishandUpdateState = () =>{
    console.log(`message is published from Create Activity`);
    const messageToPublish: ICreateMode = {
      value: true
    };
    navCreateSubject.next(messageToPublish);
  };
  
  return (
    <StyledNavBar>
      <div>
        <StyledImage src="/assets/logo.png" alt="Soaical Media" />
      </div>
      <div>
        <ul>
          <li>Activities</li>
          <li>
            <StyledButton onClick={() => publishandUpdateState()} color='#00ff00'>Create Activity</StyledButton>
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
