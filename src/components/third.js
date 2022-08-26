import useStore from "../store"

const ThirdCounter = () => {
    const thirdCounter = useStore((state) => state.thirdCounter)

    const incrementThird = useStore((state) => state.incrementThird)

    return (
        <div>
            <h2>Third Counter</h2>
            <p>The third counter is currently: {thirdCounter}</p>
            <button onClick={() => incrementThird()}>one up</button>
        </div>
    )
}

export default ThirdCounter