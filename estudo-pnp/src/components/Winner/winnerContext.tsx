import { usePlayerContext } from "../../states/contexts/usePlayersContextStore";

const Winner = () => {
    const { teamA, teamB } = usePlayerContext();

    let winner = "DRAW";

    if (teamA > teamB){
        winner = "TEAM A";
    }
    else if (teamA < teamB) {
        winner = "TEAM B";
    }

    return (
        <div>
            <h1>Winner</h1>
            <h4>{winner}</h4>
        </div>
    )
}

export default Winner;