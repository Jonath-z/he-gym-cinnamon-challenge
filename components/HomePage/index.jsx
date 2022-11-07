import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import AboutUs from "./AboutUs";
import AgileTeam from "./AgileTeam";
import ArticleContainer from "./ArticlesContainer";
import Collegues from "./Collegues";
import Communication from "./Communication";
import Growing from "./Growing";
import Hero from "./Hero";
import Locations from "./Locations";
import Prefooter from "./Prefooter";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <ProjectSection />
      <ServiceSection />
      <AgileTeam />
      <Communication />
      <AboutUs />
      <Collegues />
      <Growing />
      <Locations />
      <ArticleContainer />
      <Prefooter />
      <Footer />
    </main>
  );
};

export default HomePage;
