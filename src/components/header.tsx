import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 2rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }

  .active {
    color: red;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Todos
      </NavLink>
    </Wrapper>
  );
};
