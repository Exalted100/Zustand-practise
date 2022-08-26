import renderer from "react-test-renderer";
import {render, screen} from '@testing-library/react'
import create from "./tests";
// import create from "zustand";
import { useEffect } from "react";

const useStore = create((set) => ({
    counterDisplay: "first",
    displayAnotherCounter: (counter) => {
      set((state) => ({ counterDisplay: counter }));
    },
    firstCounter: 0,
    incrementFirst: () =>
      set((state) => ({ firstCounter: state.firstCounter + 1 })),
    restartFirst: () => set({ firstCounter: 0 }),
    secondCounter: 0,
    incrementSecond: () =>
      set((state) => ({ secondCounter: state.secondCounter + 1 })),
    thirdCounter: 0,
    incrementThird: () =>
      set((state) => ({ thirdCounter: state.thirdCounter + 1 })),
  }));

function TestComponent() {
    const counterDisplay = useStore((state) => state.counterDisplay)

    return <div>{counterDisplay}</div>
  }

function SecondComponent() {
    const counterDisplay = useStore((state) => state.counterDisplay)
    const displayAnotherCounter = useStore((state) => state.displayAnotherCounter)
    useEffect(() => displayAnotherCounter("second"), [displayAnotherCounter])
    return <div>{counterDisplay}</div>
}

it("changes the state as expected", () => {

    render(<SecondComponent />)
    const second = screen.getByText("second")
    expect(second).toBeInTheDocument();
    // expect(screen.getByRole('heading',{level:1})).toBeInTheDocument()
    // const component = renderer.create(<TestComponent />)
    // const another = renderer.create(<p>Text</p>)
    // console.log(another)
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    // expect(counterDisplay).toEqual('first');
});

it("initializes with first", () => {
    render(<TestComponent />)

    const first = screen.getByText("first")
    expect(first).toBeInTheDocument();
})