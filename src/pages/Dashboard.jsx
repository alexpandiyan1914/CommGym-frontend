import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="cg-dashboard">

      <h2 className="cg-dashboard__title">
        Welcome Back 👋
      </h2>

      {/* Daily Task */}
      <div className="cg-dashboard__card">
        <h4>Today's Task</h4>
        <p>
          Speak for 2 minutes about:
          <strong> "Your dream career"</strong>
        </p>
      </div>

      {/* Mic Section */}
      <div className="cg-dashboard__card">
        <h4>Start Speaking 🎤</h4>
        <button className="btn btn-success">
          Start Recording
        </button>
      </div>

      {/* Feedback */}
      <div className="cg-dashboard__card">
        <h4>AI Feedback</h4>
        <p>No data yet. Start speaking!</p>
      </div>

      {/* Progress */}
      <div className="cg-dashboard__card">
        <h4>Your Progress</h4>
        <p>🔥 Streak: 3 days</p>
      </div>

    </div>
  );
}

export default Dashboard;