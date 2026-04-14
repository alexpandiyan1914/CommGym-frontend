import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { incrementStreak, getTodayIndex } from "../utils/streak";
import "./Workout.scss";

function Workout() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [time, setTime] = useState(60);

  const dayIndex = getTodayIndex();

  const startRecording = () => {
    setIsRecording(true);

    let countdown = 60;
    const timer = setInterval(() => {
      countdown--;
      setTime(countdown);

      if (countdown === 0) {
        clearInterval(timer);
        setIsRecording(false);
      }
    }, 1000);
  };

  const handleSubmit = () => {
    incrementStreak();
    navigate("/dashboard");
  };

  return (
    <div className="cg-workout">

      {/* Header */}
      <div className="cg-workout__header">
        <h2>Today's Workout</h2>
        <p>{getWorkoutName(dayIndex)}</p>
      </div>

      {/* Main Card */}
      <div className="cg-workout__card">

        <h3>🎯 Task</h3>
        <p>{getWorkoutTask(dayIndex)}</p>

        {/* Timer */}
        <div className="cg-timer">
          ⏱ {time}s
        </div>

        {/* Controls */}
        <div className="cg-controls">

          {!isRecording ? (
            <button
              className="btn btn-success"
              onClick={startRecording}
            >
              🎤 Start Speaking
            </button>
          ) : (
            <button className="btn btn-danger">
              Recording...
            </button>
          )}

          <button
            className="btn btn-light"
            onClick={handleSubmit}
          >
            Submit Workout
          </button>

        </div>

      </div>

    </div>
  );
}

/* Workout Names */
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

/* Workout Tasks */
function getWorkoutTask(i) {
  const tasks = [
    "Speak about yourself for 60 seconds without stopping.",
    "Talk on a random topic avoiding filler words.",
    "Explain a project with proper structure.",
    "Answer: Why should we hire you?",
    "Speak slowly (130–160 WPM).",
    "React instantly to a random question.",
    "Full mock interview (3 questions)."
  ];
  return tasks[i];
}

export default Workout;