import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function SingleProduct() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/recipes/" + id)
      .then((result) => {
        setProductInfo(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <Typography variant="h6">Loading recipe details...</Typography>
      </Box>
    );
  }

  if (!productInfo) {
    return (
      <Box sx={{ textAlign: "center", p: 4, minHeight: "60vh" }}>
        <Typography variant="h5" color="error" gutterBottom>
          Recipe not found
        </Typography>
        <Typography component={Link} to="/shop" sx={{ color: "primary.main", textDecoration: "underline" }}>
          Back to Recipes
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, maxWidth: "1280px", margin: "0 auto" }}>
      <Box sx={{ mb: 2 }}>
        <Typography
          component={Link}
          to="/shop"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "text.secondary",
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": { color: "primary.main" },
          }}
        >
          <ArrowBackIcon fontSize="small" /> Back to Recipes
        </Typography>
      </Box>

      <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "460px" },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <img
                src={productInfo?.image}
                alt={productInfo?.name || "Recipe"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={7}>
            <Box>
              {productInfo?.cuisine && (
                <Chip
                  label={productInfo.cuisine}
                  color="primary"
                  size="small"
                  sx={{ mb: 1, fontWeight: "bold" }}
                />
              )}

              <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                {productInfo?.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Chip
                  size="small"
                  label={productInfo?.rating || "N/A"}
                  color={
                    productInfo?.rating > 4.5
                      ? "success"
                      : productInfo?.rating > 4
                      ? "warning"
                      : "default"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                />
                {productInfo?.reviewCount && (
                  <Typography variant="body2" color="text.secondary">
                    ({productInfo.reviewCount} reviews)
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                {productInfo?.prepTimeMinutes && (
                  <Chip
                    label={`Prep: ${productInfo.prepTimeMinutes} mins`}
                    variant="outlined"
                    color="secondary"
                  />
                )}
                {productInfo?.cookTimeMinutes && (
                  <Chip
                    label={`Cook: ${productInfo.cookTimeMinutes} mins`}
                    variant="outlined"
                    color="info"
                  />
                )}
                {productInfo?.difficulty && (
                  <Chip
                    label={`Difficulty: ${productInfo.difficulty}`}
                    variant="outlined"
                  />
                )}
                {productInfo?.servings && (
                  <Chip
                    label={`Servings: ${productInfo.servings}`}
                    variant="outlined"
                  />
                )}
                {productInfo?.caloriesPerServing && (
                  <Chip
                    label={`${productInfo.caloriesPerServing} kcal / serving`}
                    variant="outlined"
                    color="success"
                  />
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", width: "130px", verticalAlign: "top" }}>
                        Ingredients
                      </TableCell>
                      <TableCell>
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {Array.isArray(productInfo?.ingredients) ? (
                            productInfo.ingredients.map((item, idx) => (
                              <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                                {item}
                              </Typography>
                            ))
                          ) : (
                            <Typography variant="body2">{productInfo?.ingredients}</Typography>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", verticalAlign: "top" }}>
                        Instructions
                      </TableCell>
                      <TableCell>
                        <Box component="ol" sx={{ pl: 2, m: 0 }}>
                          {Array.isArray(productInfo?.instructions) ? (
                            productInfo.instructions.map((step, idx) => (
                              <Typography component="li" variant="body2" key={idx} sx={{ mb: 1 }}>
                                {step}
                              </Typography>
                            ))
                          ) : (
                            <Typography variant="body2">{productInfo?.instructions}</Typography>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>

                    {productInfo?.tags && productInfo.tags.length > 0 && (
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Tags</TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                            {productInfo.tags.map((tag, idx) => (
                              <Chip key={idx} label={tag} size="small" variant="outlined" />
                            ))}
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

