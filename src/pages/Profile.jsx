import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { getStreak } from "../utils/streak";

function Profile() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Alex";
  const email = localStorage.getItem("email") || "alex@email.com";
  const streak = getStreak();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="cg-profile-page">

      <div className="cg-profile-card">

        {/* Avatar */}
        <div className="cg-profile-avatar">
          {username.charAt(0)}
        </div>

        {/* Info */}
        <h2>{username}</h2>
        <p>{email}</p>

        {/* Stats */}
        <div className="cg-profile-stats">
          <div>
            <h3>{streak}</h3>
            <span>Day Streak</span>
          </div>

          <div>
            <h3>Level 1</h3>
            <span>Communicator</span>
          </div>
        </div>

        {/* Actions */}
        <div className="cg-profile-actions">
          <button
            className="btn btn-success"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>

    </div>
  );
}

export default Profile;