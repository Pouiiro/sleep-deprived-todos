import { styled } from "styled-components";

import { Todos } from "@/components/todos";

const Wrapper = styled.div`
  display: flex;
  height: 100vw;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const List = () => {
  return (
    <div>
      <Wrapper>
        <Todos />
      </Wrapper>
    </div>
  );
};
