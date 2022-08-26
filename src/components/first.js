import useStore from "../store"

const FirstCounter = () => {
    const firstCounter = useStore((state) => state.firstCounter)

    const incrementFirst = useStore((state) => state.incrementFirst)

    return (
        <div>
            <h2>First Counter</h2>
            <p>The first counter is currently: {firstCounter}</p>
            <button onClick={() => incrementFirst()}>one up</button>
        </div>
    )
}

export default FirstCounter