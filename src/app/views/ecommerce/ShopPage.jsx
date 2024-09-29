import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Card,
    Grid,
    Typography,
    FormControlLabel,
    FormControl,
    Radio,
    RadioGroup,
    Slider,
    Checkbox,
    IconButton,
    TextField,
    Pagination,
} from "@mui/material";
import { ViewComfy, List } from "@mui/icons-material";
import ShoppingButton from "app/components/buttons/ShoppingButton";

// const productList = [
//     { id: 1, title: "IPhone 11 Max Pro Case", price: 12, img: "/assets/images/products/iphone-2.jpg" },
//     { id: 2, title: "Comlion Watch 1", price: 23, img: "/assets/images/products/watch-1.jpg" },
//     { id: 3, title: "Kurren Watch", price: 75, img: "/assets/images/products/watch-2.jpg" },
//     { id: 4, title: "Sony Headphone", price: 870, img: "/assets/images/products/headphone-3.jpg" },
//     { id: 5, title: "Bass Speaker Venue 8", price: 324, img: "/assets/images/products/speaker-1.jpg" },
//     { id: 6, title: "Bass Speaker 1", price: 454, img: "/assets/images/products/speaker-2.jpg" },
// ];

const ShopPage = () => {
    const [productList, setProductList] = useState([]);

    // Fetch product list from the fake API on component mount
    useEffect(() => {
        axios.get("/api/ecommerce/get-product-list").then((response) => {
            setProductList(response.data);
        });
    }, []);

    const [filter, setFilter] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [view, setView] = useState("grid"); // grid or list
    const [sortOrder, setSortOrder] = useState("default"); // default, low-high, high-low

    // Fiyat aralığını güncelleme
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    // Ürünleri sıralama
    const sortedProducts = () => {
        let sorted = [...productList];
        if (sortOrder === "low-high") {
            sorted = sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-low") {
            sorted = sorted.sort((a, b) => b.price - a.price);
        }
        return sorted.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    };

    return (
        <Box padding={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    {/* Search Field */}
                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Search here..."
                        InputProps={{
                            startAdornment: <span className="material-icons">search</span>,
                        }}
                    />

                    <Box marginY={2}>
                        {/* Price Filter */}
                        <Card elevation={3}>
                            <Box padding={2}>
                                <Typography variant="h6">Price</Typography>
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="0,10"
                                            control={<Radio />}
                                            label="<$10"
                                        />
                                        <FormControlLabel
                                            value="10,100"
                                            control={<Radio />}
                                            label="$10-$100"
                                        />
                                        <FormControlLabel
                                            value="100,500"
                                            control={<Radio />}
                                            label="$100-$500"
                                        />
                                        <FormControlLabel
                                            value="500"
                                            control={<Radio />}
                                            label=">$500"
                                        />
                                        <FormControlLabel
                                            value="all"
                                            control={<Radio />}
                                            label="All"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Card>
                    </Box>

                    <Box marginY={2}>
                        {/* Price Slider */}
                        <Card elevation={3}>
                            <Box padding={2}>
                                <Typography variant="h6">Price Range</Typography>
                                <Slider
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1000}
                                />
                                <Typography>
                                    ${priceRange[0]} - ${priceRange[1]}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>

                    <Box marginY={2}>
                        {/* Category Filter */}
                        <Card elevation={3}>
                            <Box padding={2}>
                                <Typography variant="h6">Category</Typography>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Audio"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Fashion"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Cellphone"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Accessories"
                                />
                            </Box>
                        </Card>
                    </Box>



                </Grid>

                <Grid item xs={12} md={9}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" paddingY={2} paddingX={3} bgcolor="background.paper" borderRadius={2} boxShadow={1}>
                        {/* Sort Dropdown */}
                        <TextField
                            select
                            size="small"
                            variant="outlined"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            SelectProps={{ native: true }}
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                },
                            }}
                            sx={{
                                minWidth: 180,
                                bgcolor: 'white',
                                borderRadius: 1,
                            }}
                        >
                            <option value="default">Sort by: Default</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                        </TextField>

                        {/* View Mode Toggle */}
                        <Box>
                            <IconButton
                                onClick={() => setView("grid")}
                                sx={{
                                    bgcolor: view === 'grid' ? 'primary.main' : 'transparent',
                                    color: view === 'grid' ? 'white' : 'text.primary',
                                    marginRight: 1,
                                    '&:hover': {
                                        bgcolor: 'primary.light',
                                        color: 'white',
                                    },
                                    borderRadius: 1,
                                    boxShadow: view === 'grid' ? 2 : 0,
                                }}
                            >
                                <ViewComfy />
                            </IconButton>

                            <IconButton
                                onClick={() => setView("list")}
                                sx={{
                                    bgcolor: view === 'list' ? 'primary.main' : 'transparent',
                                    color: view === 'list' ? 'white' : 'text.primary',
                                    '&:hover': {
                                        bgcolor: 'primary.light',
                                        color: 'white',
                                    },
                                    borderRadius: 1,
                                    boxShadow: view === 'list' ? 2 : 0,
                                }}
                            >
                                <List />
                            </IconButton>
                        </Box>
                    </Box>

                    <Grid container spacing={2} marginTop={2}>
                        {/* Product Cards */}
                        {sortedProducts().map((product) => (
                            <Grid item xs={12} md={view === "grid" ? 4 : 12} key={product.id}>
                                <Card elevation={3} padding={2}>
                                    <Box display="flex" flexDirection={view === "list" ? "row" : "column"} alignItems="center">
                                        <img
                                            src={product.imgUrl}
                                            alt={product.title}
                                            style={{
                                                paddingLeft: view === "list" ? "5px" : "0px",
                                                width: view === "grid" ? "100%" : "150px",
                                                marginRight: view === "list" ? "16px" : "0",
                                                marginLeft: view === "list" ? "5px" : "0px",
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                            }} />
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            flexGrow={1}
                                            sx={{
                                                "& > :not(style)": {
                                                    marginBottom: (theme) =>
                                                        theme.spacing(1),
                                                },
                                            }}>
                                            <Typography paddingTop={1}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                style={{
                                                    textAlign: view === "grid" ? "center" : "left",
                                                }}
                                            >
                                                ${product.price}
                                            </Typography>
                                            <ShoppingButton />
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination */}
                    <Pagination count={2} />
                </Grid>
            </Grid>
        </Box>
    );
};



export default ShopPage;