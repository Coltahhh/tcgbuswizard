import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const TournamentBracket = () => {
    const { tournamentId } = useParams();
    const [tournament, setTournament] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const response = await axios.get(`/api/tournaments/${tournamentId}`);
                setTournament(response.data);
            } catch (error) {
                console.error('Error fetching tournament:', error);
            } finally {
                setLoading(false);
            }
        };

        if (tournamentId) {
            fetchTournament();
        }
    }, [tournamentId]);

    if (loading) return <div>Loading bracket...</div>;
    if (!tournament) return <div>Tournament not found</div>;

    return (
        <div className="bracket">
            {/* Render bracket using tournament data */}
        </div>
    );
};
TournamentBracket.propTypes = {
    tournamentId: PropTypes.string.isRequired
};
