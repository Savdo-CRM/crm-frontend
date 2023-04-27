import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import Header from "../../../Components/Header/Header";

const Home = () => {
  return (
    <div className="flex items-start bg-sidebar w-screen">
      <Sidebar />
      <div className="flex flex-col w-full px-6">
        <Navbar />
        <Header />
        <div className="flex-1 h-screen">Home Page</div>
      </div>
    </div>
  );
};

export default Home;
