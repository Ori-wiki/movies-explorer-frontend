import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__container">
        <span className="footer__author">
          &copy; Казаков Денис {new Date().getFullYear()}
        </span>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__list-link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__list-link"
              href="https://github.com/Ori-wiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
