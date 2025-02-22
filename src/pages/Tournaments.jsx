import { useEffect, useState } from 'react';
import TournamentCard from '../components/TournamentCard';
import { getTournaments } from '../api';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        getTournaments()
            .then(response => setTournaments(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {tournaments.map(tournament => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default Tournaments;
