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
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
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
          path="/beaconhistoricalsociety"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Beacon Historical Society (BHS)" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/BHS_1.jpg",
                    alt: "",
                    caption:
                      "The former rectory of St. Joachim’s is the home of BHS since 2021 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/BHS_2.jpg",
                    alt: "",
                    caption:
                      "The original farmhouse purchased in 1860 by the church and expanded in 1875 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/BHS_3.jpg",
                    alt: "",
                    caption: "St. Joachim’s rectory (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/BHS_4.jpg",
                    alt: "",
                    caption:
                      "Display on Jewish War Veterans of WWII at BHS in April 20220 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/BHS_5.jpg",
                    alt: "",
                    caption:
                      "Display on Sam Beskin as part of exhibition “Celebrating 100 Years of Jewish Culture in Beacon” at BHS in April 2022 (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/BHS_6.jpg",
                    alt: "",
                    caption:
                      "Display on Louis Ritter as part of exhibition “Celebrating 100 Years of Jewish Culture in Beacon” at BHS in April 2022 (6)",
                  },
                ]}
              />
              {/* <AudioPlayer audiofile="/audios/HubStop1.mp3" /> */}
              <Description
                header="Beacon Hebrew Alliance (BHA)"
                text={[
                  "Date established: 1976",
                  <br />,
                  "Address: 61 Leonard Street",
                  <br />,
                  "Website: ",
                  <a href="https://www.beaconhistorical.org/" target="_blank">
                    www.beaconhistorical.org
                  </a>,
                  <br />,
                  "Hours: Thursday: 10am - 12pm, Saturday: 12pm - 4pm & by appointment",
                  <br />,
                  <br />,
                  "The Beacon Historical Society (BHS) showcases Beacon’s history through exhibitions, archival collections, lecture series, special events, and an informative newsletter. BHS was formed in 1976, with a mission to discover, procure, preserve, and present Beacon’s heritage and history. The Society’s collection includes books, prints, documents, photographs, postcards, paintings, maps and artifacts--all relating to the history of Beacon, NY and its antecedent villages of Fishkill Landing and Matteawan.",
                  <br />,
                  "From April 2-30, 2022, in honor of the centennial of the Beacon Hebrew Alliance (BHA), the BHS and BHA are proud to co-present “Celebrating 100 Years of Jewish Culture in Beacon” an exhibition commemorating Jewish history, culture, and community in Beacon and the Hudson Valley. Stop by during our open hours to view the exhibit and learn more about the important contributions the Jewish community has made to the city of Beacon.",
                  <br />,
                  "You can help support our mission by becoming a member, a supporter and a volunteer!",
                  <br />,
                  "Please call 845-831-0514 or visit our website at ",
                  <a href="https://www.beaconhistorical.org/" target="_blank">
                    www.beaconhistorical.org
                  </a>,
                  ,
                  " for more information.",
                ]}
                hasBusiness={false}
              />
            </div>
          }
        ></Route>

        <Route
          path="/beaconhebrewalliance"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Beacon Hebrew Alliance (BHA)" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/BHA_1.jpg",
                    alt: "",
                    caption: "A 2021 aerial view of the BHA building. (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/BHA_2.jpg",
                    alt: "",
                    caption:
                      "Newspaper article reporting on the opening of the 'new Hebrew Synagogue and Community Center.' (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/BHA_3.jpg",
                    alt: "",
                    caption:
                      "Denning’s Point bricks were used in the construction of BHA. A time capsule was buried behind the cornerstone, installed in 1929 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/BHA_4.jpg",
                    alt: "",
                    caption: "BHA sanctuary c. 1930 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/BHA_5.jpg",
                    alt: "",
                    caption:
                      "BHA Hebrew School students handle the Torah during Simchat Torah, c. 1997 (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/BHA_6.jpg",
                    alt: "",
                    caption: "The Zollner’s baby naming c. 2003 (6)",
                  },
                ]}
              />
              {/* <AudioPlayer audiofile="/audios/HubStop1.mp3" /> */}
              <Description
                header="Beacon Hebrew Alliance (BHA)"
                text={[
                  "Date established: 1921",
                  <br />,
                  "Date of building: 1929",
                  <br />,
                  "Address: 331 Verplanck Avenue",
                  <br />,
                  "Website: ",
                  <a
                    href="https://www.beaconhebrewalliance.org/"
                    target="_blank"
                  >
                    www.beaconhebrewalliance.org
                  </a>,
                  <br />,
                  <br />,
                  "Officially incorporated in May 1921, BHA was founded by a dozen or so Jewish families that were made up of some prominent business and civic leaders such as Beacon’s second mayor Samuel Beskin (stop #1), department store owner Ed Harris (stop #8), tavern-keeper Hyman Pomeranz (stop #3), and tailor Samuel Snidaman (stop #1), who was the first known Jewish resident of Fishkill Landing. Prior to this, the only way for the Jews of Beacon to observe their faith was either to go to Newburgh on the ferry, or travel north 20 miles to Poughkeepsie.",
                  <br />,
                  "Fundraising for the new BHA building was chaired by Sidney Schuman (see stop #3) and Fannie Miller (stop #6) under the leadership of Board President David Alper (stop #6), a real estate developer in Beacon. When Schuman and Miller had raised $6000 from their connections, they sought out support in the local community. According to the Beacon News, $1,700 for the building was  raised by nonmembers, local residents and businesses. A recognizable donor is Henry Morgenthau Jr., Secretary of the Treasury under Roosevelt, who donated $100. His family still owns Fishkill Farms.",
                  <br />,
                  "The synagogue’s construction, headed by James Lynch, a noted builder in Beacon, began in the summer of 1929 with a deadline to be ready for the Jewish New Year in September. Amazingly, Lynch and his crew completed the work within a half an hour of the Rosh Hashanah services!  Lynch donated some of the building supplies from his lumberyard and the Obed Lodge Masons aided in the construction. The building is made of locally produced bricks from the Dennings Point Brick Works. Manager David Strickland donated a large portion of the supplies needed for the building including a new brick product called red corrugated face.",
                  <br />,
                  "BHA today still remains at the heart of the Jewish community in Beacon. Since 2011, BHA has had the consistent spiritual leadership of Rabbi Brent Chaim Spodek and Cantor Ellen Pearson Gersh. The membership is robust, with 133 families and hundreds of individuals who participate in its services and programs each year.",
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
              <AudioPlayer audiofile="/audios/HubStop1.mp3" />
              <Description
                header="Historic Bank Square"
                text={[
                  "Bank Square was the main hub of commercial activity in the village of Fishkill Landing and later in the city of Beacon after it formed in 1913. Where you are standing now was once a wide intersection of five streets lined with many shops and businesses. One hundred years ago, you would have seen the square teeming with trolley cars, pedestrians, automobiles, and a few horse-drawn carriages. Sadly this area was completely demolished in the late 1950s during Beacon’s Urban Renewal program. Tap the list below to learn more about the Jewish businesses that thrived in Bank Square during its heyday, and scroll through the pictures to get a sense of what this busy intersection looked like at the turn of the 20th Century.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Beskin’s Department Store" to="/stop1_Beskin" />
              <Link text="Snidaman the Tailor" to="/stop1_Snidaman" />
              <Link text="Aero Leather Clothing Company" to="/stop1_Aero" />
              <Link
                text="Lewis&Pine Jewelry and Apothecary"
                to="/stop1_LewisPine"
              /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop2"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #2 - West End of Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop2_1.jpg",
                    alt: "Postcard from 1892 showing Main Street",
                    caption:
                      "Postcard from 1892 showing Main Street looking east with 172 Main on the left (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop2_2.jpg",
                    alt: "The view of Main Street",
                    caption: "The view of Main Street looking east today (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop2_3.jpg",
                    alt: "a mural of the Hudson Valley painted by Rick Price in 2009",
                    caption:
                      "Today, the side of 172 Main has a mural of the Hudson Valley painted by Rick Price in 2009 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop2_4.jpg",
                    alt: "View of Main Street looking west from Cross Street 1900",
                    caption:
                      "View of Main Street looking west from Cross Street, c. 1900 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop2_5.jpg",
                    alt: "View of Main Street looking west from Cross Street 2022",
                    caption:
                      "View of Main Street looking west from Cross Street in 2022 (5)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop2.mp3" />
              <Description
                header="West End of Main"
                text={[
                  "The west end of Main Street looks much the same today as it did one hundred years ago. The buildings are made of bricks that came from right here on the Hudson. People of all sorts were attracted to Beacon in the late 19th and early 20th centuries, for its plethora of jobs and natural beauty. Jewish business owners set up shop here to serve this new growing city. A great number of the founders of Beacon Hebrew Alliance had their businesses in this area. Here at 172 Main is the location of Samuel Cahn’s Dry Goods store, and his son Dr. Simon Cahn’s dentistry practice. You can still see Sam Cahn’s name in the tiled entryway. Across the street and a little west of here was the Beacon Furniture Company at 163-167 Main owned and operated for 60 years by three generations of the Isaacs family. Directly across the street at 171-173 Main was Bernstein and Sons department store, started by Ausher Bernstein and later run by his son Nathan.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop3"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #3 - Main between Willow and Walnut" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop3_1.jpg",
                    alt: "Storefront at 215 Main where Schuman’s Army & Navy Store used to be",
                    caption:
                      "Storefront at 215 Main where Schuman’s Army & Navy Store used to be (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop3_2.jpg",
                    alt: "Schuman’s Army & Navy Store honors the City of Beacon’s 50th anniversary, c.1963",
                    caption:
                      "Schuman’s Army & Navy Store honors the City of Beacon’s 50th anniversary, c.1963 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop3_3.jpg",
                    alt: "Main Street looking west from Holland House (today the DMV)",
                    caption:
                      "Main Street looking west from Holland House (today the DMV) with Schuman’s Army & Navy Store (215 Main) on the left, c. 1950 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop3_4.jpg",
                    alt: "Current view looking west on Main Street from the DMV building, March 2022",
                    caption:
                      "Current view looking west on Main Street from the DMV building, March 2022 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop3_5.jpg",
                    alt: "",
                    caption:
                      "A postcard of Pomey’s Hotel at 246 Main, c. 1918 (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/stop3_6.jpg",
                    alt: "",
                    caption:
                      "Max’s on Main now occupies 246 Main where Pomey’s used to be, March 2022 (6)",
                  },
                  {
                    id: 7,
                    imglink: "/images/stop3_7.jpg",
                    alt: "",
                    caption:
                      "Today Scarborough Faire occupies 257 Main where Nathan Rotner’s tailor shop was, March 2022 (7)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop3.mp3" />
              <Description
                header="Main between Willow and Walnut"
                text={[
                  "Here in the central portion of Main Street, Beacon’s older buildings start to give way to newer construction. This stop at 215 Main was the site of Schuman’s Army & Navy store owned and operated by Sidney and Rose Schuman. The Schumans were active founding members of the Beacon Hebrew Alliance and prior to the synagogue’s construction in 1929, the membership would hold services and meetings above their store. Further east and across the street was the second location of Vogel Pharmacy at 234 Main Street, run by Max Vogel until 1968. Another founder of BHA, Hyman Pomeranz ran Pomey’s Hotel and Bar at 246 Main. The bar there is original to the building from when it was the Grand Cafe, then Pomey’s, and now Max’s On Main. Finally, Nathan Rotner, a Russian Jewish immigrant, had a tailor shop at 257 Main. Click the links below to find out more about these vibrant Jewish businesses.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop4"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #4 - S. Cedar and Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop4_1.jpg",
                    alt: "M.H. Fishman department store opened June 17, 1949",
                    caption:
                      "M.H. Fishman department store opened June 17, 1949 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop4_2.jpg",
                    alt: "M.H. Fishman’s store in 1967",
                    caption: "M.H. Fishman’s store in 1967 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop4_3.jpg",
                    alt: "Firemen’s Parade going by M.H. Fishman, c. 1960",
                    caption:
                      "Firemen’s Parade going by M.H. Fishman, c. 1960 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop4_4.jpg",
                    alt: "The Howland Public Library moved to 313 Main in 1976",
                    caption:
                      "The Howland Public Library moved to 313 Main in 1976 (4)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop4.mp3" />
              <Description
                header="S. Cedar and Main"
                text={[
                  "The building at 313 Main was constructed by Jacob Ritter in 1949. Ritter was a founder of the Beacon Hebrew Alliance and owned a laundry on South Chestnut Street. In his later years he dabbled in construction and real estate. The original tenant of this building was M.H. Fishman Company, a Jewish-owned “five and dime” department store that sold a large selection of discounted products. In 1971, Fishman’s was closing, and Ritter’s son, attorney Leo Ritter, sold the building to the Howland Library board for $80,000. The Howland Public Library was founded in 1872 by Civil War General Joseph Howland. For more than 100 years it had occupied the iconic Norwegian Gothic building at Main Street and Tioronda Ave designed by famed architect Richard Morris Hunt. By the 1970s, the library had outgrown its headquarters, and by moving to 313 Main it gained 10,000 square feet of additional space for its growing collection of materials. Visit the library's local history room or look in the reference section for books about local history.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop5"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #5 - S. Chestnut and Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop5_1.jpg",
                    alt: "",
                    caption:
                      "Current view of the corner of S. Chestnut and Main (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop5_2.jpg",
                    alt: "Corner of S. Chestnut and Main from 1960s",
                    caption: "Corner of S. Chestnut and Main from 1960s (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop5_3.jpg",
                    alt: "A&P Supermarket on Main Street, c. 1960s",
                    caption: "A&P Supermarket on Main Street, c. 1960s (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop5_4.jpg",
                    alt: "Current businesses occupying the old A&P building ",
                    caption:
                      "Current businesses occupying the old A&P building (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop5_5.jpg",
                    alt: "Picture of the Ritter Family",
                    caption:
                      "The Ritter Family and employees outside their laundry at 4-6 S. Chestnut Street in 1931 (5)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop5.mp3" />
              <Description
                header="S. Chestnut and Main"
                text={[
                  "The corner of South Chestnut and Main Street was a locus of Jewish enterprise, led by the Ritter family who owned much of the block (from 327 Main to 8 S. Chestnut). Sarah and Jacob Ritter were Hungarian Jewish immigrants who moved to Beacon in the early 1920s from New York City to raise their family of five children. They started a laundry around the corner at 4-6 South Chestnut Street, and then expanded into real estate development, and later their son Louis had an insurance business there. Some of the other Jewish businesses on this block included Izzy Stone’s watch repair shop at 329 Main, and Shapiro Shoes at 331 Main run by Morris and Tillie Shapiro. Across the street at 328 Main was Rosenblum’s Shoes, and a little further east at 334 Main was Abe Lewis’s Grocery store. All of these business owners were members of the Beacon Hebrew Alliance and very active in Jewish and civic life in Beacon.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop6"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #6 - Fishkill/Teller and Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop6_1.jpg",
                    alt: "",
                    caption:
                      "Southwest corner of Main Street and Teller Avenue with 403 Main on the left (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop6_2.jpg",
                    alt: "",
                    caption:
                      "Corner of Main, Teller and Fishkill Avenues c. 1928 with 403 Main on the left (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop6_3.jpg",
                    alt: "",
                    caption:
                      "Highland Hospital on Verplanck Ave between Fishkill and Schenck, c. 1914 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop6_6.jpg",
                    alt: "",
                    caption:
                      "The corner of Schenck and Verplanck has Townhouses where the old Highland Hospital used to be, March 2022 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop6_4.jpg",
                    alt: "",
                    caption:
                      "This house once stood next to the Mase Hook & Ladder Fire Company, c.1915-20 (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/stop6_5.jpg",
                    alt: "",
                    caption:
                      "The Verizon building is where David Alper’s Real Estate office once was. (6)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop6.mp3" />
              <Description
                header="Fishkill/Teller and Main"
                text={[
                  "Two Jewish leaders who were instrumental in the building of the Beacon Hebrew Alliance (BHA) synagogue in 1929, had businesses located in this area. Ms. Fannie Miller had a dress shop at 403 Main Street, and was the President of the Beacon Hebrew Ladies Aid Society for many years. Miller’s male counterpart, David Alper was President of BHA when the synagogue was constructed, and his real estate office used to be where the Verizon building is today. Going north at 11 Fishkill Avenue is where Dr. Louis Rogen and Dr. Harold Ginsberg, both former presidents of BHA, used to have their dental practice; and at the corner Fishkill and Verplanck, perched up on a hill, is the Beacon Hebrew Alliance synagogue. If you turn right on Verplanck there is a townhouse development where the old Highland Hospital once stood. Many Jewish doctors worked there, including Dr. Irving Mond, Dr. Harold Kaplan, and Dr. Frank Hacker.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop7"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #7 - The Beacon Theatre" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop7_1.jpg",
                    alt: "",
                    caption:
                      "Southwest corner of Main Street and Teller Avenue with 403 Main on the left (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop7_2.jpg",
                    alt: "",
                    caption:
                      "Corner of Main, Teller and Fishkill Avenues c. 1928 with 403 Main on the left (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop7_3.jpg",
                    alt: "",
                    caption:
                      "Highland Hospital on Verplanck Ave between Fishkill and Schenck, c. 1914 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop7_4.jpg",
                    alt: "",
                    caption:
                      "This house once stood next to the Mase Hook & Ladder Fire Company, c.1915-20 (4)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop7.mp3" />
              <Description
                header="The Beacon Theatre"
                text={[
                  "Max and Bertha Ginsberg were founding members of Beacon Hebrew Alliance, and owners and proprietors of three movie theaters in the area, including the Beacon Theatre, whose building still stands at 445 Main Street and is home to Story Screen Beacon Theater now. Max and Bertha had four sons: Benjamin, Julius, Murray, and Jacob who were all members of BHA. Benjamin was the manager of the theater and his brother Julius opened the popular Wonderbar over the theater with his partner Tommy Hanlon, who eventually took over the business. Julius’s son Bernard ran the theater until it closed in the late 1960s. In addition to the Beacon Theatre, several other Jewish businesses were tenants of the building in the 1950s and 60s, including Pappy’s Luncheonette and the Optometry office of Dr. Robert Frankel. Across the street Morris Alper, the son of former BHA Board President David Alper, had an insurance business.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop8"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #8 - Tioronda and Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop8_1.jpg",
                    alt: "",
                    caption:
                      "The “brown block” looking east from 456 to 474 Main c. 1900s (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop8_2.jpg",
                    alt: "",
                    caption:
                      "Present day “brown block” looking west from 472 Main (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop8_3.jpg",
                    alt: "",
                    caption:
                      "Main Street from the old Howland library looking west c. 1933 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop8_4.jpg",
                    alt: "",
                    caption: "Beacon Falls Cafe stands today at 472 Main (4)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop8.mp3" />
              <Description
                header="Tioronda and Main"
                text={[
                  "From roughly 456 Main to 476 Main, is a row of registered landmark historical buildings known as the “brown block.” A number of Jewish businesses occupied this block in the 20th century. First of these was Ed. Harris Clothing and Shoes at 464 Main owned by Jewish businessman Edward Harris. Advertisements for Ed. Harris claimed it was “Beacon’s Largest Store” in the 1930s, and Harris had his name engraved on the sidewalk outside. Next in the row was Moore Brothers Pharmacy at 466 Main, run by Paul Wolkoff. A few doors down, where you stand now was Max Bernstein’s toy store at 472 Main. Max was the brother of Nathan Bernstein who had a clothing store on the west end of Main Street. Next door was Caplan’s Jewelry store at 476 Main run by Abraham Caplan.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop9"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #9 - North and Main" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop9_1.jpg",
                    alt: "",
                    caption: "Main Street at the dummy light in 2022 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop9_2.jpg",
                    alt: "",
                    caption: "Main Street at the dummy light c. 1999 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop9_3.jpg",
                    alt: "",
                    caption:
                      "Lithograph of Matteawan with early factory buildings, c. 1850s (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop9_4.jpg",
                    alt: "",
                    caption:
                      "Shrader Hat Company Works at One East Main, c. 1914 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop9_5.jpg",
                    alt: "",
                    caption:
                      "Werber Leather Coat Company occupied 578 Main Street after the Littauer Silk Mill (4)",
                  },
                  {
                    id: 6,
                    imglink: "/images/stop9_6.jpg",
                    alt: "",
                    caption:
                      "The old factory building at Ackerman and Main in 2022 (4)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop9.mp3" />
              <Description
                header="North and Main"
                text={[
                  "Where you are standing at 520 Main Street was once the tailor shop of Hyman Siegel, a founder of Beacon Hebrew Alliance and an avid religious scholar. After Siegel retired, Eugene Glauberman, another Jewish tailor, set up shop here. Of interest at the intersection of Main and East Main Streets is Beacon’s only remaining dummy light. Erected in 1927, it has become one of the most recognizable symbols of Beacon. The eastern end of Main Street also contains many relics from Beacon’s industrial past. The first factory in Beacon was built in 1814 along the shores of Fishkill Creek near what is now One East Main Street. Subsequently, hats, wood planers, electric blankets, and silk were all manufactured in this area. The long brick building at 578 Main has housed many factories, among them the Jewish-owned Werber Leather Coat Company, that operated here from the 1930s-60s.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop10"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Stop #10 - East Main and Water" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop10_5.jpg",
                    alt: "",
                    caption:
                      "View looking towards 15 East Main from the Ron and Ronnie Sauers bridge in 2022 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop10_1.jpg",
                    alt: "",
                    caption:
                      "Parade in Fountain Square c.1957 with 36 E Main on left (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop10_2.jpg",
                    alt: "",
                    caption:
                      "The Chanler Fife, Drum and Bugle Corps marched towards the old horse fountain at Fountain Square, c.1915 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop10_3.jpg",
                    alt: "",
                    caption: "House at 36 E Main Street in 2022 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop10_4.jpg",
                    alt: "",
                    caption:
                      "Dr. Simon Lewis and his daughter Barbara at their home on 36 E Main (5)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/HubStop10.mp3" />
              <Description
                header="East Main and Water"
                text={[
                  "Having crossed Fishkill Creek, you are now at the intersection of East Main, Leonard and Water Streets, in an area that used to be known as Fountain Square. Two long-running Jewish businesses were here: Stein’s Shoes at 11-15 East Main; and Dr. Simon Lewis’s dental practice at 36 East Main. Dr. Lewis, a WWII veteran, was a beloved figure in Beacon and the Jewish community, known for his warm heart and generosity. While you are here, be sure to visit the Beacon Historical Society at 61 Leonard Street, where you can learn more about the Jewish businesses on this tour and other fascinating aspects of Beacon’s history.",
                ]}
                hasBusiness={false}
              />
              {/* <Link text="Business" to="/business-1" /> */}
            </div>
          }
        ></Route>

        <Route
          path="/stop1_Beskin"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Beskin’s Department Store" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop1_Beskins_1.jpg",
                    alt: "",
                    caption:
                      "Samuel Beskin was Beacon's second mayor, c.1919 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop1_Beskins_2.jpg",
                    alt: "",
                    caption:
                      "Beskin's second department store featured Beacon's first elevator. Postcard c. 1910 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop1_Beskins_3.jpg",
                    alt: "",
                    caption:
                      "Business card for Beskin’s Department Store, c. 1912 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop1_Beskins_4.jpg",
                    alt: "",
                    caption: "Jugs from Beskin’s bottling works, c. 1910 (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop1_Beskins_5.jpg",
                    alt: "",
                    caption: "Mayor Samuel Beskin’s gavel, 1917-1921 (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/stop1_Beskins_6.jpg",
                    alt: "",
                    caption:
                      "The gravesite of Samuel Beskin in Agudas Israel Cemetery in New Windsor (6)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/S1_Beskin.mp3" />
              <Description
                header="Beskin’s Department Store"
                text={[
                  "Owner: Samuel Beskin",
                  <br />,
                  "Date established: 1906",
                  <br />,
                  "Address: Bank Square (Beekman Street)",
                  <br />,
                  <br />,
                  "Samuel Beskin is perhaps the most prominent Jewish leader in Beacon’s history.  He arrived in Fishkill Landing at the age of 27 in 1894 from Russia as a poor street  peddler who spoke little English. Within 20 years he established himself as a successful businessman, operating a hotel, a bottling works, an apartment house, the Overland Headwear Company, and two department stores (the second one with Beacon’s first elevator). He held an important position as the State Road contractor under Governor Al Smith helping to build a road around the Ashokan Dam among other projects. He served as Beacon’s second mayor from 1917-1921. Beskin was one of the founding members of the Beacon Hebrew Alliance, and helped to establish the congregation in the early 1920s. Sadly, Beskin died of a heart attack in 1924, and he never did get to see the beautiful Beacon Hebrew Alliance building completed. He is buried in the Agudas Israel cemetery in New Windsor.",
                ]}
                hasBusiness={false}
              />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_Snidaman"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Samuel Snidaman, Tailor" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop1_Snidaman_1.jpg",
                    alt: "",
                    caption:
                      "Ad for Samuel Snidaman’s custom tailor services, c. 1926 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop1_Snidaman_2.jpg",
                    alt: "",
                    caption:
                      "Samuel Snidaman’s Tailor shop when it was in Bank Square, c. 1906 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop1_Snidaman_3.jpg",
                    alt: "",
                    caption:
                      "Gravesite of Samuel Snidaman at Agudas Israel Cemetery in New Windsor (3)",
                  },
                ]}
              />
              <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" />
              <Description
                header="Samuel Snidaman, Tailor"
                text={[
                  "Owner: Samuel Snidaman",
                  <br />,
                  "Date established: 1886",
                  <br />,
                  "Original Address: Bank Square",
                  <br />,
                  "Second Address:  42 Elm Street",
                  <br />,
                  "Later Address: 1 Cross Street",
                  <br />,
                  <br />,
                  "Samuel Snidaman is the first known Jewish resident of Fishkill Landing. Snidaman immigrated from Russia in 1886 when he was 18 years old, and appears on the 1910 census as having a tailor shop out of his home on 42 Elm Street. As you can see in the picture shown here, Snidaman also had a tailor shop in the area of Bank Square for a short while, next to the one of the department stores of the second mayor of Beacon, Samuel Beskin. We don’t know how involved Snidaman may of been in the wave of Jewish immigrants that soon followed him to Beacon, but we do know that in his lifetime, he associated with many Jewish business-owners, and he was one of the founding directors of Beacon Hebrew Alliance, serving as a trustee in 1922 and listed as a member when the synagogue was built in 1929.",
                ]}
                hasBusiness={false}
              />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_Aero"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Aero Leather Clothing Company" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop1_Aero_1.jpg",
                    alt: "",
                    caption:
                      "Abe Wolkowitz shows a wool flight suit designed for the U.S. Armed Forces in 1942 (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop1_Aero_2.jpg",
                    alt: "",
                    caption:
                      "An Aero Leather worker sewing a seam on a leather coat, c. 1942 (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop1_Aero_3.jpg",
                    alt: "",
                    caption:
                      "The foreman of Aero Leather surrounded by women workers during WWII, c. 1942 (3)",
                  },
                  {
                    id: 4,
                    imglink: "/images/stop1_Aero_4.jpg",
                    alt: "",
                    caption:
                      "The back of an Aero Leather bomber jacket in the collection of the Beacon Historical Society (4)",
                  },
                  {
                    id: 5,
                    imglink: "/images/stop1_Aero_5.jpg",
                    alt: "",
                    caption:
                      "Newspaper advertisement for Aero Leather Company, c. 1950s (5)",
                  },
                  {
                    id: 6,
                    imglink: "/images/stop1_Aero_6.jpg",
                    alt: "",
                    caption:
                      "The stained glass window donated by Abe and Ann Wolkowitz in the sanctuary at Beacon Hebrew Alliance (6)",
                  },
                ]}
              />
              {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
              <Description
                header="Aero Leather Clothing Company"
                text={[
                  "Owner: Abraham Wolkowitz and John Lieberman",
                  <br />,
                  "Date established: 1937",
                  <br />,
                  "Address: 79 Ferry Street and near Main and Cross Streets",
                  <br />,
                  <br />,
                  "Abraham Wolkowitz, was a member of the Beacon Hebrew Alliance and co-owner of Aero-Leather Clothing Company. A former employee of the Werber Leather Coat Company (see stop #9), Wolkowitz and his partner John Lieberman struck out on their own in 1937. During WWII, Aero Leather employed hundreds of workers to support the war effort by supplying the US Army Air Forces with insulated clothing and bomber jackets to help bomber crews flying in sub-zero temperatures during the war. Wolkowitz was extremely active in Beacon's Jewish community and donated a window to the BHA Sanctuary. While the factory buildings no longer exist, the house where Wolkowitz and several of his employees once lived still stands at 56 Teller Avenue.",
                  <br />,
                  "Text by Diane Lapis",
                ]}
                hasBusiness={false}
              />
            </div>
          }
        ></Route>
        <Route
          path="/stop1_LewisPine"
          element={
            <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
              <Header text="Lewis & Pine" />
              <Slider
                sliderdata={[
                  {
                    id: 1,
                    imglink: "/images/stop1_LewisPine_1.jpg",
                    alt: "",
                    caption: "Lewis & Pine storefront at 133 Main Street (1)",
                  },
                  {
                    id: 2,
                    imglink: "/images/stop1_LewisPine_2.jpg",
                    alt: "",
                    caption: "Owner Yali Lewis shows off her wares (2)",
                  },
                  {
                    id: 3,
                    imglink: "/images/stop1_LewisPine_3.jpg",
                    alt: "",
                    caption:
                      "Lewis & Pine is on the right at 133 Main Street (3)",
                  },
                ]}
              />
              {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
              <Description
                header="Lewis & Pine"
                text={[
                  "Owner: Yali Lewis",
                  <br />,
                  "Date established: 2018",
                  <br />,
                  "Address: 133 Main Street",
                  <br />,
                  <br />,
                  "Lewis & Pine opened in 2018, and is the most recent Jewish-owned business operating on Main Street today. Artist and owner Yali Lewis designs and makes all of the jewelry in her store by hand. In addition to her own products she carefully curates complementary work from artists working in other media such as ceramics and letterpress. The boutique has preserved the historic features of the building with beautiful pressed metal walls and ceiling and original hardwood floors.",
                ]}
                hasBusiness={false}
              />
              {/* <AudioPlayer audiofile="/audios/S1_LewisPine_YaliLewisinterview.MOV" /> */}
            </div>
          }
        ></Route>

        <Route path="/" element={<ComingSoon />}></Route>
      </Routes>
    </Container>
  </ThemeProvider>
);

export default App;
