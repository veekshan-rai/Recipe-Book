import "./About1.css";
import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about1 from "../Assets/Images/img5.jpg";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "gray", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <div className="img2">
            <img
              className="img1"
              src={about1}
              alt="Food Cuisines presentation"
            />
          </div>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <div className="content1">
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            className="content2" style={{position:'relative',left:'30px'}}>
              About <span style={{ color: "#FFFFFF80" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
           style={{color:'#FFFFFF80',fontSize:'20px',position:'relative',left:'30px'}} >
              Welcome to
              Food Cuisines
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            style={{fontWeight:"800" ,fontSize:'15px',position:'relative',left:'30px'}}
            >
              We aim to inspire you to explore your culinary creativity and enjoy the art of cooking. With recipes for all skill levels, from beginners to professionals, Recipe Book makes sure there's something for everyone.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
              style={{ fontWeight: "800", color: "#ffffff", position: "relative", left: "30px" }}
            >
              Join us in this exciting journey of flavors, and let's cook up something delicious together!
            </Typography>
            </div>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
