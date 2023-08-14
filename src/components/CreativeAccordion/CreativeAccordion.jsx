import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expandMoreIcon">
        <AddIcon></AddIcon>
      </div>
      <div className="removeExpandIcon">
        <RemoveIcon></RemoveIcon>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CreativeAccordion = ({title, description}) => {
  return (
    <Box>
      <Accordion
        sx={{
          boxShadow: "none",
          border: "1px solid #e5eaf4",
          p: 2,
          '& .Mui-expanded': {
            '& .expandMoreIcon': {
                display: 'none',
            },
            '& .removeExpandIcon': {
                display: 'block',
                '& svg': {
                    color: 'primary.green',
                }
            },
          }
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            "& .removeExpandIcon": {
                display: "none",
            },
            "& p": {
              color: "primary.main",
              fontWeight: "bold",
            },
            "& .Mui-expanded": {
              "& p": {
                color: "primary.green",
              },
            },
          }}
        >
          <Typography sx={{
            fontSize: '18px',
          }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#5a7184",
            }}
          >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CreativeAccordion;
