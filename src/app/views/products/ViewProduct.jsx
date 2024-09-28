import React, { useState } from "react";
import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography,
    Divider,
    IconButton,
    Button
} from "@mui/material";
import { ShoppingCart, Call, Settings } from "@mui/icons-material";
import CustomBreadcrumbs from "../commons/CustomBreadcrumbs";

const ViewProduct = () => {
    return (
        <Box padding={3}>
            {/* Breadcrumb */}
            <CustomBreadcrumbs title="View Product" />


            {/* Product Details */}
            <Card elevation={3} sx={{ padding: 3 }}>
                <Grid container spacing={3}>
                    {/* Product Images */}
                    <Grid item xs={12} md={6}>
                        <ProductGallery />
                    </Grid>

                    {/* Product Information */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Asus VivoBook X512FL-EJ723T 10th Gen Intel Core i5
                        </Typography>
                        <Typography variant="subtitle2">SKU: 0X50F0D</Typography>
                        <Typography variant="subtitle2">
                            <strong>BRAND:</strong> ASUS | More Laptop from ASUS
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Button variant="contained" color="primary" startIcon={<ShoppingCart />}>
                            Add to Cart
                        </Button>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1">Have questions about this product (SKU: 0X2E615)</Typography>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Call color="primary" />
                            <Typography variant="h6" sx={{ marginLeft: 1 }}>
                                019638111777
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Specification
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Brand: ASUS, Processor: Intel Core i5-10210U 10th Gen, RAM: 4GB DDR4, Storage: 512GB SSD,
                            Display: 15.6" FHD, Graphics: Nvidia MX250 2GB, etc.
                        </Typography>
                    </Grid>
                </Grid>
            </Card>

            {/* Sticky settings icon */}
            <Box position="fixed" bottom={16} right={16}>
                <IconButton color="primary" sx={{ backgroundColor: 'primary.main' }} size="large">
                    <Settings />
                </IconButton>
            </Box>
        </Box>
    );
};

const ProductGallery = () => {
    const [activeImage, setActiveImage] = useState("/assets/images/laptop-2.png");

    const images = [
        "/assets/images/laptop-1.png",
        "/assets/images/laptop-2.png",
        "/assets/images/laptop-3.png",
    ];

    const handleImageClick = (imgSrc) => {
        setActiveImage(imgSrc);
    };

    return (
        <Box>
            <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={activeImage}
                    alt="Active Product"
                    sx={{ objectFit: "contain" }}
                />
            </Card>

            <Box display="flex" justifyContent="center" mt={2}>
                {images.map((imgSrc, index) => (
                    <Box
                        key={index}
                        onClick={() => handleImageClick(imgSrc)}
                        sx={{
                            cursor: "pointer",
                            border: activeImage === imgSrc ? "2px solid blue" : "none",
                            marginX: 1,
                        }}
                    >
                        <img src={imgSrc} alt={`Thumbnail ${index}`} width="100" />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ViewProduct;