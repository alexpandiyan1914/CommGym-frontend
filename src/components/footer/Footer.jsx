import "./Footer.scss";

function Footer({ footerOpen, setFooterOpen }) {
  return (
    <footer className={`footer ${footerOpen ? "open" : ""}`}>
      <div className="toggle" onClick={() => setFooterOpen(!footerOpen)}>
        {footerOpen ? "▼" : "▲"}
      </div>

      {footerOpen && (
        <div className="content">
          <p>Email: alexpadiyan1914@gmail.com</p>
          <p>Made with discipline 💪</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;