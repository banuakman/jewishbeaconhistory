import React from "react";
import "./style.css";

function Credits() {
  return (
    <div>
      <div className="credits-header">Credits</div>
      <div className="credits-title">Produced by</div>
      <p className="credits-body">
        <a href="https://www.beaconhebrewalliance.org/" target="_blank">
          the Beacon Hebrew Alliance
        </a>
        <br />
        <a href="https://www.beaconhistorical.org/" target="_blank">
          the Beacon Historical Society
        </a>
      </p>
      <div className="credits-title">Written and narrated by</div>
      <div className="credits-body">
        Anna Brady Marcus,{" "}
        <a href="https://anchoryourlegacy.com/" target="_blank">
          Anchor Your Legacy
        </a>
      </div>
      <div className="credits-title">Designed and developed by</div>
      <div className="credits-body">
        Banu Akman,{" "}
        <a href="https://banuakman.com" target="_blank">
          Breative.net
        </a>
      </div>
      <div className="credits-title">Photography by</div>
      <div className="credits-body">
        Frank Ritter, ,{" "}
        <a href="http://www.ritterphoto.com/" target="_blank">
          Frank Ritter Photography
        </a>
      </div>
      <div className="credits-title">Audio recording and editing by</div>
      <div className="credits-body">J. Brooks Marcus</div>
      <div className="credits-title">Text editing by</div>
      <div className="credits-body">Frances King</div>
      <div className="credits-title">Historical photos courtesy of</div>
      <div className="credits-body">
        Beacon Historical Society unless otherwise noted
      </div>
      <div className="credits-title">Research conducted by</div>
      <div className="credits-body">
        members of the Beacon Historical Society and the Beacon Hebrew Alliance
        Centennial Committee <br />
        including Ann Gross, Anna Brady Marcus, Brandon DiDiego (BHS intern),
        Diane Lapis, Helen Crohn, and Nanci Sobier-Maier
      </div>
      <div className="credits-title">Oral History interviews conducted by</div>
      <div className="credits-body">
        Anna Brady Marcus, Diane Lapis, Ann Gross, Ellen Pearson Gersh, and Ian
        Green
      </div>
      <div className="credits-title">Oral History transcription by</div>
      <div className="credits-body">Brandon DiDiego</div>
      <div className="credits-title">Special Thanks to:</div>
      <div className="credits-body">
        Dr. Harold Ginsberg, Albert Green, Ian Green, the late Bob Murphy, and
        Barbara Sbraccia
      </div>
      <div className="credits-add">
        This project is made possible, in part, by the Irving and Gloria
        Schlossberg Family Fund and the Sadie Jane Effron Cahn Beacon Hebrew
        Alliance Endowment of the Community Foundations of the Hudson Valley.
      </div>
    </div>
  );
}

export { Credits };
