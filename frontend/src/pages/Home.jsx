import { Helmet } from "react-helmet-async";
import About from "../components/about/About";
import Amortization from "../components/amortization/Amortization";
import Hero from "../components/hero/Hero";
import Loan from "../components/loan/Loan";
import Pricing from "../components/pricing/Pricing";
import Services from "../components/services/Services";
import Team from "../components/team/Team";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Hero />
      <Amortization />
      <About />
      <Team />
      <Services />
      <Pricing />
      <Loan />
    </>
  );
}

export default Home;
