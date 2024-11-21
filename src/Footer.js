import React from "react";
import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="footer-content">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
           DEVELPER  :-   ABDUL BASIR HADISI.
          </p>
        )}
      </div>
    </footer>
  );
}

export default Footer;
