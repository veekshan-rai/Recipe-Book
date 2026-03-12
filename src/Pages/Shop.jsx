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
    axios.get('https://dummyjson.com/recipes?limit=300')
      .then((result) => {
        // setProducts(result.data.products);
        setProducts(result.data.recipes)
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('https://dummyjson.com/recipes/tags')
      .then((result) => {
        setCategories(result.data);
        console.log(result.data)

      })
      .catch((error) => {
        console.log(error);
      })

  }, [])

  // console.log(products)

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.categories === selectedCategory
      );
    }
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Set the filtered products
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        {/* <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Filter By category
              </Typography>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 1,
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
              
                
                  <Chip
                  color={selectedCategory === "All" ? "success" : "default"}
                  label={"All"}
                  component={Paper}
                  onClick={()=>setSelectedCategory("All")}
                />
                {categories.map((item,index)=>(
                  <Chip onClick={()=>setSelectedCategory(item)}
                  component={Paper}
                  color={selectedCategory== item?'success':'default'}
                  key={index} label={item}/>
                ))}
              </Box>
            </Box>
          </Grid2> */}

        <Grid2 size={{ xs: 12, sm: 12 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              fullWidth
              type="search"
              label="Search product here"
              placeholder="search product by title"
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>
                {filteredProducts.length > 0 ?
                  filteredProducts.map((item, index) => (
                    <Grid2 size={{ xs: 12, sm: 4 }}>
                      <ProductCard product={item} />
                    </Grid2>
                  )) : (<Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid2 container spacing={2}>
                      <Grid2 size={{ xs: 12, sm: 12 }}>
                        <NoData />
                      </Grid2>
                    </Grid2>
                  </Box>)}



              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
