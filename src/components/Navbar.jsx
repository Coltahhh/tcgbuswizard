
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            {/* ... existing nav items ... */}
            <div className="ms-auto">
                {user ? (
                    <div className="d-flex align-items-center">
                        <span className="text-white me-3">Welcome, {user.username}</span>
                        <button className="btn btn-outline-light" onClick={logout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn btn-outline-light"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
