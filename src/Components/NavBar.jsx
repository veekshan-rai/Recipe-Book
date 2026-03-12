import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
//import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/food.jpg";

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Recipe", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1}}>
            <img
              style={{ width: "50px", color: "black" ,borderRadius:'50px',height:'50px',marginLeft:'-10pxpx'}}
              src={logo}
              alt="recipe"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src={"logo.png"}
              alt="logo"
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
              <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
              component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                style={{marginRight:'40px'}}>
              <Button style={{backgroundColor:'#000000b8',fontFamily:'itelic',color:'white'}}>{page.title}</Button>
          </ButtonGroup>
              
             
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default NavBar;
