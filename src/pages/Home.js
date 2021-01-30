import React from "react";
import Footer from "../components/common/Footer";
import CompanyDescription from "../components/CompanyDescription";
import Hero from "../components/Hero";
import OurCreations from "../components/OurCreations";

const Home = () => {
    return (
        <main>
            <Hero />
            <CompanyDescription />
            <OurCreations />
            <Footer />
        </main>
    );
};

export default Home;
