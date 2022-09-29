import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  color: white;
  background-color: #2563eb;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  margin-top: 10px;
  // padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 8px;
`;
