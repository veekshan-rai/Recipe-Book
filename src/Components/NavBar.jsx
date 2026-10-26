import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/food.jpg";
import Button from '@mui/material/Button';

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Recipe", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div id="foot3">
    <AppBar
      position="static"
      elevation={1}
      sx={{ backgroundColor: "#dbcbab", p: 0 }}
    >

      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2, alignItems: "center" }}>
            <img
              style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }}
              src={logo}
              alt="Food Cuisines logo"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, alignItems: "center" }}>
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
              src={logo}
              alt="Food Cuisines logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 0,
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: '#000000b8',
                  color: 'white',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  mr: 2,
                  px: 2.5,
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#000000',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default NavBar;
