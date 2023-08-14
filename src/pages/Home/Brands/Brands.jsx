import { Box, styled } from "@mui/material";

const brands = [
  "https://i.ibb.co/LnMHZQZ/slack.png",
  "https://i.ibb.co/S7b1jsY/google.png",
  "https://i.ibb.co/HYPDt4k/uber.png",
  "https://i.ibb.co/S3QsQSd/netflix.png",
  "https://i.ibb.co/Rgk4W87/airbnb.png",
];

const BrandsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlock: "4rem",
    '& > img': {
        width: "160px",
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        '& > img': {
            marginBlock: "1rem",
        },
    }

}));

const Brands = () => {
  return (
    <BrandsWrapper>
      {brands.map((brand, index) => (
        <img key={index} src={brand} alt="brands" />
      ))}
    </BrandsWrapper>
  );
};

export default Brands;
