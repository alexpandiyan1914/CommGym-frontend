import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { getWeekDays, getTodayIndex, getStreak } from "../utils/streak";

function Dashboard() {
  const navigate = useNavigate();

  const days = getWeekDays();
  const todayIndex = getTodayIndex();
  const streak = getStreak();

  return (
    <div className="cg-dashboard">

      {/* Top Bar */}
      <div className="cg-topbar">
        <h2 className="cg-logo">Comm<span>Gym</span></h2>

        <div className="cg-profile">
          <span className="cg-profile__name">Alex</span>
          <div className="cg-profile__avatar"></div>
        </div>
      </div>

      {/* Streak */}
      <div className="cg-streak-box">
        🔥 {streak} Day Streak
      </div>

      {/* Week Days */}
      <div className="cg-week">
        {days.map((d, i) => (
          <div
            key={i}
            className={`cg-day 
              ${i === todayIndex ? "active" : ""}
              ${i < todayIndex ? "completed" : ""}
            `}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Today's Workout */}
      <div className="cg-workout-card">
        <h3>Today’s Workout</h3>
        <p>{getWorkoutName(todayIndex)}</p>

        <button
          className="btn btn-success"
          onClick={() => navigate("/workout")}
        >
          Start Workout
        </button>
      </div>

      {/* Knowledge Section */}
      <div className="cg-content">
        <div className="cg-box">
          <h4>📰 Protein</h4>
          <p>Learn how top speakers structure answers.</p>
        </div>

        <div className="cg-box">
          <h4>🎥 Creatine</h4>
          <p>Watch high-impact communication breakdowns.</p>
        </div>
      </div>

    </div>
  );
}

function getWorkoutName(index) {
  const list = [
    "Confidence Training",
    "Fluency Control",
    "Clarity Structuring",
    "Interview Simulation",
    "Pace Control",
    "Thinking Fast",
    "Performance Test"
  ];
  return list[index];
}

export default Dashboard;