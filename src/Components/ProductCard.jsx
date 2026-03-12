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
export default function ProductCard({product}) {
  
  return (
    <div>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Paper elevation={2} sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            alt={product.title}
            height={"300"}
            image={product.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="overline"
              fontWeight="bolder"
              component="div"
            >
              {product.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Typography variant="subtitle1">{product.brand}</Typography>

              <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                {product.tags.map((i) => (
                  <Chip
                    key={i}
                    label={i}
                    size="small"
                    sx={{ borderRadius: "10px" }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Typography variant="subtitle2">{product.ygy}</Typography>

                <Typography variant="subtitle2">
                 <p>{product.mealType}</p>
                </Typography>

              </Box>

              <Chip
                label={product.rating}
                size="small"
                color="success"
                sx={{ borderRadius: "10px" }}
                icon={<StarRateIcon sx={{ fontSize: "10px" }} />}
              />
            </Box>
          </CardActions>
        </Paper>
      </Link>
    </div>
  );
}
