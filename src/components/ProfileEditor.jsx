import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const ProfileEditor = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        bio: '',
        avatar: '',
        social: { discord: '', twitter: '' }
    });

    useEffect(() => {
        if (user) {
            setFormData({
                bio: user.bio || '',
                avatar: user.avatar || '',
                social: {
                    discord: user.social?.discord || '',
                    twitter: user.social?.twitter || ''
                }
            });
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`/api/users/${user._id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            // Add success notification
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    if (!user) return <div>Please log in to edit your profile</div>;

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Bio</label>
                <textarea
                    className="form-control"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                />
            </div>

            {/* Add other form fields similarly */}

            <button type="submit" className="btn btn-warning">
                Update Profile
            </button>
        </form>
    );
};

export default ProfileEditor;