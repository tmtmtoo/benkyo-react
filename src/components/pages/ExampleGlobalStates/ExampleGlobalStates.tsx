import styled from "styled-components";
import {
  useCounterState,
  useCounterMutator,
} from "../../../globalStates/counterState";
import { Button } from "../../ui/Button";
import { Page } from "../../ui/Page";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const ExampleGlobalStates = () => {
  const counter = useCounterState();
  const counterMutator = useCounterMutator();

  return (
    <Page showFooter>
      <Wrapper>
        <p>{counter.value}</p>
        <Button onClick={counterMutator}>カウントアップ</Button>
      </Wrapper>
    </Page>
  );
};
