import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Paper
        elevation={2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          alt={product.name || "Recipe image"}
          height="220"
          image={product.image}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              color: "text.primary",
            }}
          >
            {product.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              {product.cuisine || "Special"}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 0.5, flexWrap: "wrap" }}>
              {Array.isArray(product.tags) &&
                product.tags.slice(0, 2).map((i) => (
                  <Chip
                    key={i}
                    label={i}
                    size="small"
                    sx={{ borderRadius: "10px", fontSize: "11px" }}
                    variant="outlined"
                  />
                ))}
            </Box>
          </Box>
        </CardContent>

        <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {Array.isArray(product.mealType) ? product.mealType.join(", ") : product.mealType || ""}
            </Typography>

            <Chip
              label={product.rating || "N/A"}
              size="small"
              color={
                product.rating > 4.5
                  ? "success"
                  : product.rating > 4
                  ? "warning"
                  : "default"
              }
              sx={{ borderRadius: "10px", fontWeight: "bold" }}
              icon={<StarRateIcon sx={{ fontSize: "14px" }} />}
            />
          </Box>
        </CardActions>
      </Paper>
    </Link>
  );
}

