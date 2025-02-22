import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Ranking from './pages/Ranking';
import Prizing from './pages/Prizing';
import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/prizing" element={<Prizing />} />
                <Route path="/user/:userId" element={<Profile />} />
                <Route path="/tournaments/:tournamentId" element={<TournamentBracket />} />
            </Routes>
        </Router>
    );
}

export default App;