import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 10px;
`;
export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 10px;
`;
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px green solid;
  padding: 10%;
  border-radius: 20px;

  .checkbox-wrapper-60 input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }
  .checkbox-wrapper-60 *,
  .checkbox-wrapper-60 ::after,
  .checkbox-wrapper-60 ::before {
    box-sizing: border-box;
  }
  .checkbox-wrapper-60 {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: flex-start;
    align-items: center;

    span {
      margin-left: 10px;
      font-weight: 400;
      font-size: 20px;
    }
  }
  .checkbox-wrapper-60 .check {
    width: 50px;
    height: 50px;
    position: absolute;
    opacity: 0;
  }
  .checkbox-wrapper-60 .label svg {
    vertical-align: middle;
  }
  .checkbox-wrapper-60 .path1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: 0.5s all;
  }
  .checkbox-wrapper-60 .check:checked + label svg g path {
    stroke-dashoffset: 0;
  }
`;
export const TodoTitle = styled.span<{ checked: boolean }>`
  color: ${({ checked }) => (checked ? "gray" : "white")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;
