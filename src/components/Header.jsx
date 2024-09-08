import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link to="/register/1" className="hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
