import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=300")
      .then((result) => {
        setProducts(result.data.recipes || []);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://dummyjson.com/recipes/tags")
      .then((result) => {
        setCategories(result.data || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          (Array.isArray(product.tags) && product.tags.includes(selectedCategory)) ||
          product.cuisine?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      {/* Search Input */}
      <Box sx={{ mb: 3 }}>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          fullWidth
          type="search"
          label="Search recipe here"
          placeholder="Search recipe by name or cuisine..."
          variant="outlined"
        />
      </Box>

      {/* Category Filter Chips */}
      <Paper elevation={0} sx={{ p: 2, mb: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: "bold" }}>
          Filter by Category / Tag:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            maxHeight: "120px",
            overflowY: "auto",
            py: 0.5,
          }}
        >
          <Chip
            color={selectedCategory === "All" ? "primary" : "default"}
            label="All"
            onClick={() => setSelectedCategory("All")}
            clickable
          />
          {categories.map((item, index) => (
            <Chip
              key={index}
              label={item}
              color={selectedCategory === item ? "primary" : "default"}
              onClick={() => setSelectedCategory(item)}
              clickable
            />
          ))}
        </Box>
      </Paper>

      {/* Recipes Grid */}
      <Box sx={{ flexGrow: 1 }}>
        {filteredProducts.length > 0 ? (
          <Grid2 container spacing={3}>
            {filteredProducts.map((item) => (
              <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={item} />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <NoData />
        )}
      </Box>
    </Box>
  );
}

