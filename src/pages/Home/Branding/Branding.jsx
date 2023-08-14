import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Branding = () => {
  return (
    <Container>
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "100px",
        margin: "4rem 0",	
      }}>
        <Stack spacing={2} sx={{
          width: { xs: "100%", md: "50%"},
          alignItems: { xs: "center", md: "flex-start"},
          textAlign: { xs: "center", md: "left"},
          marginBottom: { xs: "4rem", md: "0"}
        }}>
          <Typography sx={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "60px",
          }}>Let’s Grow Your <br /> Brand To The <br /> Next Level</Typography>
          <Typography sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </Typography>
          <Button sx={{
            width: "200px",
          }}>Hire Us</Button>
        </Stack>
        <Box sx={{
          width: "50%",
          display: { xs: "none", sm: 'none', md: "block"}
        }}>
          <img
            src="https://i.ibb.co/L6DGdtJ/Frame.png"
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Branding;
