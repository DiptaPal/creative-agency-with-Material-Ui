import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBD062",
        margin: "100px 0",
        padding: "60px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row"},
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "start"},
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "40%"},
              display: "flex",
              gap: 2,
              flexDirection: "column",
              textAlign: { xs: "center", md: "start"},
            }}
          >
            <Typography
              sx={{
                fontSize: "34px",
                fontWeight: "bold",
              }}
            >
              Let us handle your project, professionally.
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%"},
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Your email address"
              variant="outlined"
              sx={{
                bgcolor: "white",
                border: "none",
                outlineColor: "white",
                borderRadius: 1,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Your name / company’s name"
              variant="outlined"
              sx={{
                bgcolor: "white",
                border: "none",
                outlineColor: "white",
                borderRadius: 1,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Your message"
              multiline
              rows={8}
              sx={{
                bgcolor: "white",
                border: "none",
                outlineColor: "white",
                borderRadius: 1,
              }}
            />
            <Button
              sx={{
                maxWidth: { xs: "100%", md: "200px" },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
