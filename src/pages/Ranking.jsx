import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const response = await axios.get('/api/rankings');
                setRankings(response.data);
            } catch (error) {
                console.error('Error fetching rankings:', error);
            }
        };
        fetchRankings();
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
                {rankings.map((ranking, index) => (
                    <tr key={ranking._id}>
                        <td>{index + 1}</td>
                        <td>
                            {ranking.user ? (
                                <Link to={`/user/${ranking.user._id}`} className="text-warning text-decoration-none">
                                    {ranking.user.username}
                                </Link>
                            ) : (
                                'Unknown Player'
                            )}
                        </td>
                        <td>{ranking.points}</td>
                        <td>{ranking.wins}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;
