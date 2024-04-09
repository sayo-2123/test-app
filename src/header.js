import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="siteName">
        <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          Blog
        </Link>
      </div>
      <div className="toSupportPage">お問い合わせ</div>
    </header>
  );
};
