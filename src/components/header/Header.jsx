import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./_Header.css";
import { PropTypes } from "prop-types";

const Header = ({ showLoginLink }) => {
  return (
    <AppBar className="appBar">
      <Toolbar>
        <Typography variant="h6" className="headerText">
          <Link to="/" className="headerLink">
            BookFlow
          </Link>
        </Typography>

        {showLoginLink && (
          <Link to="/login" className="loginLink">
            Login
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  showLoginLink: PropTypes.boolean
};

export default Header;
