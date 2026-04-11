import "./Hero.scss";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

function Hero() {
  const navigate = useNavigate();

  const handleStart = () => {
    if (isLoggedIn()) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="commgym-hero">

      <h1 className="commgym-hero__title">
        Train Your <span>Communication</span><br />
        Like You Train Your Body
      </h1>

      <p className="commgym-hero__subtitle">
        Daily speaking workouts. Real-time AI feedback.
        Build confidence, remove filler words, and dominate interviews.
      </p>

      <button
        className="btn btn-success commgym-hero__cta"
        onClick={handleStart}
      >
        Start Training
      </button>

    </div>
  );
}

export default Hero;