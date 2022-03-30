import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="social">
        <span className="icon">
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
        </span>
        <span className="icon">
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
        </span>
        <span className="icon">
          <a href="https://www.instagram.com">
            <InstagramIcon />
          </a>
        </span>
      </div>

      <p>&#169; Ivanna M Contreras</p>
    </div>
  );
};
export default Footer;
