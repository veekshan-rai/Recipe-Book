import "./Hero.css";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../Assets/Images/meatHome.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: 2,
        py: 6,
      }}
    >
      <Typography
        component="h1"
        className="welcome"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "36px", sm: "60px", md: "75px" },
          textTransform: "uppercase",
          color: "#ffffff",
          letterSpacing: "2px",
          mb: 2,
        }}
      >
        Welcome to
        <br />
        <span style={{ color: "#f39c12" }}>Food Cuisines</span>
      </Typography>

      <Typography
        component="h2"
        className="first"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "18px", sm: "24px" },
          color: "#e0e0e0",
          mb: 2,
        }}
      >
        Let’s Cook, Share, and Celebrate Food Together!
      </Typography>

      <Typography
        component="p"
        className="second"
        sx={{
          maxWidth: "800px",
          fontWeight: 400,
          fontSize: { xs: "14px", sm: "16px" },
          color: "#cfd8dc",
          lineHeight: 1.6,
          mb: 4,
        }}
      >
        Welcome to Food Cuisines, your go-to source for discovering and sharing amazing
        recipes from around the world. Whether you're looking to cook something new or
        recreate a classic dish, we provide a diverse range of recipes with step-by-step
        instructions, nutritional details, and much more.
      </Typography>

      <Button
        component={Link}
        to="/shop"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#f39c12",
          color: "#000",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#e67e22",
          },
        }}
      >
        Explore Recipes
      </Button>
    </Box>
  );
}
