/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  createStyles,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: "100px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Creative Agency
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Get Start?
            </Typography>
            <Button
              sx={{
                bgcolor: "primary.green",
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: 3,
            bgcolor: "rgba(255, 255, 255, 0.7)",
          }}
        />

        <Grid
          container
          sx={{
            justifyContent: { xs: "center", md: "space-between" },
            gap: "40px",
            my: 4,
          }}
        >
          <Grid
            item
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: { xs: "center", md: "flex-start" },
              p: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                borderBottom: "1px solid #fff",
              }}
            >
              Quick Links
            </Typography>
            <Typography>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Insurance</Typography>
            <Typography>Privacy Policy</Typography>
          </Grid>
          <Grid
            item
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: { xs: "center", md: "flex-start" },
              p: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                borderBottom: "1px solid #fff",
              }}
            >
              Our Service
            </Typography>
            <Typography>Life insurance</Typography>
            <Typography>Car insurance</Typography>
            <Typography>Health insurance</Typography>
            <Typography>House insurance</Typography>
          </Grid>
          <Grid
            item
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: { xs: "center", md: "flex-start" },
              p: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                borderBottom: "1px solid #fff",
              }}
            >
              Help
            </Typography>
            <Typography>FAQs</Typography>
            <Typography>Contact Us</Typography>
          </Grid>
          <Grid
            item
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: { xs: "center", md: "flex-start" },
              p: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                borderBottom: "1px solid #fff",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Subscribe to our newsletter
            </Typography>
            <TextField
              id="standard-basic"
              label="Email address"
              variant="standard"
              sx={{
                width: "100%",
                my: 2,
                "& .MuiInput-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  "&::before": {
                    borderColor: "primary.green",
                  },
                  "&::after": {
                    borderColor: "#fff",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "rgba(255, 255, 255, 0.7)" },
              }}
            />
            <Box>
              <FacebookIcon
                sx={{
                  color: "#fff",
                  mr: 2,
                }}
              />
              <TwitterIcon
                sx={{
                  color: "#fff",
                  mr: 2,
                }}
              />
              <InstagramIcon
                sx={{
                  color: "#fff",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "300",
            padding: "20px 0",
            color: "#fff",
          }}
        >
          @2023 creativeagency.com - All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
