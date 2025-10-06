import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#!">Quick Links</a>
        <a href="#!">Resources</a>
        <a href="#!">Legal</a>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.372-1.852 3.605 0 4.268 2.372 4.268 5.456v6.287zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>

        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.412c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
          </svg>
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 4.557a9.847 9.847 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.563-2.005.973-3.127 1.196a4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.917 4.917 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.085c.623 1.946 2.432 3.366 4.576 3.408A9.867 9.867 0 010 19.54a13.905 13.905 0 007.548 2.212c9.056 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
