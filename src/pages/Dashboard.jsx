import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { useState, useRef, useEffect } from "react";
import {
  getWeekDays,
  getTodayIndex,
  getStreak
} from "../utils/streak";

function Dashboard() {
  const navigate = useNavigate();

  const weekDays = getWeekDays();
  const today = getTodayIndex();
  const streak = getStreak();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  /* CLOSE DROPDOWN WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="cg-dashboard">

      {/* HEADER */}
      <div className="cg-header">
        <h2>Comm<span>Gym</span></h2>

        <div className="cg-profile" ref={dropdownRef}>

          <div
            className="cg-profile__trigger"
            onClick={() => setOpen(!open)}
          >
            <span>{localStorage.getItem("username") || "Alex"}</span>
            <div className="cg-avatar"></div>
          </div>

          {open && (
            <div className="cg-dropdown">

              <div
                className="cg-dropdown__item"
                onClick={() => navigate("/profile")}
              >
                👤 Profile
              </div>

              <div
                className="cg-dropdown__item logout"
                onClick={handleLogout}
              >
                🚪 Logout
              </div>

            </div>
          )}

        </div>
      </div>

      {/* STREAK */}
      <div className="cg-streak">
        🔥 <span>{streak}</span> Day Streak
      </div>

      {/* WEEK TRACKER */}
      <div className="cg-week">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`cg-day 
              ${index === today ? "active" : ""}
              ${index < today ? "completed" : ""}
            `}
          >
            {day}
          </div>
        ))}
      </div>

      {/* MAIN WORKOUT CARD */}
      <div className="cg-workout-card">
        <div>
          <h3>Today’s Workout</h3>
          <p>{getWorkoutName(today)}</p>
        </div>

        <button
          className="btn btn-success"
          onClick={() => navigate("/workout")}
        >
          Start Workout →
        </button>
      </div>

      {/* INSIGHTS */}
      <div className="cg-insights">

        <div className="cg-card protein">
          <h4>📰 Protein</h4>
          <p>Learn powerful answer structures from top performers.</p>
        </div>

        <div className="cg-card creatine">
          <h4>🎥 Creatine</h4>
          <p>Analyze high-impact communication breakdowns.</p>
        </div>

      </div>

    </div>
  );
}

function getWorkoutName(i) {
  const list = [
    "Confidence Training",
    "Fluency Control",
    "Clarity Structuring",
    "Interview Simulation",
    "Pace Control",
    "Thinking Fast",
    "Performance Test"
  ];
  return list[i];
}

export default Dashboard;