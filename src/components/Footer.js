import "../All.css";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-sec">
          <h4>
            <span className="footerHigh">SCHOOP</span>
          </h4>
          <h5>Temukan kami di</h5>
          <div className="footer-link">
            <ExternalLink href="https://www.instagram.com">
              <Icon icon="ant-design:youtube-outlined" width="35" />
            </ExternalLink>
          </div>
        </div>

        <div className="footer-sec footer-sec-2">
          <h5>Navigasi</h5>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer-sec footer-sec-3">
          <h5>Schoop Admin</h5>
          <Link to="/login">Login Admin</Link>
        </div>
      </div>

      <p>
        Copyright &#169; 2021 <span className="footerHigh">SCHOOP.</span> All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
