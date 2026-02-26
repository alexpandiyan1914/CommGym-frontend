import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <h1 className="title">
        Train Your <span>Communication</span>
        <br />
        Like You Train Your Body
      </h1>

      <p>
        Daily speaking workouts. Real-time AI feedback.
        Build confidence, remove filler words,
        and dominate interviews.
      </p>

      <button className="start-btn">Start Training</button>
    </div>
  );
}

export default Hero;