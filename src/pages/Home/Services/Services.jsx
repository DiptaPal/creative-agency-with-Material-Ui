import { Box, Grid } from "@mui/material";
import SectionTitle from "../../../components/sectionTItle/sectionTItle";
import Service from "../../../components/Service/Service";

const serviceImages = [
  {
    title: "Web & Mobile design",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    img: "https://i.ibb.co/rph0B6v/service1.png",
  },
  {
    title: "Graphic design",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    img: "https://i.ibb.co/vLQBwf1/service2.png",
  },
  {
    title: "Web development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    img: "https://i.ibb.co/GH0Lv1v/service3.png",
  },
  //  "https://i.ibb.co/rph0B6v/service1.png",
  //  "https://i.ibb.co/vLQBwf1/service2.png",
  //  "https://i.ibb.co/GH0Lv1v/service3.png",
  //  'https://i.ibb.co/HqX5j8B/service4.png',
  //  'https://i.ibb.co/KmJR5YQ/service5.png',
];

const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored="services" />
      <Grid
        container
        spacing={2}
        sx={{
          my: "70px",
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {serviceImages.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
