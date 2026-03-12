import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/img8.jpg"
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <div style={{backgroundImage:`url(${logo})`,height:"100px",backgroundPosition:'center',backgroundSize:'cover',width:'1585px',marginLeft:'-80px'}}>
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}
        <Grid item xs={12} md={6}>
          <img style={{ width: "90px", color: "black",borderRadius:'30px' }} src={""} alt="" />
          <Typography variant="body1" sx={{ mt: 1 }}>
         
      <Button variant="contained" disableElevation style={{marginLeft:'770px',position:'relative' ,top:'-20px',display:'flex',backgroundColor:'green',width:'170px'}}>
      <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                mb: 1,
                
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Tap to Top
            </Link>
            </Box>
    </Button>
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}>
          
        </Grid>
      </Grid>
      </div>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} title. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
