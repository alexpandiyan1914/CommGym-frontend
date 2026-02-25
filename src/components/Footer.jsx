function Footer({ footerOpen, setFooterOpen }) {
  return (
    <footer className={`footer ${footerOpen ? "open" : ""}`}>
      
      <div className="footer-toggle" onClick={() => setFooterOpen(!footerOpen)}>
        {footerOpen ? "▼" : "▲"}
      </div>

      {footerOpen && (
        <div className="footer-content">
          <p>Email: support@commgym.ai</p>
          <p>Instagram: @commgym</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;