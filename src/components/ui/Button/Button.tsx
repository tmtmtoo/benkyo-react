import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  line-height: 20px;
  min-width: 100px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  background-color: #eee;

  &:active {
    transform: translateY(2px);
  }
`;
