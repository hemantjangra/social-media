import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #02132e;
  display: flex;
  justify-content:space-between;
  color: #fff;
  > div {
    margin: 0 50px;
    > img {
      max-height: 100%;
    }
    > ul {
      display: flex;
      > li {
        list-style: none;
        margin: 15px;
      }
    }
  }
`;
