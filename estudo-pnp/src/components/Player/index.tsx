interface PlayerProps {
    label: string,
    score: number,
    onDecrease: () => void,
    onIncrease: () => void
}

export const Player = ({label, score, onDecrease, onIncrease}: PlayerProps) => (
    <div>
        <h3>{label}</h3>
        <h4>{score}</h4>

        <div>
            <button
                className="m-2 pl-4 pr-4 pb-2"
                onClick={onDecrease}
            >
                -
            </button>
            <button
                className="m-2 pl-4 pr-4 pb-2"
                onClick={onIncrease}
            >
                +
            </button>
        </div>
    </div>
)