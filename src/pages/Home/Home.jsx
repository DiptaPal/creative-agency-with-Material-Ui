import { Container } from "@mui/material";
import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import OurWorks from "./OurWorks/OurWorks";
import Clients from "./Clients/Clients";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <>
      <Container>
        <Brands></Brands>
        <Services></Services>
        <OurWorks></OurWorks>
        <Clients></Clients>
      </Container>
      <Contact></Contact>
      <Container>
        <Faq></Faq>
      </Container>
    </>
  );
};

export default Home;
