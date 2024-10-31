import React from "react";
import Reviews from "../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      {/* Commented out or remove the other components if they are causing placeholders */}
      {/* <Navhead /> */}
      {/* <About /> */}
      {/* <Menu /> */}
      {/* <WorkerFooter /> */}
      
      <Reviews />  {/* Only rendering the Reviews component */}
    </div>
  );
};

export default Home;
