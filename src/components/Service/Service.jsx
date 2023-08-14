/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Service = ( {service} ) => {
  return (
    <Card sx={{ maxWidth: 345, p: '34px', boxShadow: 'none', '&:hover': {
        boxShadow: '0px 0px 10px 0 rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    } }}>
      <CardMedia sx={{ 
            width: 'auto',
            mx: 'auto',
       }} image={service.img} height='140' component="img" title="green iguana" />
      <CardContent sx={{textAlign: "center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
