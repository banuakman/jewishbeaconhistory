import React from "react";
import "./style.css";

const ComingSoon = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="logos">
          <img
            className="startlogo"
            src="BHACentennialLogo.png"
            alt="Beacon Hebrew Alliance"
          />
          <img
            className="startlogo"
            src="BHSLogo.png"
            alt="Beacon History Society"
          />
        </div>
        <div className="title-holder">
          <div className="text-center"></div>
          <h1>Jewish Beacon History Walk</h1>
          <h2>Coming in April 2022</h2>
          <p>
            The Jewish Beacon History Walk is being created to celebrate the
            centennial of the Beacon Hebrew Alliance, the first and only
            synagogue in Beacon, founded in 1921. In partnership with the Beacon
            Historical Society, our research uncovered a rich history of Jewish
            enterprise in Beacon. Through the Jewish Beacon History Walk, we
            will reveal the many interrelationships between the early Jewish
            families that settled in Beacon at the turn of the last century, and
            their role in helping to build the city you see today.
          </p>
          <p>
            The Jewish Beacon History Walk is a FREE virtual guided walking tour
            that will provide an interactive map users can click on to learn
            more about the Jewish businesses that were once located along Main
            Street. Each stop will feature historic and current photos, audio
            and text information on the Jewish businesses. We will also mention
            the current business occupying these sites whenever possible, and
            encourage people to stop in and shop! The app will be featured at an
            exhibit in April 2022 at the Beacon Historical Society, and at
            Beacon Hebrew Alliance’s Centennial Gala on April 7th.
          </p>
        </div>
        <a href="mailto:BHAcentennial2021@gmail.com">
          <div className="cta">Contact Us</div>
        </a>
      </div>
      <div className="footer">
        <span></span>
      </div>
    </div>
  );
};

export { ComingSoon };
