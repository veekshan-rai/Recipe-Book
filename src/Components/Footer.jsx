import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Paper
      elevation={4}
      component="footer"
      sx={{
        backgroundColor: "#1f2937",
        color: "#ffffff",
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          pb: 3,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#f39c12" }}>
            Food Cuisines
          </Typography>
          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
            Discover and celebrate culinary masterpieces from around the world.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            component={Link}
            to="/"
            sx={{ color: "#d1d5db", textDecoration: "none", "&:hover": { color: "#ffffff" } }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/about"
            sx={{ color: "#d1d5db", textDecoration: "none", "&:hover": { color: "#ffffff" } }}
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="/shop"
            sx={{ color: "#d1d5db", textDecoration: "none", "&:hover": { color: "#ffffff" } }}
          >
            Recipes
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={scrollToTop}
          startIcon={<KeyboardArrowUpIcon />}
          sx={{
            backgroundColor: "#2e7d32",
            borderRadius: "20px",
            px: 2.5,
            "&:hover": { backgroundColor: "#1b5e20" },
          }}
        >
          Top
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 3, textAlign: "center", color: "#9ca3af", fontSize: "0.85rem" }}
      >
        &copy; {new Date().getFullYear()} Food Cuisines. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;

