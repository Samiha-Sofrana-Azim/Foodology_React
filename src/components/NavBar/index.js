import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };
  const history = useHistory();
  const token = localStorage.getItem("token");
  const logout = () => {
    axios
      .post("http://127.0.0.1:8000/logout")
      .then((res) => {
        if (res.data.status === true) {
          localStorage.clear();
          history.push("/");
        }
      })

      .catch((res) => console.log(res));
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/"></Link>
        </div>
        <h1 class="glow">FOODoLOGY</h1>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            {localStorage.getItem("token") ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    onClick={handleClose}
                    style={{
                      color: location.pathname === "/dashboard" && "#4071f4",
                    }}
                  >
                    Dashboard
                  </Link>
                </li>
                {localStorage.getItem("status") &&
                  localStorage.getItem("status") === "Admin" && (
                    <li>
                      <Link
                        to="/createpost"
                        onClick={handleClose}
                        style={{
                          color:
                            location.pathname === "/createpost" && "#4071f4",
                        }}
                      >
                        Create Post
                      </Link>
                    </li>
                  )}

                <li>
                  <Link
                    to="/about"
                    onClick={handleClose}
                    style={{
                      color: location.pathname === "/about" && "#4071f4",
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={handleClose}
                    style={{
                      color: location.pathname === "/contact" && "#4071f4",
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    onClick={logout}
                    style={{
                      color: location.pathname === "/logout" && "#4071f4",
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/register"
                  onClick={handleClose}
                  style={{
                    color: location.pathname === "/register" && "#4071f4",
                  }}
                >
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
