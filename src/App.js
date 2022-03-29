import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import { ComingSoon } from "./Components/ComingSoon";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Description } from "./Components/Description";
import { Link } from "./Components/Link";
import { Slider } from "./Components/Slider";
import { AudioPlayer } from "./Components/AudioPlayer";

const App = () => (
  <ThemeProvider>
    <Container>
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              <Header text="Jewish Beacon History Walk" />
              <Map />
              <Description
                text={[
                  "The Jewish Beacon History Walk was created to celebrate the centennial of the Beacon Hebrew Alliance, the first and only synagogue in Beacon, New York, founded in 1921. In researching the origins of the synagogue, we uncovered a rich history of Jewish enterprise in Beacon. By delving into the stories behind the Jewish businesses, we discovered many interrelationships between the early Jewish families that settled in Beacon, formed the Beacon Hebrew Alliance and helped to build the city you see today.",
                  <br />,
                  "Starting with an interactive map of Beacon’s Main Street, you can see where different Jewish businesses once were as you travel along the route. The Walk has ten different “hub stops” going from west to east. When you come to a hub stop on the map, click on it to learn more about the history of that area, and see a list of Jewish businesses that once thrived there. You can click on any “business card” to learn more about that business, who owned it, and how they were connected to civic and Jewish life in Beacon.",
                  <br />,
                  "The Jewish Beacon History Walk is best experienced by listening to the audio guide through headphones. Historical photos, written descriptions, and clips from oral history interviews are also included at each point on the tour. We encourage you to go into the businesses that are there now, chat with the store owners, and try to imagine what it was like in the heyday of Jewish Beacon almost 100 years ago…",
                ]}
                hasBusiness={false}
              />
            </div>
          }
        ></Route>

        <Route
          path="/stop1"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #1 - Historic Bank Square" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop1_1.jpg",
                    alt: "Today, Polhill Park",
                    caption:
                      "Today, Polhill Park is where Bank Square used to be (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop1_2.jpg",
                    alt: "Five Corners of Bank Square",
                    caption:
                      "Postcard of the “Five Corners” of Bank Square (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop1_3.jpg",
                    alt: "Bank Square with Fishkill National Bank",
                    caption:
                      "Postcard from 1892 of Bank Square with the Fishkill National Bank (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop1_4.jpg",
                    alt: "Postcard of Bank Square",
                    caption: "Postcard of Bank Square c. 1913 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop1_5.jpg",
                    alt: "Beskin's Department Store and Snidaman's Tailor Shop",
                    caption:
                      "Beskin's Department Store and Snidaman's Tailor Shop (5)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/S1_BankSquare.mp3" />
              <Description
                header="Historic Bank Square"
                text={[
                  "Bank Square was the main hub of commercial activity in the village of Fishkill Landing and later in the city of Beacon after it formed in 1913. Where you are standing now was once a wide intersection of five streets lined with many shops and businesses. One hundred years ago, you would have seen the square teeming with trolley cars, pedestrians, automobiles, and a few horse-drawn carriages. Sadly this area was completely demolished in the late 1950s during Beacon’s Urban Renewal program. Tap the list below to learn more about the Jewish businesses that thrived in Bank Square during its heyday, and scroll through the pictures to get a sense of what this busy intersection looked like at the turn of the 20th Century.",
                ]}
                hasBusiness={true}
              />
              <Link text="Beskin’s Department Store" to="/stop1_Beskin" />
              <Link text="Glick’s Variety Store" to="/stop1_Glick" />
              <Link text="Vogel’s Drug Store" to="/stop1_Vogel" />
              <Link text="Snidaman the Tailor" to="/stop1_Snidaman" />
              <Link text="O.K. Cleaners" to="stop1_OK" />
              <Link text="Aero Leather Clothing Company" to="stop1_Aero" />
            </div>
          }
        ></Route>

        <Route
          path="/stop2"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #2 - West End of Main" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop3"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #3 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop4"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #4 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop5"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #5 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop6"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #6 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop7"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #7 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop8"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #8 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop9"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #9 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop10"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #10 - Main between Willow and Walnut" />
              <Description
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                hasBusiness={true}
              />
              <Link text="Business" to="/business-1" />
            </div>
          }
        ></Route>

        <Route
          path="/stop1_Beskin"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Beskin’s Department Store" />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_Glick"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Glick’s Variety Store" />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_Vogel"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Vogel’s Drug Store" />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_Snidaman"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Snidaman the Tailor" />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_OK"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="O.K. Cleaners" />
            </div>
          }
        ></Route>
        <Route path="/" element={<ComingSoon />}></Route>
      </Routes>
    </Container>
  </ThemeProvider>
);

export default App;
