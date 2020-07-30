import styled from "styled-components";

interface IStyledActivityButton {
  color: string;
  floatProp: string;
}

export const StyledActivityList = styled.div`
  background-color: #fff;
  overflow: hidden;
  border-right: 10px solid #e6ebe7;
  margin: 0 10px;
  border: 1px solid #e6ebe7;
  >div{
      margin: 10px 10px;
  }
`;

export const StyledActivityButton = styled.button`
  background-color: ${(prop) => prop.color};
  color: #fff;
  border: ${(prop: IStyledActivityButton) => prop.color};
  border-radius: 3px;
  width: auto;
  padding: 5px 20px;
  line-height: 20px;
  float: ${(prop: IStyledActivityButton) => prop.floatProp || "none"};
  margin: 0 20px 10px 0;
`;
