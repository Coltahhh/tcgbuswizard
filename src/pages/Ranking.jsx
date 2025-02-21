import { useEffect, useState } from 'react';
import { getRankings } from '../api';

const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        getRankings()
            .then(response => setRankings(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Player Rankings</h2>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Points</th>
                    <th>Wins</th>
                </tr>
                </thead>
                <tbody>
                {rankings.map((player, index) => (
                    <tr key={player._id}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.points}</td>
                        <td>{player.wins}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;