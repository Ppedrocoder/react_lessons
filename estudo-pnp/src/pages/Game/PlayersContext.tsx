import { usePlayerContext } from "../../states/contexts/usePlayersContextStore"
import { Player } from "../../components/Player";
import { PlayersProvider } from "../../states/contexts/usePlayersContextStore";
import Winner from "../../components/Winner/winnerContext";
import { Link } from "react-router-dom";

const PlayerA = () => {
    const { teamA, increaseTeamAScore, decreaseTeamAScore} = usePlayerContext();

    return (
        <Player
            label = "TEAM A"
            score={teamA}
            onDecrease={decreaseTeamAScore}
            onIncrease={increaseTeamAScore}
        />
    )

}

const PlayerB= () => {
    const { teamB, increaseTeamBScore, decreaseTeamBScore} = usePlayerContext();

    return (
        <Player
            label = "TEAM B"
            score={teamB}
            onDecrease={decreaseTeamBScore}
            onIncrease={increaseTeamBScore}
        />
    )

}

const Players = () => {
    return (
        <div className="container-md border-solid-sm mt-5 d-flex flex-colum align-items-center">
            <h3>Players</h3>
            <div className="d-flex justify-content-between">
                <PlayerA/>
                <PlayerB/>
            </div>
        </div>
    )
}

export default function ContextPLayers(){
    return (
        <div>
            <main>
                <PlayersProvider>
                    <Winner/>
                    <Players/>
                </PlayersProvider>
                <div>
                    <Link to={"/"}> Voltar </Link>
                </div>
            </main>
        </div>
    )
}