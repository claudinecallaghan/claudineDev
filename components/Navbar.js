import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-end">
      <ul className="flex space-x-6">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            Medium
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/experiments"
            className="text-white no-underline hover:underline"
          >
            Experiments
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
