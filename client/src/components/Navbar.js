import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkStyle = {
        color: "#000",
        fontSize: "1.5rem",
        fontWeight: "bold",
        margin: "0 0.5rem",
    }

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ width: "100%", backgroundColor: "#fff" }}
        >
            <Container className="d-flex justify-content-between">
                <Link className="navbar-brand" to="/" style={linkStyle}>
                    FitSquad
                </Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/schedule" style={linkStyle}>
                            Schedule
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={linkStyle}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={linkStyle}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register" style={linkStyle}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;
