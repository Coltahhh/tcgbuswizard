// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) { // Destructure children properly
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Proper error state
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('/api/auth/verify', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data.user);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.error || 'Session expired');
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            setError(null);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
            throw err; // Re-throw for form handling
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setError(null);
        navigate('/login');
    };

    const value = {
        user,
        loading,
        error, // Include error in context value
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Safely render children */}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // Add prop validation
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};