import { Box, Grid } from "@mui/material";
import SectionTitle from "../../../components/sectionTItle/sectionTItle";
import Client from "./Client";

const clientData = [
  {
    name: "Nash Patrik",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/sj0WcCV/customer-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    name: "Miriam Barron",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/Y2ZyrQ1/customer-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    name: "Bria Malone",
    title: "CEO, Manpol",
    img: "https://i.ibb.co/w6dGjxx/customer-3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
];
const Clients = () => {
  return (
    <>
      <Box
        sx={{
          py: "100px",
        }}
      >
        <SectionTitle title="Clients" colored="Feedback"></SectionTitle>
      </Box>
      <Box>
        <Grid container spacing={3} justifyContent='center'>
          {clientData.map((client, i) => (
            <Grid item key={i}>
              <Client client={client}></Client>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Clients;
