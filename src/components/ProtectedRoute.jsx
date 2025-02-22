// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default ProtectedRoute;