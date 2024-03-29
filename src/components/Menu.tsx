import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Template
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/form" className="nav-link px-2 link-secondary">
                Form
              </Link>
            </li>
          </ul>

          <div>
            <Link to="/queryPage">
              <button type="button" className="btn btn-outline-primary me-2">
                Query Page
              </button>
            </Link>
          </div>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
