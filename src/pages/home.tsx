import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Home = () => {
  return (
    <Wrapper>
      <h1>Hello World</h1>
    </Wrapper>
  );
};
