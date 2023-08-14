/* eslint-disable react/prop-types */
import { Avatar, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Client = ({ client }) => {
  return (
    <Card sx={{ maxWidth: 370, border: '1px solid #BFBFBF' }}>
      <CardContent>
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
        }}>
          <Avatar sx={{
            width: 64,
            height: 64,
          }}>
            <img src={client.img} style={{
                width: '100%',
            }} alt="" />
          </Avatar>
          <Box>
            <Typography variant="h5" component="div">
              {client.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {client.title}
            </Typography>
          </Box>
        </Box>
        <Typography>{client.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Client;
