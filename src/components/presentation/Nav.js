import React from "react";
import styled from "@emotion/styled";

function Nav() {
  return (
    <NavStyle>
      <a href="/">Home</a>
    </NavStyle>
  );
}

export default Nav;

//styles
const NavStyle = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #333;
  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    background-color: #ddd;
    color: black;
  }
`;
