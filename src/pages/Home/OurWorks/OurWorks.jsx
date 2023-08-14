import { Box, Grid, IconButton, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import SectionTitle from "../../../components/sectionTItle/sectionTItle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { cardData } from "./cardData";

const OurWorks = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle
          title="Here are some of"
          colored="our works"
          sx={{
            textAlign: "left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Tabs
            onChange={handleChange}
            value={value}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                color: "#7AB259",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile App" />
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <IconButton
                sx={{
                  border: theme => `1px solid ${ value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                  mr: 2,
                }}
                onClick={() => setValue(value - 1)}
                disabled={value === 0}
              >
                <ArrowBackIcon></ArrowBackIcon>
              </IconButton>
              <IconButton
                sx={{
                  border: theme => `1px solid ${ value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                }}
                onClick={() => setValue(value + 1)}
                disabled={value === 2}
              >
                <ArrowForwardIcon></ArrowForwardIcon>
              </IconButton>
            </Box>
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "60px",
        }}
      >
        {/* card section */}
        <Grid container spacing={3} justifyContent='center'>
          {cardData[value].map((item, i) => (
            <Grid item key={i}>
                <CreativeCard item={item}></CreativeCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default OurWorks;
