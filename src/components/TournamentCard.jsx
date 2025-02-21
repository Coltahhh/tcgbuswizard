const TournamentCard = ({ tournament }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card bg-secondary text-white">
                <div className="card-body">
                    <h5 className="card-title">{tournament.name}</h5>
                    <p className="card-text">{new Date(tournament.date).toLocaleDateString()}</p>
                    <p className="card-text">{tournament.participants.length} Participants</p>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;