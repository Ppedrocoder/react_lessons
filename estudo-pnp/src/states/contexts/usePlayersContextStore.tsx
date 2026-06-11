import { createContext, useContext, useState } from "react";

interface PlayerContextProps {
    teamA: number,
    teamB: number,
    increaseTeamAScore: () => void,
    decreaseTeamAScore: () => void,
    increaseTeamBScore: () => void,
    decreaseTeamBScore: () => void,
}

const PlayersContext = createContext<PlayerContextProps>({} as PlayerContextProps)

const PlayersStore = ( ) => {
    const [teamA, setTeamA] = useState(0);
    const [teamB, setTeamB] = useState(0);

    return {
        teamA,
        teamB,

        increaseTeamAScore: () => setTeamA((v) =>  v + 1),
        decreaseTeamAScore: () => setTeamA((v) =>  v - 1),
        increaseTeamBScore: () => setTeamB((v) =>  v + 1),
        decreaseTeamBScore: () => setTeamB((v) =>  v - 1),
    }
}

export const PlayersProvider = ({ children }: any) => {
    return (
        <PlayersContext.Provider value={PlayersStore()}>
            {children}
        </PlayersContext.Provider>
    )
}

export const usePlayerContext = () => useContext(PlayersContext)