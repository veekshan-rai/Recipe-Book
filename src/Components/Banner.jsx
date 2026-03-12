import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/img7.jpg";
const Banner = () => {
  return (
    <Box
      sx={{
      
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url(${pic})`,
        backgroundRepeat:'repeat'
        
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Unlock the Secret to a Perfect Dinner
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
                color:'#00000090'
              }}
            >
              Try Our Classic Dish!
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
