import useStore from "../store"

const SecondCounter = () => {
    const secondCounter = useStore((state) => state.secondCounter)

    const incrementSecond = useStore((state) => state.incrementSecond)

    return (
        <div>
            <h2>Second Counter</h2>
            <p>The Second counter is currently: {secondCounter}</p>
            <button onClick={() => incrementSecond()}>one up</button>
        </div>
    )
}

export default SecondCounter