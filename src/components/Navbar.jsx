import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Branding from "../pages/Home/Branding/Branding";

const drawerWidth = 280;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box variant="h6" sx={{ my: 2 }}>
        <img
          src="https://i.ibb.co/6mTfxCB/logo.png"
          alt=""
          style={{
            width: "150px",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        height: { xs: "auto", md: "90vh"},
        bgcolor: "#FBD062",
        clipPath: {xs: "none", md: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)"},
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "#FBD062",
            boxShadow: "none",
            mt: 2,
            position: "static",
          }}
        >
          <Container>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
                <img
                  src="https://i.ibb.co/6mTfxCB/logo.png"
                  alt=""
                  style={{
                    width: "150px",
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "primary.main" }}
                    variant="text"
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  sx={{
                    bgcolor: "primary.main",
                  }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

      </Box>
      <Branding />
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
