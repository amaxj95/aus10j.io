import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./styles.css"; // Correct path to styles.css

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Section
        id="bartending"
        title="Book Bartending Events"
        description="Looking to elevate your private event? Book me for a personalized bartending experience."
        buttonText="Book Now"
        buttonAction={() => alert("Booking feature coming soon!")}
      />
      <Section
        id="fitness"
        title="Fitness"
        description="Get in shape for the Lacrosse and Soccer season! Lifting, conditioning, and skill position training."
        buttonText="Book Now"
        buttonAction={() => alert("Booking feature coming soon!")}
      />
      <Section
        id="recycling"
        title="Recycling Services"
        description="Need help with junk removal or valet trash service? We've got you covered. Explore our recycling solutions."
        buttonText="Visit Recycling Site"
        buttonAction={() => (window.location.href = "https://beltwayrecycling.com")}
      />
      <Section
        id="merch"
        title="Shop Merch"
        description="Grab exclusive merch and more. Show your support in style!"
        buttonText="Shop Merch"
        buttonAction={() => alert("Merch store coming soon!")}
      />
      <Section
        id="music"
        title="Stream my Music"
        description="Discover and purchase my latest tracks and albums. Stay tuned for upcoming releases!"
        buttonText="Shop Music"
        buttonAction={() => alert("Music store coming soon!")}
      />
      <Footer />
    </div>
  );
}

export default App;

