function Navbar({ setView }) {
    return (
        <nav className="navbar">
            <h2 className="logo">Comm<span>Gym</span></h2>

            <div className="nav-links">
                <button onClick={() => setView("home")}>Home</button>
                <button onClick={() => setView("about")}>About</button>
            </div>

            <div className="login-btn">
                <button onClick={() => window.location.href = "/login"}>
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;