import { useCallback } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";

type CounterState = {
  value: number;
};

const counterReoilState = atom<CounterState>({
  key: "counterState",
  default: { value: 0 },
});

export const useCounterState = () => {
  return useRecoilValue(counterReoilState);
};

export const useCounterMutator = () => {
  const [counter, setState] = useRecoilState(counterReoilState);

  const updateCounter = useCallback(() => {
    setState({ value: counter.value + 1 });
  }, [setState, counter.value]);

  return updateCounter;
};
