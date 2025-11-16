import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import FeaturedHighlights from "./FeaturedHighlights";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <FeaturedHighlights />
        <PopularCategories />
        <PopularCompanies />
        <Testimonials />
        <CTASection />
      </section>
    </>
  );
};

export default Home;
