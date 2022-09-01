import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Badge } from "@mui/material";

const NavBar1 = () => {
  const PresonIcon = <PermIdentityOutlinedIcon />;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="container-flud sticky-top"
      style={{
        backgroundColor: "teal",
        backgroundImage: "linear-gradient(to right, teal ,teal,#006680 )",
      }}
    >
      {/**   backgroundImage:
          "linear-gradient(to right, #572d34 ,#572d34 ,#572d34 , #5f3e43 , #63464b )",
      */}
      <Container className="">
        <Navbar.Brand>
          <img src={Logo} alt="" width="30" height="24" />
        </Navbar.Brand>
        <Navbar.Brand href="/">PN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />

          <Nav>
            <Link
              className="m-2"
              to=""
              style={{ color: "white", textDecoration: "none" }}
            >
              EN
            </Link>
            <Link
              className="m-2"
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              className="m-2"
              to="/Categories"
              style={{ color: "white", textDecoration: "none" }}
            >
              Categoris
            </Link>
            <Link
              className="m-2"
              to="/About us"
              style={{ color: "white", textDecoration: "none" }}
            >
              About us
            </Link>
            <Link
              className="m-2"
              to="/Cart"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Badge color="secondary" badgeContent="3">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>

            <NavDropdown
              title={PresonIcon}
              id="collasible-nav-dropdown"
              style={{ color: "white" }}
            >
              <Link className="m-3"
                to="/Login"
                style={{ color: "black", textDecoration: "none" }}
              >
                Login
              </Link>
              <hr/>
              <Link className="m-3"
                to="/Register"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sign up
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar1;
