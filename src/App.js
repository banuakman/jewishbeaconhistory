import React, { useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import { Routes, Route, useLocation } from "react-router-dom";
import { Credits } from "./Components/Credits";
import { Header } from "./Components/Header";
import { Map } from "./Components/Map";
import { Description } from "./Components/Description";
import { Link } from "./Components/Link";
import { Slider } from "./Components/Slider";
import { AudioPlayer } from "./Components/AudioPlayer";
import { PhotoCredits } from "./Components/PhotoCredits";
import { Breadcrumb } from "./Components/Breadcrumb";
import ReactGA from "react-ga4";

const App = () => {
  ReactGA.initialize("G-H18PWXNQ2D");
  let location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, [location]);

  return (
    <ThemeProvider>
      <Container>
        <Routes>
          <Route
            path="/credits"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Jewish Beacon History Walk -  Credits" />
                <Credits />
              </div>
            }
          ></Route>

          <Route
            path="/"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Jewish Beacon History Walk" />
                <Map />
                <Description
                  text={[
                    "The Jewish Beacon History Walk was created to celebrate the centennial of the Beacon Hebrew Alliance, the first and only synagogue in Beacon, New York, founded in 1921. In researching the origins of the synagogue, we uncovered a rich history of Jewish enterprise in Beacon. By delving into the stories behind the Jewish businesses, we discovered many interrelationships between the early Jewish families that settled in Beacon, formed the Beacon Hebrew Alliance and helped to build the city you see today.",
                    <br />,
                    <br />,
                    "Starting with an interactive map of Beacon’s Main Street, you can see where different Jewish businesses once were as you travel along the route. The Walk has ten different “hub stops” going from west to east. When you come to a hub stop on the map, click on it to learn more about the history of that area, and see a list of Jewish businesses that once thrived there. You can click on any “business card” to learn more about that business, who owned it, and how they were connected to civic and Jewish life in Beacon.",
                    <br />,
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
                        "The original farmhouse purchased in 1860 by the church and expanded in 1875 (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/BHS_3.jpg",
                      alt: "",
                      caption: "St. Joachim’s rectory c. 1931 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/BHS_4.jpg",
                      alt: "",
                      caption:
                        "Display on Jewish War Veterans of WWII at BHS in April 20220 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/BHS_5.jpg",
                      alt: "",
                      caption:
                        "Display on Sam Beskin as part of exhibition “Celebrating 100 Years of Jewish Culture in Beacon” at BHS in April 2022 (3)",
                    },
                    {
                      id: 6,
                      imglink: "/images/BHS_6.jpg",
                      alt: "",
                      caption:
                        "Display on Louis Ritter as part of exhibition “Celebrating 100 Years of Jewish Culture in Beacon” at BHS in April 2022 (3)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/HubStop1.mp3" /> */}
                <Description
                  header="The Beacon Historical Society (BHS)"
                  text={[
                    "Date established: 1976",
                    <br />,
                    "Address: 61 Leonard Street",
                    <br />,
                    "Website: ",
                    <a
                      href="https://www.beaconhistorical.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.beaconhistorical.org
                    </a>,
                    <br />,
                    "Hours: Thursday: 10am - 12pm, Saturday: 12pm - 4pm & by appointment",
                    <br />,
                    <br />,
                    "The Beacon Historical Society (BHS) showcases Beacon’s history through exhibitions, archival collections, lecture series, special events, and an informative newsletter. BHS was formed in 1976, with a mission to discover, procure, preserve, and present Beacon’s heritage and history. The Society’s collection includes books, prints, documents, photographs, postcards, paintings, maps and artifacts--all relating to the history of Beacon, NY and its antecedent villages of Fishkill Landing and Matteawan.",
                    <br />,
                    <br />,
                    "From April 2-30, 2022, in honor of the centennial of the Beacon Hebrew Alliance (BHA), the BHS and BHA are proud to co-present “Celebrating 100 Years of Jewish Culture in Beacon” an exhibition commemorating Jewish history, culture, and community in Beacon and the Hudson Valley. Stop by during our open hours to view the exhibit and learn more about the important contributions the Jewish community has made to the city of Beacon.",
                    <br />,
                    <br />,
                    "You can help support our mission by becoming a member, a supporter and a volunteer!",
                    <br />,
                    <br />,
                    "Please call 845-831-0514 or visit our website at ",
                    <a
                      href="https://www.beaconhistorical.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.beaconhistorical.org
                    </a>,
                    " for more information.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(3) Diane Lapis photographer",
                  ]}
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
                      caption: "The Zollner’s baby naming c. 2003 (5)",
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
                      rel="noopener noreferrer"
                    >
                      www.beaconhebrewalliance.org
                    </a>,
                    <br />,
                    <br />,
                    "Officially incorporated in May 1921, BHA was founded by a dozen or so Jewish families that were made up of some prominent business and civic leaders such as Beacon’s second mayor Samuel Beskin (stop #1), department store owner Ed Harris (stop #8), tavern-keeper Hyman Pomeranz (stop #3), and tailor Samuel Snidaman (stop #1), who was the first known Jewish resident of Fishkill Landing. Prior to this, the only way for the Jews of Beacon to observe their faith was either to go to Newburgh on the ferry, or travel north 20 miles to Poughkeepsie.",
                    <br />,
                    <br />,
                    "Fundraising for the new BHA building was chaired by Sidney Schuman (see stop #3) and Fannie Miller (stop #6) under the leadership of Board President David Alper (stop #6), a real estate developer in Beacon. When Schuman and Miller had raised $6000 from their connections, they sought out support in the local community. According to the Beacon News, $1,700 for the building was  raised by nonmembers, local residents and businesses. A recognizable donor is Henry Morgenthau Jr., Secretary of the Treasury under Roosevelt, who donated $100. His family still owns Fishkill Farms.",
                    <br />,
                    <br />,
                    "The synagogue’s construction, headed by James Lynch, a noted builder in Beacon, began in the summer of 1929 with a deadline to be ready for the Jewish New Year in September. Amazingly, Lynch and his crew completed the work within a half an hour of the Rosh Hashanah services!  Lynch donated some of the building supplies from his lumberyard and the Obed Lodge Masons aided in the construction. The building is made of locally produced bricks from the Dennings Point Brick Works. Manager David Strickland donated a large portion of the supplies needed for the building including a new brick product called red corrugated face.",
                    <br />,
                    <br />,
                    "BHA today still remains at the heart of the Jewish community in Beacon. Since 2011, BHA has had the consistent spiritual leadership of Rabbi Brent Chaim Spodek and Cantor Ellen Pearson Gersh. The membership is robust, with 133 families and hundreds of individuals who participate in its services and programs each year.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Felix Lara, photographer",
                    <br />,
                    "(2)  Beacon News, March 31, 1930",
                    <br />,
                    "(3) courtesy of Diane Lapis",
                    <br />,
                    "(4) Beacon Hebrew Alliance",
                    <br />,
                    "(5) courtesy of Ellen Pearson Gersh",
                  ]}
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
                      alt: "",
                      caption:
                        "Today, Polhill Park is on the site of the old Bank Square. February 28, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop1_2.jpg",
                      alt: "",
                      caption:
                        "Postcard of the 'Five Corners' of Bank Square c. 1890s (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop1_3.jpg",
                      alt: "",
                      caption:
                        "Postcard showing Bank Square in 1892 with the Fishkill National Bank (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop1_4.jpg",
                      alt: "",
                      caption: "Postcard of Bank Square c. 1913 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop1_5.jpg",
                      alt: "",
                      caption:
                        "Beskin’s Department Store and Snidaman’s Tailor Shop on Bank Square c. 1906 (2)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop1_Aero_3.jpg",
                      alt: "",
                      caption:
                        "The foreman of Aero Leather and women workers during WWII, c. 1942. (2)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop1_LewisPine_3.jpg",
                      alt: "",
                      caption:
                        "The Lewis & Pine storefront at 133 Main Street. March 6, 2022  (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop1.mp3" />
                <Description
                  header="Historic Bank Square"
                  text={[
                    "Polhill Park was once a wide intersection of five streets called Bank Square, which was lined with many shops and businesses. It was the main hub of commercial activity in the village of Fishkill Landing and later in the city of Beacon after it was established in 1913. One hundred years ago, you would have seen the square teeming with trolley cars, pedestrians, automobiles, and a few horse-drawn carriages. Sadly, this area was completely demolished in the 1960s during Beacon’s urban renewal program. Tap the list below to learn more about the Jewish businesses that thrived in Bank Square during its heyday and scroll through the pictures to get a sense of what this busy intersection looked like at the turn of the twentieth century.",
                    <br />,
                    <br />,
                    "On your way to the next stop, check out Lewis & Pine Jewelry and Apothecary at 133 Main Street. This present-day Jewish-owned business sells handmade jewelry and is in a beautifully restored historic building.",
                  ]}
                  hasBusiness={true}
                />
                <Link text="Beskin’s Department Store" to="/stop1_Beskin" />
                <Link text="Snidaman the Tailor" to="/stop1_Snidaman" />
                <Link text="Aero Leather Clothing Company" to="/stop1_Aero" />
                <Link
                  text="Lewis&Pine Jewelry and Apothecary (133 Main)"
                  to="/stop1_LewisPine"
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                  ]}
                />
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
                      alt: "",
                      caption:
                        "Postcard from 1892 showing Main Street looking east with 172 Main on the left (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop2_2.jpg",
                      alt: "",
                      caption:
                        "The view of Main Street looking east today. February 21, 2022 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop2_4.jpg",
                      alt: "",
                      caption:
                        "View of Main Street looking west from Cross Street, c. 1900 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop2_5.jpg",
                      alt: "",
                      caption:
                        "View of Main Street looking west from Cross Street. March 11, 2022 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop2_6.jpg",
                      alt: "",
                      caption:
                        "The street view of 172 Main Street. March 6, 2022 (2)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop2_7.jpg",
                      alt: "",
                      caption:
                        "The tiled entryway of 172 Main still bears Samuel Cahn’s name. March 6, 2022 (2)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop2_8.jpg",
                      alt: "",
                      caption:
                        "The storefronts from 165-167 Main where the Beacon Furniture Company was once located. March 27, 2022 (2)",
                    },
                    {
                      id: 8,
                      imglink: "/images/stop2_9.jpg",
                      alt: "",
                      caption:
                        "Ausher Bernstein's Guarantee Outfitting House, c. 1921 at 171-173 Main; 'the house where quality counts' (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop2.mp3" />
                <Description
                  header="West End of Main"
                  text={[
                    "The west end of Main Street looks much the same today as it did one hundred years ago. The buildings are constructed of bricks from right here on the Hudson. People of all sorts were attracted to Beacon in the late nineteenth and early twentieth centuries, for its abundance of jobs and natural beauty. Jewish business owners set up shop here to serve this new growing city, and many of the founders of Beacon Hebrew Alliance ran businesses in this area. Here at 172 Main, you’ll find the location of Samuel Cahn’s Dry Goods store along with his son Dr. Simon Cahn’s dentistry practice. You can still see Sam Cahn’s name in the tiled entryway. Across the street and a little west of here was the Beacon Furniture Company at 163-167 Main owned and operated for sixty years by three generations of the Isaacs family. Directly across the street at 171-173 Main was Bernstein and Sons department store, started by Ausher Bernstein and later run by his son Nathan.",
                  ]}
                  hasBusiness={true}
                />
                <Link
                  text="Beacon Furniture Company (163-167 Main 1937-1970 - moved to 316 Main 1971-1980s and 320 Main 1994)"
                  to="/stop2_BeaconFurniture"
                />
                <Link
                  text="Bernstein and Sons (171-173 Main) 1920s-60s"
                  to="/stop2_Bernstein"
                />
                <Link
                  text="Samuel Cahn’s Dry Goods & Dr. Simon Cahn’s Dental Practice (172 Main)"
                  to="/stop2_Cahn"
                />

                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
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
                      alt: "",
                      caption:
                        "Storefront at 215 Main where Schuman’s Army & Navy Store was once located. April 4, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop3_2.jpg",
                      alt: "",
                      caption:
                        "Schuman’s Army & Navy Store honors the City of Beacon’s 50th anniversary, c.1963 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop3_3.jpg",
                      alt: "",
                      caption:
                        "Main Street looking west from Holland House (today the DMV) with Schuman’s Army & Navy Store (215 Main) on the left, c. 1950 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop3_4.jpg",
                      alt: "",
                      caption:
                        "Current view looking west on Main Street from the DMV building, March 2022 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop3_5.jpg",
                      alt: "",
                      caption:
                        "A postcard of Pomey’s Hotel at 246 Main, c. 1918 (2)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop3_6.jpg",
                      alt: "",
                      caption:
                        "Max’s on Main now occupies 246 Main where Pomey’s was once located. March 27, 2022 (1)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop3_7.jpg",
                      alt: "",
                      caption:
                        "Today Scarborough Faire occupies 257 Main where Nathan Rotner’s tailor shop once was located. March 27, 2022 (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop3.mp3" />
                <Description
                  header="Main between Willow and Walnut"
                  text={[
                    "Here in the central portion of Main Street, Beacon’s older buildings start to give way to newer construction. This stop at 215 Main was the site of Schuman’s Army & Navy Store owned and operated by Sidney and Rose Schuman. The Schumans were active founding members of the Beacon Hebrew Alliance; prior to the synagogue’s construction in 1929, the membership would hold services and meetings above their store. Further east and across the street was the second location of Vogel Pharmacy at 234 Main Street, run by Max Vogel until 1968. Another founder of BHA, Hyman Pomeranz, ran Pomey’s Hotel and Bar at 246 Main. The bar there is original to the building from the days when it was the Grand Cafe, then Pomey’s, and now Max’s On Main. Finally, Nathan Rotner, a Russian Jewish immigrant, had a tailor shop at 257 Main.",
                  ]}
                  hasBusiness={true}
                />
                <Link
                  text="Schuman’s Army Navy Store (215 Main - 1920s-1970s & 324 Main)"
                  to="/stop3_Schuman"
                />
                <Link
                  text="Vogel’s Drug Store (later location 234 Main)"
                  to="/stop3_Vogel"
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                  ]}
                />
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
                      alt: "",
                      caption:
                        "M.H. Fishman’s Department store, opened June 17, 1949. (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop4_2.jpg",
                      alt: "",
                      caption: "M.H. Fishman’s store in 1967 (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop4_3.jpg",
                      alt: "",
                      caption:
                        "Firemen’s Parade passing by M.H. Fishman's, c. 1960 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop4_4.jpg",
                      alt: "",
                      caption:
                        "The Howland Public Library moved to 313 Main in 1976. March 4, 2022 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop4_5.jpg",
                      alt: "",
                      caption:
                        "The original Howland Library building at Tioranda and Main built by General Joseph Howland in 1872 (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop4.mp3" />
                <Description
                  header="S. Cedar and Main"
                  text={[
                    "The building at 313 Main was constructed by Jacob Ritter in 1949. Ritter was a founder of the Beacon Hebrew Alliance and owned a laundry on South Chestnut Street. In his later years he dabbled in construction and real estate. The original tenant of this building was M.H. Fishman Company, a Jewish-owned five-and-dime department store that sold a large selection of discounted products. In 1971, Fishman’s was closing, and  Jacob Ritter’s son, attorney Leo Ritter, sold the building to the Howland Library board for $80,000. The Howland Public Library had been founded in 1872 by Civil War General Joseph Howland. Designed by famed architect Richard Morris Hunt, the library had occupied the iconic Norwegian Gothic building at Main Street and Tioronda Avenue for more than one hundred years. By the 1970s, the library had outgrown its headquarters, and by moving to 313 Main it gained 10,000 square feet of additional space for its growing collection of materials.  Visit the library's local history room or look in the reference section for books about local history.",
                  ]}
                  hasBusiness={false}
                />
                {/* <Link text="Business" to="/business-1" /> */}
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
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
                        "Current view of the corner of S. Chestnut and Main. March 4, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop5_2.jpg",
                      alt: "",
                      caption:
                        "Corner of S. Chestnut and Main from the 1960s (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop5_3.jpg",
                      alt: "",
                      caption: "A&P Supermarket on Main Street, c. 1960s (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop5_4.jpg",
                      alt: "",
                      caption:
                        "Current businesses occupying the old A&P building. March 11, 2022 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop5_5.jpg",
                      alt: "",
                      caption:
                        "The Ritter Family and employees outside their laundry at 4-6 S. Chestnut Street in 1931 (3)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop5_Rosenblum_2.jpg",
                      alt: "",
                      caption:
                        "Looking northwest on Main at Eliza Street was Rosenblum Shoes (second store from left), and the Mid-Town Market at right where Abraham Lewis’s grocery was once located, c. 1965. (2)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop5.mp3" />
                <Description
                  header="S. Chestnut and Main"
                  text={[
                    "The corner of South Chestnut and Main Street was a locus of Jewish enterprise, led by the Ritter family who owned much of the block (from 327 Main to 8 S. Chestnut). Sarah and Jacob Ritter were Hungarian Jewish immigrants who moved to Beacon in the early 1920s from New York City to raise their family of five children. They started a laundry around the corner at 4-6 South Chestnut Street, and then expanded into real estate development, and later their son Louis had an insurance business there. Some of the other Jewish businesses on this block included Izzy Stone’s watch repair shop at 329 Main, and Shapiro Shoes at 331 Main run by Morris and Tillie Shapiro. Across the street at 328 Main was Rosenblum’s Shoes, and a little further east at 334 Main was Abe Lewis’s Grocery store. All of these business owners were members of the Beacon Hebrew Alliance and very active in Jewish and civic life in Beacon.",
                  ]}
                  hasBusiness={true}
                />
                <Link
                  text="Ritter Laundry and Insurance office (4-6 S. Chestnut St)"
                  to="/stop5_Ritter"
                />
                <Link
                  text="Rosenblum’s Shoes (328 Main) 1930s-60s"
                  to="/stop5_Rosenblum"
                />
                <Link
                  text="Lewis’s Grocery (334 Main) 1930s-40s"
                  to="/stop5_Lewis"
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) courtesy of Frank Ritter",
                  ]}
                />
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
                        "Southwest corner of Main Street and Teller Avenue with 403 Main on the left. March 11, 2022 (1)",
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
                      imglink: "/images/stop6_5.jpg",
                      alt: "",
                      caption:
                        "The Verizon building is now located on the former site of David Alper’s real estate office. March 11, 2022 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop6_7.jpg",
                      alt: "",
                      caption:
                        "This Victorian house at 11 Fishkill Avenue was the dental office of Dr. Louis Rogen and Dr. Harold Ginsberg from approx 1950-1975. March 13, 2022 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/BHA_2.jpg",
                      alt: "",
                      caption:
                        "A newspaper article in 1930 reporting on the opening of the 'new Hebrew Synagogue and Community Center'. March 31, 1930 (3)",
                    },
                    {
                      id: 6,
                      imglink: "/images/BHA_1.jpg",
                      alt: "",
                      caption: "A 2021 aerial view of the BHA building (4)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop6_3.jpg",
                      alt: "",
                      caption:
                        "Highland Hospital on Verplanck Ave between Fishkill and Schenck, c. 1914 (2)",
                    },
                    {
                      id: 8,
                      imglink: "/images/stop6_6.jpg",
                      alt: "",
                      caption:
                        "The corner of Schenck and Verplanck has Townhouses where the old Highland Hospital used to be, March 2022 (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop6.mp3" />
                <Description
                  header="Fishkill/Teller and Main"
                  text={[
                    "Two Jewish leaders who were instrumental in the building of the Beacon Hebrew Alliance (BHA) synagogue in 1929 operated businesses in this area. Fannie Miller had a dress shop at 403 Main Street and was the president of the Beacon Hebrew Ladies Aid Society for many years. Miller’s BHA leadership counterpart, David Alper was president of BHA when the synagogue was constructed, and his real estate office was located where the Verizon building sits today. Approaching the intersection at 347 Main Street was Fisch’s Mens Shop, operating as a clothing and sporting goods store by three generations of Fischs from 1919 to 1992. Going north at 11 Fishkill Avenue, there was once the dental practice of Dr. Louis Rogen and Dr. Harold Ginsberg, both former presidents of BHA. And at the corner of Fishkill and Verplanck, perched up on a hill, you’ll see the Beacon Hebrew Alliance synagogue.  Turning right on Verplanck, you can see a townhouse development where the old Highland Hospital once stood. Many Jewish doctors worked there, including Dr. Irving Mond, Dr. Harold Kaplan, and Dr. Frank Hacker.",
                  ]}
                  hasBusiness={true}
                />
                <Link
                  text="Fannie Miller’s store (403 Main)"
                  to="/Stop6_Miller"
                />
                <Link
                  text="Dr. Rogen and Dr. Ginsberg’s Dental Office (Original: 398 ½ Main, then 11 Fishkill Ave) 1920s-70s"
                  to="/Stop6_RogenGinsberg"
                />
                <Link
                  text="Fisch’s Mens Shop (347-351 Main)"
                  to="/Stop6_Fisch"
                />
                <Link
                  text="Beacon Hebrew Alliance"
                  to="/beaconhebrewalliance"
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2git branch) Beacon Historical Society",
                    <br />,
                    "(3) Beacon News",
                    <br />,
                    "(4) Felix Lara, photographer",
                  ]}
                />
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
                      caption: "Looking east from 445 Main. March 11, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop7_2.jpg",
                      alt: "",
                      caption:
                        "The Beacon Theatre marquee on opening day. August 16, 1934 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/Stop7_BeaconTheatre_1.jpg",
                      alt: "",
                      caption:
                        "Max Ginsberg at left and other investors who built the Beacon Theatre. August 7, 1934 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/Stop7_BeaconTheatre_3.jpg",
                      alt: "",
                      caption:
                        "An ad for movies at the Beacon Theatre, c. 1930 (3)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop7_3.jpg",
                      alt: "",
                      caption: "Storyscreen Theater marquee in 2022 (1)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop7_4.jpg",
                      alt: "",
                      caption:
                        "Original Wonderbar sign painted on the side of 445 Main (3)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop7_5.jpg",
                      alt: "",
                      caption: "The cover of the Wonder-bar menu, c. 1940 (3)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop7.mp3" />
                <Description
                  header="The Beacon Theatre"
                  text={[
                    "Max and Bertha Ginsberg were founding members of Beacon Hebrew Alliance, as well as the owners and proprietors of three movie theaters in the area; among the Beacon Theatre, whose building still stands at 445 Main Street and provides a home today for the Story Screen Beacon Theater. Max and Bertha had four sons: Benjamin, Julius, Murray, and Jacob, all of them members of BHA. Benjamin was the manager of the theater, and his brother Julius opened the popular Wonderbar over the theater with his partner Tommy Hanlon, who eventually took over the business. Julius’s son Bernard ran the theater until it closed in the late 1960s. In addition to the Beacon Theatre, several other Jewish businesses were tenants in the building in the 1950s and 60s, including Pappy’s Luncheonette and the optometry office of Dr. Robert Frankel. Across the street, Morris Alper, the son of former BHA Board President David Alper, had an insurance business.",
                  ]}
                  hasBusiness={true}
                />
                <Link
                  text="The Beacon Theatre (445 Main)"
                  to="/stop7_BeaconTheather"
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon News",
                    <br />,
                    "(3) Beacon Historical Society",
                  ]}
                />
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
                        "The “brown block” looking east from 456 to 474 Main c. 1900s. (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop8_2.jpg",
                      alt: "",
                      caption:
                        "Present day “brown block” looking west from 472 Main. March 11, 2022 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop8_3.jpg",
                      alt: "",
                      caption:
                        "Main Street from the old Howland library looking west c. 1933 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop8_5.jpg",
                      alt: "",
                      caption:
                        "The Ed. Harris Building at 464 Main Street was sold in 1940. February 29, 1940 (3)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop8_6.jpg",
                      alt: "",
                      caption:
                        "Edward Harris owned a clothing store on the east end of Main Street that claimed to be 'Beacon's Largest Store' in the 1930s (1)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop8_4.jpg",
                      alt: "",
                      caption:
                        "Beacon Falls Cafe stands today at 472 Main. March 11, 2022 (2)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop8_7.jpg",
                      alt: "",
                      caption: "Max Bernstein’s business card from 1943 (1)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop8.mp3" />
                <Description
                  header="Tioronda and Main"
                  text={[
                    "From roughly 456 Main to 476 Main, there is a row of registered landmark historical buildings known as the “brown block” due to the color of the bricks used in the buildings’ construction. A number of Jewish businesses occupied this block in the twentieth century, and the first of these was Ed. Harris Clothing and Shoes at 464 Main, owned by Jewish businessman Edward Harris. Advertisements for Ed. Harris claimed it was “Beacon’s Largest Store” in the 1930s, and Harris had his name engraved on the sidewalk outside. Next in the row was Moore Brothers Pharmacy at 466 Main, run by Paul Wolkoff. A few doors down, there was Max Bernstein’s toy store at 472 Main. Max was the brother of Nathan Bernstein who had a clothing store on the west end of Main Street. Next door was Caplan’s Jewelry Store at 476 Main, run by Abraham Caplan.",
                  ]}
                  hasBusiness={false}
                />
                {/* <Link text="Business" to="/business-1" /> */}
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(3) Beacon News",
                  ]}
                />
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
                      imglink: "/images/stop9_7.jpg",
                      alt: "",
                      caption:
                        "A business card for Gustavus Jackson, the first Jewish settler in Matteawan, c. 1848. He ran a store near Schenck and Main with his son Willie (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop9_1.jpg",
                      alt: "",
                      caption:
                        "Main Street at the dummy light. March 11, 2022 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop9_2.jpg",
                      alt: "",
                      caption: "Main Street at the dummy light c. 1999 (1)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop9_3.jpg",
                      alt: "",
                      caption:
                        "Lithograph of Matteawan with early factory buildings, c. 1850s (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop9_4.jpg",
                      alt: "",
                      caption:
                        "Shrader Hat Company Works at 1 East Main St, c. 1914 (1)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop9_5.jpg",
                      alt: "",
                      caption:
                        "Werber Leather Coat Company occupied 578 Main Street after the Littauer Silk Mill closed (1)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop9_6.jpg",
                      alt: "",
                      caption:
                        "The old factory building at Ackerman and Main. April 1, 2022  (2)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop9.mp3" />
                <Description
                  header="North and Main"
                  text={[
                    "Several Jewish tailors once lived and worked near this spot, including the first Jewish resident of Matteawan in 1848. Of interest at the intersection of Main and East Main Streets is Beacon’s only remaining dummy light (ie. a traffic light set in the middle of the intersection, and not at the sides, corners or above). Erected in 1927, it has become one of the most recognizable symbols of Beacon. The eastern end of Main Street also contains many relics from Beacon’s industrial past. The first factory in Beacon was built in 1814 along the shores of Fishkill Creek near what is now 1 East Main Street. Subsequently, hats, wood planers, electric blankets, and silk were all manufactured in this area. The long brick building at 578 Main has housed many factories, among them the Jewish-owned Werber Leather Coat Company that operated here in the 1930s.",
                  ]}
                  hasBusiness={false}
                />
                {/* <Link text="Business" to="/business-1" /> */}
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
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
                        "View looking towards 15 East Main from the Ron and Ronnie Sauers bridge. April 1, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop10_1.jpg",
                      alt: "",
                      caption:
                        "A parade in Fountain Square c.1957 with 36 East Main at left (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop10_2.jpg",
                      alt: "",
                      caption:
                        "The Chanler Fife, Drum and Bugle Corps marching towards the old horse fountain at Fountain Square, c. 1915 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop10_3.jpg",
                      alt: "",
                      caption:
                        "A house at 36 East Main Street. March 11, 2022 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop10_4.jpg",
                      alt: "",
                      caption:
                        "Dr. Simon Lewis and his daughter Barbara at their home on 36 East Main, c. 1956 (3)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop10_6.jpg",
                      alt: "",
                      caption:
                        "A photo of Louis Stein from a Merchant Profile article in the Beacon News, c. 1934 (2)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop10_7.jpg",
                      alt: "",
                      caption:
                        "The Sisterhood of BHA with Rabbi Wengrovsky and his wife. President Tillie Shapiro is standing at the right end, c. 1962 (4)",
                    },
                    {
                      id: 8,
                      imglink: "/images/BHS_1.jpg",
                      alt: "",
                      caption:
                        "The former rectory of St. Joachim’s has been the home of Beacon Historical Society since 2021 (2)",
                    },
                  ]}
                />
                <AudioPlayer audiofile="/audios/HubStop10.mp3" />
                <Description
                  header="East Main and Water"
                  text={[
                    "Having crossed Fishkill Creek, you are now at the intersection of East Main, Leonard, and Water Streets, in an area that was once known as Fountain Square. Two long-running Jewish businesses were here: Stein’s Shoes at 11-15 East Main, and Dr. Simon Lewis’s dental practice at 36 East Main. Dr. Lewis, a WWII veteran, was a beloved figure in Beacon and the Jewish community, known for his warm heart and generosity. Stein’s Shoes was started by Louis Stein, a founder of the Beacon Hebrew Alliance, and it ran at its East Main Street location for sixty years. Louis Stein’s daughter Tillie Shapiro ran the store after his retirement. While you are here, be sure to visit the Beacon Historical Society at 61 Leonard Street, where you can learn more about the Jewish businesses on this tour and other fascinating aspects of Beacon’s history.",
                  ]}
                  hasBusiness={false}
                />
                {/* <Link text="Business" to="/business-1" /> */}
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) courtesy of Ian Green",
                    <br />,
                    "(4) Beacon News courtesy of Ann Gross",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop1_Beskin"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Beskin’s Department Store" />
                <Breadcrumb stopno="1" />
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
                        "Business card for Beskin’s Department Store, c. 1912 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop1_Beskins_4.jpg",
                      alt: "",
                      caption: "Jugs from Beskin’s bottling works, c. 1910 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop1_Beskins_5.jpg",
                      alt: "",
                      caption: "Mayor Samuel Beskin’s gavel, 1917-1921 (1)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop1_Beskins_6.jpg",
                      alt: "",
                      caption:
                        "The gravesite of Samuel Beskin in Agudas Israel Cemetery in New Windsor (1)",
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
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) courtesy of Rick Rosenthal",
                    <br />,
                    "(2) Beacon Historical Society",
                  ]}
                />
              </div>
            }
          ></Route>
          <Route
            path="/stop1_Snidaman"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Samuel Snidaman, Tailor" />
                <Breadcrumb stopno="1" />
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
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Fishkill Standard",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Findagrave.com, accessed October 17, 2021",
                  ]}
                />
              </div>
            }
          ></Route>
          <Route
            path="/stop1_Aero"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Aero Leather Clothing Company" />
                <Breadcrumb stopno="1" />
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
                        "An Aero Leather worker sewing a seam on a leather coat, c. 1942 (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop1_Aero_3.jpg",
                      alt: "",
                      caption:
                        "The foreman of Aero Leather surrounded by women workers during WWII, c. 1942 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop1_Aero_4.jpg",
                      alt: "",
                      caption:
                        "The back of an Aero Leather bomber jacket in the collection of the Beacon Historical Society (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop1_Aero_5.jpg",
                      alt: "",
                      caption:
                        "Newspaper advertisement for Aero Leather Company, c. 1950s (2)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop1_Aero_6.jpg",
                      alt: "",
                      caption:
                        "The stained glass window donated by Abe and Ann Wolkowitz in the sanctuary at Beacon Hebrew Alliance (3)",
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
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Edward Gruber photographer, collection of the U.S. Office of War Information",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Beacon Hebrew Alliance, 2012",
                  ]}
                />
              </div>
            }
          ></Route>
          <Route
            path="/stop1_LewisPine"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Lewis & Pine" />
                <Breadcrumb stopno="1" />
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
                      caption: "Owner Yali Lewis shows off her wares (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop1_LewisPine_3.jpg",
                      alt: "",
                      caption:
                        "Lewis & Pine is on the right at 133 Main Street (1)",
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
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop2_BeaconFurniture"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Beacon Furniture Company" />
                <Breadcrumb stopno="2" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop2_BeaconFurniture_1.jpg",
                      alt: "",
                      caption:
                        "The storefronts from 165-167 Main where the Beacon Furniture Company was once located (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop2_BeaconFurniture_2.jpg",
                      alt: "",
                      caption:
                        "The storefronts of 167 and 165 Main looking west, March 3, 2022 (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop2_BeaconFurniture_3.jpg",
                      alt: "",
                      caption:
                        "Ad for the Beacon Furniture Companyl, April 4, 1967 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop2_BeaconFurniture_4.jpg",
                      alt: "",
                      caption:
                        "The second location of Beacon Furniture Company at 316 Main is on the left (3)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop2_BeaconFurniture_5.jpg",
                      alt: "",
                      caption:
                        "Ad for second generation Beacon Furniture Company, January 26, 1975 (2)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop2_BeaconFurniture_6.jpg",
                      alt: "",
                      caption:
                        "Ad for third generation Beacon Furniture Company, March 6, 1994 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Beacon Furniture Company"
                  text={[
                    "Owner: Philip Isaacs, later son Marvin Isaacs and grandson Stephen Isaacs",
                    <br />,
                    "Date established: 1937",
                    <br />,
                    "Original Address: 163-167 Main Street",
                    <br />,
                    "Second Address: 316 Main Street (former Schoonmaker’s Department Store)",
                    <br />,
                    "Third Address: 320 Main Street (next to Rite Aid)",
                    <br />,
                    <br />,
                    "The Beacon Furniture Company was started in 1937 by Philip Isaacs, an immigrant born in Russia. After arriving in New York in 1920, Philip and his wife Tillie moved with their young son Marvin to Beacon in the mid-1930s and soon became integrated with the Jewish community here. Their store sold home furnishings and appliances out of 165-167 Main Street for 33 years. In 1971, their son Marvin took over the business and moved it to the site of the former Schoonmaker’s Department Store at 316 Main Street, which had more space for the growth. After Marvin sold the business and retired, in 1994, Marvin’s son Stephen Isaacs reopened The Beacon Furniture Company store at 320 Main Street (next to the Rite Aid today). The opening was touted at the time as a hopeful sign that Beacon’s Main Street would soon bounce back from its long decline.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Poughkeepsie Journal",
                    <br />,
                    "(3) Beacon Historical Society",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop2_Bernstein"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Bernstein and Sons" />
                <Breadcrumb stopno="2" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop2_Bernstein_1.jpg",
                      alt: "",
                      caption: "Ausher Bernstein c. 1921 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop2_Bernstein_2.jpg",
                      alt: "",
                      caption:
                        "Bernstein's Guarantee Outfitting House 'where quality counts' (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop2_Bernstein_3.jpg",
                      alt: "",
                      caption: "Nathan Bernstein c. 1933 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop2_Bernstein_4.jpg",
                      alt: "",
                      caption: "Bernstein and Sons clothing store c. 1933 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop2_Bernstein_5.jpg",
                      alt: "",
                      caption: "The storefronts of 171-173 Main in 2022 (3)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Bernstein and Sons"
                  text={[
                    "Owner: Ausher Bernstein, Nathan Bernstein",
                    <br />,
                    "Date established: 1912",
                    <br />,
                    "Address: 171-173 Main Street",
                    <br />,
                    <br />,
                    "Ausher Bernstein arrived in Beacon literally by accident. He got in a car crash in 1911 while passing through town and after a short recovery at Highland Hospital was so enthused by the possibilities of the area he decided to stay. Ausher started the Guarantee Outfitting House, a department store with high-class men’s and women’s apparel at moderate prices. “The House where quality counts” was his slogan. Upon Ausher’s death in 1933, his son Nathan took over the business and named it Bernstein and Sons. The store was considered the height of luxury:  selling Mallory, Stetson and Pencraft Hats for men and fine suits. One of Ausher’s other sons Max Bernstein ran an auto supply store and then a toy store on the east end of Main Street (see stop #8). A third son Barry had a store in Peekskill.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) The 1921 Fireman’s Parade Souvenir Program produced by the Beacon Journal",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop2_Cahn"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Samuel Cahn’s Dry Goods & Dr. Simon Cahn’s Dental Practice" />
                <Breadcrumb stopno="2" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop2_Cahn_1.jpg",
                      alt: "",
                      caption:
                        "Samuel Cahn owned a dry goods store at 172 Main Street. 1920's (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop2_Cahn_2.jpg",
                      alt: "",
                      caption:
                        "A stained glass window in the sanctuary of the Beacon Hebrew Alliance is dedicated to Minnie Beskin Cahn, 2012 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop2_Cahn_3.jpg",
                      alt: "",
                      caption:
                        "The street view of 172 Main Street in March 6, 2022 (3)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop2_Cahn_4.jpg",
                      alt: "",
                      caption: "Dr. Simon Cahn c. 1950 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop2_Cahn_5.jpg",
                      alt: "",
                      caption: "Mrs. Sadie Jane Effron Cahn c. 1950 (1)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop2_Cahn_6.jpg",
                      alt: "",
                      caption:
                        "Owner and son of RonzWorld Guitar Gallery at 172 Main with the name S. Cahn in the entryway (3)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Samuel Cahn’s Dry Goods & Dr. Simon Cahn’s Dental Practice"
                  text={[
                    "Owner: Samuel Cahn, Dr. Simon Cahn",
                    <br />,
                    "Date established: 1897",
                    <br />,
                    "Address: 172 Main Street",
                    <br />,
                    <br />,
                    "Samuel Cahn was born in Latvia, in what was alternately Poland and Russia. He immigrated to the United States in the 1880s and married Minnie Beskin, the sister of Samuel Beskin, who was a successful business owner and Beacon’s second mayor. Beskin helped the Cahns start up a dry goods store at 172 Main Street that ran for 50 years. The store featured men’s, women’s, and children’s furnishings and shoes. Their son, Dr. Simon Cahn had a dentistry practice on the second floor of the building for 45 years. Dr. Cahn and his wife Sadie Jane Effron Cahn were prominent members of the Beacon business community, both serving on the board of directors for the Fishkill National Bank. Dr. Cahn was president of the Beacon Hebrew Alliance in the early 1950s when the synagogue underwent a major renovation. Sadie Cahn lived to be 101, and was at one point the oldest living alumna of Vassar College. She also served as president of the Sisterhood of BHA and on the board of directors of Highland Hospital. After many changes of businesses, Samuel Cahn’s name is still inscribed in the tiled entryway of 172 Main Street.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Beacon Hebrew Alliance",
                    <br />,
                    "(3) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop3_Schuman"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Schuman’s Army & Navy Stores" />
                <Breadcrumb stopno="3" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop3_Schuman_1.jpg",
                      alt: "",
                      caption: "A portrait of Sidney Schuman, c. 1920s (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop3_Schuman_2.jpg",
                      alt: "",
                      caption:
                        "The storefront of Schuman’s Army & Navy Store at 215 Main Street, c. 1965 (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop3_1.jpg",
                      alt: "",
                      caption:
                        "The storefront of 215 Main Street in April 4, 2022 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop3_Schuman_4.jpg",
                      alt: "",
                      caption:
                        "Beacon Free Press article announcing the closing of Schuman’s in August 7, 1991. From left: John, Mike, and Sydell (Syd) Ligotino (3)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Schuman’s Army & Navy Stores"
                  text={[
                    "Owner: Sidney & Rose Schuman, later their daughter Sydell ran the store with her husband John Ligotino",
                    <br />,
                    "Date established: 1920",
                    <br />,
                    "Original Address: 215 Main Street",
                    "Second Address: 324 Main Street",
                    <br />,
                    <br />,
                    "Schuman’s Army and Navy Stores sold everything from boots to overalls to fishing tackle. The owner/proprietor Sidney Schuman was a pillar of both the Beacon Business community and the Beacon Jewish community. He served on the board of the Beacon Hebrew Alliance and was the co-chair of the building committee in 1928-29, responsible for raising funds to build the new synagogue. Before the synagogue was built, Beacon Hebrew Alliance would hold its services and meetings in Schuman’s store. He also was secretary of the Beacon Retail Group, a life-member of the Tompkins Hose Company, and served on the Beacon Board of Education. After Sid retired to Florida with his wife Rose, their daughter Sydell took over the store and ran it with her husband John Ligotino at a new location at 324 Main Street until 1991.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(3) Beacon Free Press",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop3_Vogel"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Vogel Pharmacy" />
                <Breadcrumb stopno="3" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop3_Vogel_1.jpg",
                      alt: "",
                      caption:
                        "Newspaper article about Vogel Pharmacy’s move from Bank Square to 234 Main in 1956 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop3_Vogel_2.jpg",
                      alt: "",
                      caption: "Interior of Vogel Pharmacy c. 2005. (1)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop3_Vogel_3.jpg",
                      alt: "",
                      caption:
                        "Max Vogel (far right) at the opening of Beacon’s Golden Jubilee Headquarters on March 10, 1963 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Vogel Pharmacy"
                  text={[
                    "Owner: Max Vogel",
                    <br />,
                    "Date established: 1937",
                    <br />,
                    "Original Address: Bank Square",
                    "Second Address: 234 Main",
                    "Current Address: 1475 NY-9D, Wappingers Falls",
                    <br />,
                    <br />,
                    "Vogel Pharmacy was a mainstay in Beacon for over seventy-five years, first starting out on Bank Square, and then moving in 1956 to 234 Main Street where it stayed well into the 2010s. Today it still operates as a community pharmacy in the Dutchess Stadium complex in Wappingers. Max Vogel, the original owner, and his wife Jeanette were members of the Beacon Hebrew Alliance. They were also very active in the civic life of Beacon, including serving on committees for local schools and participating in the Southern Dutchess Singers, the Civic Music Society, Highland Hospital, and Beacon’s Golden Jubilee celebration (50th anniversary) in 1963. In 1968, the Vogels sold the business and retired to Florida.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Poughkeepsie Journal",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop5_Ritter"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Beacon Laundry and Ritter Insurance Office" />
                <Breadcrumb stopno="5" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop5_Ritter_1.jpg",
                      alt: "",
                      caption:
                        "Pacha the barber in front of his barber shop at 4-6 S. Chestnut Street where the Beacon Laundry and Louis Ritter Insurance Agency used to be, March 6, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop5_Ritter_2.jpg",
                      alt: "",
                      caption:
                        "The inside of the Beacon Laundry c. 1925 with owners Sarah and Jacob Ritter on the left and their employees on the right. (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop5_Ritter_3.jpg",
                      alt: "",
                      caption: "Sarah and Jacob Ritter in the 1940s. (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop5_Ritter_4.jpg",
                      alt: "",
                      caption:
                        "Second Lt. Louis Ritter served in both the Army and Air Force for five years during WWII, c. 1943 (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop5_Ritter_5.jpg",
                      alt: "",
                      caption:
                        "Snapshots of Louis Ritter (center) and the employees of his insurance agency, c. 1990 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Beacon Laundry and Ritter Insurance Office"
                  text={[
                    "Owner: Jacob and Sarah Ritter, later son Louis Ritter",
                    <br />,
                    "Date established: 1920's",
                    <br />,
                    "Address: 4-6 S. Chestnut Street",
                    <br />,
                    <br />,
                    "Jacob and Sarah Ritter were founders of the Beacon Hebrew Alliance, and ran the Beacon Laundry at 4-6 S. Chestnut Street for over twenty years. The operation had seven to twelve employees running the steam-powered industrial machines. Over time, the Ritters expanded into real estate development, buying up all the buildings on this block from Lord of the Strings (8 S. Chestnut) to Beans Cat Cafe (325 Main). They also built the M.H. Fishman Department Store building at S. Cedar and Main, which they sold in 1971 to the Howland Public Library.",
                    <br />,
                    <br />,
                    "After the laundry closed, their son Louis Ritter ran an insurance agency out of 4-6 S. Chestnut for thirty years. A captain in the Air Force during WWII, Louis Ritter was active in business and civic affairs in Beacon serving as founder and life member of Jewish War Veterans, Herman Siegel Post 625, State Life Membership Chairman of the Builders Association of the Hudson Valley, and on the Dutchess County Chamber of Commerce. Today, the Ritter family still owns the buildings on this block, and are proud to support Beacon’s local businesses and artisans as well as the Jewish community at BHA.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) courtesy of Frank Ritter",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop5_Rosenblum"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Rosenblum’s Shoes" />
                <Breadcrumb stopno="5" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop5_Rosenblum_1.jpg",
                      alt: "",
                      caption:
                        "Mollie and Sam Rosenblum at the wedding of two BHA members, March 22, 1964 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop5_Rosenblum_2.jpg",
                      alt: "",
                      caption:
                        "Rosenblum Shoes (second store from left) at 328 Main c. 1965 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop5_Rosenblum_3.jpg",
                      alt: "",
                      caption:
                        "Article in the Poughkeepsie Journal about the fire that destroyed Rosenblum Shoes, February 22, 1967 (3)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop5_Rosenblum_4.jpg",
                      alt: "",
                      caption:
                        "The northwest corner of Eliza Street and Main in 2022 is all new construction since the fire in 1967 - April 2, 2022 (4)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Rosenblum’s Shoes"
                  text={[
                    "Owner: Samuel Rosenblum",
                    <br />,
                    "Date established: 1930's",
                    <br />,
                    "Original Address: 331 Main Street",
                    <br />,
                    "Second Address: 328 Main Street",
                    <br />,
                    <br />,
                    "Rosenblum’s Shoes was started in the early 1930s by Samuel Rosenblum, a former President of the Beacon Hebrew Alliance. The store’s first location was in the Ritter building at 331 Main Street, but moved across the street and one block east in 1949 to 328 Main. Rosenblum’s shoes operated for over thirty years when sadly it was destroyed by fire on February 22, 1967. The fire started in the back of the restaurant at 330 Main and spread quickly to Rosenblum’s next door and the Mid-Town Market on the other side. It took two hundred firefighters seven hours in the frigid cold to put out the fire. All the buildings from 328 Main to the corner of Eliza Street were rebuilt after the fire.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) courtesy of Ian Green",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Poughkeepsie Journal",
                    <br />,
                    "(4) Frank Ritter, Frank Ritter Photography",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop5_Lewis"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Lewis Grocery" />
                <Breadcrumb stopno="5" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop5_Lewis_1.jpg",
                      alt: "",
                      caption:
                        "The Mid-Town Market at right is where the Lewis grocery was once located, c. 1965.(1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop5_Lewis_2.jpg",
                      alt: "",
                      caption:
                        "Martha and Abraham Lewis attended their son Simon’s graduation from the University of Pennsylvania School of Dental Medicine, c. 1939 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop5_Lewis_3.jpg",
                      alt: "",
                      caption: "Portrait of Abraham Lewis, date unknown  (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop5_Lewis_4.jpg",
                      alt: "",
                      caption:
                        "Holiday dinner at the Lewis family home on 36 East Main Street, c. 1952. From left: Martha Lewis, daughter Ethel Green, son-in-law Ralph Green (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop5_Lewis_4.jpg",
                      alt: "",
                      caption:
                        "Dr. Simon Lewis served in the 87th Infantry Division in the Army Dental Corps, c. 1943. (1)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Lewis Grocery"
                  text={[
                    "Owner:  Abraham and Martha Lewis",
                    <br />,
                    "Date established: 1930's",
                    <br />,
                    "Original Address: 334 Main Street",
                    <br />,
                    <br />,
                    "Abraham and Martha Lewis were devout members of the Beacon Hebrew Alliance who epitomized the hardworking American immigrant experience. Abraham Lewis was born in 1884 in Smarhn, Russia, which is now part of Belarus. He arrived in New York City at the age of 20, and soon moved to Newburgh. There he met Martha Yasgoor, and they married and had three children. By the 1910’s Lewis was working as a foreman in a hat factory in Beacon. The family moved to Beacon in the 1920s, eventually taking up residence at 36 East Main (see stop #10). After the factory closed during the Depression, the Lewis’s opened a grocery at 334 Main Street. When their son Dr. Simon Lewis enlisted in the Army and went overseas during WWII, Abraham Lewis pledged he would donate a torah to BHA if his son made it safely home. Simon did return, a decorated war hero, and Abraham donated a torah to BHA that is still in use today.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) courtesy of Albert Green",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop6_Miller"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Fannie Miller’s Store" />
                <Breadcrumb stopno="6" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop6_Miller_1.jpg",
                      alt: "",
                      caption:
                        "The view of 403 Main Street where Fannie Miller’s clothing store used to be, March 11, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop6_Miller_2.jpg",
                      alt: "",
                      caption:
                        "From a plaque that hangs at BHA honoring Ladies Aid Society President Fannie Miller and other members who helped to build the synagogue in 1929 - May 20, 2021 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop6_Miller_3.jpg",
                      alt: "",
                      caption:
                        "Co-chairs of the building fundraising committee for BHA. From left: Sidney Schuman and Fannie Miller  (3)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop6_Miller_4.jpg",
                      alt: "",
                      caption:
                        "The window dedicated to Mrs. Fannie Miller that hangs in the upstairs sanctuary at BHA - 2012 (4)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Fannie Miller’s Store"
                  text={[
                    "Owner: Fannie Miller",
                    <br />,
                    "Date established: 1920's",
                    <br />,
                    "Original Address: 403 Main Street",
                    <br />,
                    <br />,
                    "Fannie Miller was a long-time President of the Beacon Hebrew Ladies Aid Society, which was a separate entity from Beacon Hebrew Alliance composed of Jewish women who devoted themselves to raising funds for Jewish causes and charitable giving in the community. Widowed at a young age, and left to raise her son alone, Miller’s strong character and business acumen was inspirational to the younger women in the community. In the late 1920s, when BHA needed funds to build its synagogue, Miller co-chaired the fundraising committee with BHA trustee Sidney Schuman (see stop #3). Together they worked their contacts in the Jewish business community to raise over $6,000 (equivalent to almost $100,000 today) for the construction. Miller was the founder of the BHA Chapter of Hadassah (the Women’s Zionist Organization of America) and there is a stained glass window in her honor in the upstairs sanctuary of BHA, which she helped to build.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography ",
                    <br />,
                    "(2) Ellen Pearson Gersh",
                    <br />,
                    "(3) Beacon Historical Society",
                    <br />,
                    "(4) courtesy of Beacon Hebrew Alliance",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop6_RogenGinsberg"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Dental Office of Dr. Rogen and Dr. Ginsberg" />
                <Breadcrumb stopno="6" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop6_RogenGinsberg_1.jpg",
                      alt: "",
                      caption:
                        "This Victorian house at 11 Fishkill Avenue was the dental office of Dr. Louis Rogen and Dr. Harold Ginsberg from approx 1950-1975 - March 13, 2022 (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop6_RogenGinsberg_2.jpg",
                      alt: "",
                      caption:
                        "The wedding of Dr. Louis Rogen and Miriam Pomeranz on February 5, 1928 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop6_RogenGinsberg_3.jpg",
                      alt: "",
                      caption:
                        "Lt. Dr. Louis Rogen reporting for duty in the Army Dental Corps during WWII, c. 1943. (3)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop6_RogenGinsberg_4.jpg",
                      alt: "",
                      caption:
                        "Dr. Louis Rogen making a toast at BHA, c. 1950s. (2)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop6_RogenGinsberg_5.jpg",
                      alt: "",
                      caption:
                        "Dr. Harold Ginsberg’s graduation picture from University of Pennsylvania Dental School, c. 1956 (4)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop6_RogenGinsberg_6.jpg",
                      alt: "",
                      caption:
                        "The Ginsberg family at son Stuart’s Bar Mitzvah, December 28, 1968 (4)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop6_RogenGinsberg_7.jpg",
                      alt: "",
                      caption: "Dr. Ginsberg in his dental office, c. 1976 (4)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Dental Office of Dr. Rogen and Dr. Ginsberg"
                  text={[
                    "Owner: Dr. Louis Rogen, later Dr. Harold Ginsberg",
                    <br />,
                    "Date established: 1928",
                    <br />,
                    "Original Address: 476 ½ Main",
                    <br />,
                    "Second Address: 398 ½ Main",
                    <br />,
                    "Third Address: 11 Fishkill Ave",
                    <br />,
                    "Fourth Address: 333 Fishkill Ave",
                    <br />,
                    <br />,
                    "Dr. Louis Rogen was the youngest of six children of Russian Jewish immigrants, and grew up in a hardworking Jewish neighborhood on New York’s Lower East Side. A bright student, Rogen advanced quickly through primary school and went on to attend the New York Dental School (later merged with NYU). During the summers he worked upstate and would visit his older sister Lena in Beacon. On one of those visits he met Miriam Pomeranz, whose father Hyman owned Pomey’s Hotel and Bar (see stop #3). Rogen moved to Beacon in 1927 right after graduating Dental School, married Miriam, and opened his dental practice on Main Street all within two months. Rogen was President of the Beacon Hebrew Alliance twice in 1930 and 1939, and was a life-long member of the Beacon Elks Lodge. He served in WWII as a Captain in the Army Air Corps. After building a large and devoted clientele, he retired in 1962, leaving his practice to fellow BHA member Dr. Harold Ginsberg.",
<<<<<<< HEAD

                    "Dr. Ginsberg was born in Beacon in 1930 in Highland Hospital. His paternal grandparents Max and Bertha Ginsberg were founders of the Beacon Theatre (see stop #7). After attaining his dental degree from University of Pennsylvania and serving on an Air Force base in Ardmore, Oklahoma during the Korean War, in 1959 he moved with his wife Phyllis and his growing family back to Beacon, with aspirations to open a dental practice. As luck would have it, Dr. Rogen was looking to retire, and Dr. Ginsberg transitioned to take over the practice. Dr. Ginsberg practiced dentistry in Beacon for fifty years, and many of his clients, who had been introduced to him by Dr. Rogen, stayed with him his entire career. Dr. Ginsberg and his wife Phyllis were also very involved in BHA. He served as President of BHA in the late 1960s, and Phyllis served in the Sisterhood of BHA. Dr. Ginsberg passed away in April 2023 at the age of 92. Through his stories and photos, he has  contributed to preserving the history of the Jewish community here.",
=======
>>>>>>> main
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography ",
                    <br />,
                    "(2) courtesy of Karen Moses ",
                    <br />,
                    "(3) Beacon Historical Society",
                    <br />,
                    "(4) courtesy of Dr. Harold Ginsberg",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop6_Fisch"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Fisch’s Men’s Shop" />
                <Breadcrumb stopno="6" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop6_Fish_1.jpg",
                      alt: "",
                      caption:
                        "A profile on Abraham Fisch in the 1921 Fireman’s Parade Souvenir Program produced by the Beacon Journal (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop6_Fish_2.jpg",
                      alt: "",
                      caption:
                        "Advertisement for Fisch’s Mens Shop, c. 1930 (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop6_Fish_3.jpg",
                      alt: "",
                      caption: "Fisch’s clothing label, c. 1940s (3)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop6_Fish_4.jpg",
                      alt: "",
                      caption:
                        "Storefront of Fisch’s Mens Shop at 347 Main Street, c. 1960 (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop6_Fish_5.jpg",
                      alt: "",
                      caption:
                        "Storefront of Alan Fisch’s Beacon Sneaker, c. 1990 (3)",
                    },
                    {
                      id: 6,
                      imglink: "/images/stop6_Fish_6.jpg",
                      alt: "",
                      caption:
                        "Beacon Sneaker owner Alan Fisch and his wife inside their store, c. 1990 (3)",
                    },
                    {
                      id: 7,
                      imglink: "/images/stop6_Fish_7.jpg",
                      alt: "",
                      caption:
                        "The Fisch building at 347 and 349 Main Street in April 2022 (4)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Fisch’s Men’s Shop"
                  text={[
                    "Owners: Abraham Fisch, Samuel Fisch, Nathan Fisch, Alan Fisch",
                    <br />,
                    "Date established: 1919",
                    <br />,
                    "Original Address: 445 Main Street",
                    "Second Address: 347, 349, and 351 Main Street (Fisch Building)",
                    <br />,
                    <br />,
                    "Abraham Fisch immigrated to the United States from Germany and founded Fisch’s Men Shop, a suit tailor, in 1919 by leasing a small shop at 455 Main St. He worked to establish the Beacon Hebrew Alliance in 1921 and to fund the building of the current temple in 1929 as a charter member. Abraham passed the shop to his son, Samuel Fisch, and nephew, Nathan Fisch.",

                    "Sam and Nate built the Fisch Building in 1955 at 347, 349, and 351 Main St. In 1981, after Nate moved to Texas and as demand shifted to more casual styles, Sam converted Fisch’s Men Shop to Fisch’s for Jeans. In 1984, Alan Fisch carried on the third generation of the family business by establishing Beacon Sneaker in the adjacent store at 351 Main Street focused on sporting goods and sneakers. Both Fisch stores operated next to each other, complimenting each other until Sam Fisch retired in 1990. Then Fisch’s for Jeans merged with Beacon Sneaker and the family renovated the larger store at 347 to serve clothing, sporting goods, and sneakers all under one roof until 1992.",

                    "After closing their doors on Main Street, the Fisch Family enterprise went on with Alan creating a swimming pool company that operated until his death and his son Jason Fisch starting a nationally recognized technology company. The family still owns the Fisch Building, which is currently leased to other tenants.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon Historical Society",
                    <br />,
                    "(2) Beacon News",
                    <br />,
                    "(3) courtesy of Jason Fisch",
                    <br />,
                    "(4) Anna Brady Marcus",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop7_BeaconTheather"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Beacon Theatre" />
                <Breadcrumb stopno="7" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop7_BeaconTheather_1.jpg",
                      alt: "",
                      caption:
                        "Max Ginsberg (left) and other officials who built the Beacon Theatre, August 7, 1934. (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop7_BeaconTheather_2.jpg",
                      alt: "",
                      caption: "Marquee of the Beacon Theatre, c. 1950. (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop7_BeaconTheather_3.jpg",
                      alt: "",
                      caption:
                        "Ad for movies at the Beacon Theatre, c. 1930. (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop7_BeaconTheather_4.jpg",
                      alt: "",
                      caption:
                        "Ad for the Beacon Theatre Grand Opening, July 31, 1934. (1)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop7_BeaconTheather_5.jpg",
                      alt: "",
                      caption:
                        "Excerpt from Beacon Theatre weekly program bulletin, September 4, 1949 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Beacon Theatre"
                  text={[
                    "Owner: Max Ginsberg with sons Benjamin and Julius Ginsberg and later grandson Bernard Ginsberg",
                    <br />,
                    "Date established: 1934s",
                    <br />,
                    "Address: 445 Main Street",
                    <br />,
                    <br />,
                    "The Beacon Theatre was built in 1934 by Max Ginsberg and run by his sons Benjamin, Murray and Julius. Ginsberg’s grandson, Dr. Harold Ginsberg recalled the theater in an oral history interview conducted in 2017: “It was described as the movie palace between Yonkers and Albany, or maybe Yonkers and Hudson.  It opened in 1934, and it was quite luxurious. We changed the program three times a week; the same movie would play Sunday, Monday, and Tuesday.  Wednesday was a separate day; lesser movies, but you'd have something like Bank Night, or Give Away Dishes, or Give Away Encyclopedias.  And then the next was Thursday, Friday, and Saturdays. At the time -- I'm going back to the '40s and '50s -- motion picture theaters were very, very popular.  It was a major form of entertainment, besides people going to a bar.”",
                    <br />,
                    <br />,
                    "The Beacon Theatre ran until the 1960s when television had replaced movies as the primary form of entertainment for Americans. Today, the new Story Screen Theater has replicated the marquee of the original Beacon Theatre, and has brought the cinematic experience back to Main Street in Beacon.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Beacon News ",
                    <br />,
                    "(2) Beacon Historical Society",
                  ]}
                />
              </div>
            }
          ></Route>
          <Route
            path="/stop8_Bernstein"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Bernstein’s Toy and Novelty Store" />
                <Breadcrumb stopno="8" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop8_Bernstein_1.jpg",
                      alt: "",
                      caption:
                        "Beacon Falls Cafe stands today at 472 Main. (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop8_Bernstein_2.jpg",
                      alt: "",
                      caption:
                        "Max Bernstein in his auto supply store, which preceded his toy and novelty store, c. 1930. (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop8_Bernstein_3.jpg",
                      alt: "",
                      caption:
                        "Portrait of Max Bernstein as a soldier in WWI, c. 1918 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop8_Bernstein_4.jpg",
                      alt: "",
                      caption:
                        "Still from one of Max Bernstein’s WWII home movies of Beacon GI’s and draftees, c. 1942 (3)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop8_Bernstein_5.jpg",
                      alt: "",
                      caption:
                        "A ticket for one of Max Bernstein’s Moving Picture Parties featuring WWII Draftees from Beacon, February 5, 1943 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Bernstein’s Toy and Novelty Store"
                  text={[
                    "Owner: Max Bernstein",
                    <br />,
                    "Date established: 1940",
                    <br />,
                    "Original Address: 340 Main Street",
                    <br />,
                    "Second Address: 472 Main Street",
                    <br />,
                    <br />,
                    "Max Bernstein ran an auto supply store on Main Street, and later had a toy store and wholesale distribution business for thirty years at 340 Main and 472 Main. Max also served in WWI and is noted for filming a series of home movies of Beacon draftees leaving to fight in WWII. He was the son of Ausher Bernstein and brother of Nathan Bernstein who owned Bernstein and Sons Department store on the west side of Main Street (see stop #2). Max was a member of many fraternal organizations including the OBED Lodge of Masons in Poughkeepsie, past commander of the William B. Wilson Post 666 of the Veterans of Foreign Wars and past commander of Post 203 of the American Legion in Beacon. The Beacon Historical Society has a number of his home movies of Beacon’s WWII soldiers in its collections.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Max Bernstein courtesy of Beacon Historical Society",
                  ]}
                />
              </div>
            }
          ></Route>

          <Route
            path="/stop9_Tailors"
            element={
              <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
                <Header text="Tailors near North and Main" />
                <Breadcrumb stopno="9" />
                <Slider
                  sliderdata={[
                    {
                      id: 1,
                      imglink: "/images/stop9_Tailors_1.jpg",
                      alt: "",
                      caption:
                        "Beacon Falls Cafe stands today at 472 Main. (1)",
                    },
                    {
                      id: 2,
                      imglink: "/images/stop9_Tailors_2.jpg",
                      alt: "",
                      caption:
                        "Max Bernstein in his auto supply store, which preceded his toy and novelty store, c. 1930. (2)",
                    },
                    {
                      id: 3,
                      imglink: "/images/stop9_Tailors_3.jpg",
                      alt: "",
                      caption:
                        "Portrait of Max Bernstein as a soldier in WWI, c. 1918 (2)",
                    },
                    {
                      id: 4,
                      imglink: "/images/stop9_Tailors_4.jpg",
                      alt: "",
                      caption:
                        "Still from one of Max Bernstein’s WWII home movies of Beacon GI’s and draftees, c. 1942 (3)",
                    },
                    {
                      id: 5,
                      imglink: "/images/stop9_Tailors_5.jpg",
                      alt: "",
                      caption:
                        "A ticket for one of Max Bernstein’s Moving Picture Parties featuring WWII Draftees from Beacon, February 5, 1943 (2)",
                    },
                  ]}
                />
                {/* <AudioPlayer audiofile="/audios/S1_Snidaman.mp3" /> */}
                <Description
                  header="Tailors near North and Main"
                  text={[
                    "Owner: Max Bernstein",
                    <br />,
                    "Date established: 1940",
                    <br />,
                    "Original Address: 340 Main Street",
                    <br />,
                    "Second Address: 472 Main Street",
                    <br />,
                    <br />,
                    "Max Bernstein ran an auto supply store on Main Street, and later had a toy store and wholesale distribution business for thirty years at 340 Main and 472 Main. Max also served in WWI and is noted for filming a series of home movies of Beacon draftees leaving to fight in WWII. He was the son of Ausher Bernstein and brother of Nathan Bernstein who owned Bernstein and Sons Department store on the west side of Main Street (see stop #2). Max was a member of many fraternal organizations including the OBED Lodge of Masons in Poughkeepsie, past commander of the William B. Wilson Post 666 of the Veterans of Foreign Wars and past commander of Post 203 of the American Legion in Beacon. The Beacon Historical Society has a number of his home movies of Beacon’s WWII soldiers in its collections.",
                  ]}
                  hasBusiness={false}
                />
                <PhotoCredits
                  credits={[
                    "Photo Credits",
                    <br />,
                    "(1) Frank Ritter, Frank Ritter Photography",
                    <br />,
                    "(2) Beacon Historical Society",
                    <br />,
                    "(3) Max Bernstein courtesy of Beacon Historical Society",
                  ]}
                />
              </div>
            }
          ></Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
