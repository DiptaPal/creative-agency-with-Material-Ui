/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, useTheme } from "@mui/material";

const CreativeCard = ({item}) => {
    const theme = useTheme()
  return (
    <Card sx={{ maxWidth: '345px', p: 2, borderRadius: 2, border: '1px solid #BFBFBF', boxShadow: 'none' }}>
      <CardMedia
        component="img"
        height='220'
        alt="creative card"
        sx={{borderRadius: 2 }}
        image={item}
      />
      <CardContent
        sx={{
          padding: 0,
          pt: 4,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Typography gutterBottom variant="body2" component="div">
          Business
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="text.main">
            Business Research
          </Typography>
          <IconButton sx={{
            color: "primary.main",
            border: `2px solid ${theme.palette.primary.main}`,
            width: 30,
            height: 30,
          }}>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
