import "./Hero.css";
import { Box, Typography } from "@mui/material";
import React from "react";
import hero1 from "../Assets/Images/meatHome.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: " #FFFFFF80",
          }}
          gutterBottom
        >
          <p className="welcome">Welcome to
            <br />
            Food Cuisines </p>


        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "gray" }}
        >
          <p className="first">Let’s Cook, Share, and Celebrate Food Together!</p>
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "gray" }}
        >
          <p className="second">Welcome to Food Cuisines, your go-to source for discovering and sharing amazing recipes from around the world.  Whether you're looking to cook something new or recreate a classic dish, we provide a diverse range of recipes with step-by-step instructions, nutritional details, and much more.</p>
        </Typography>
      </Box>
    </Box>
  );
}
