import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const [product, setProduct] = useState(null); // Başlangıç değeri olarak null kullanıyoruz

    useEffect(() => {
        const productId = "13"; // Belirli bir ürün ID'si

        axios.get(`/api/ecommerce/get-product-by-id/${productId}`)
            .then((response) => {
                setProduct(response.data); // Gelen veriyi state'e yerleştiriyoruz
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, []);

    // Eğer ürün bilgisi henüz yüklenmediyse "loading" durumu gösteriyoruz
    if (!product) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box padding={3}>
            {/* Breadcrumb */}
            <CustomBreadcrumbs title="View Product" />

            {/* Product Details */}
            <Card elevation={3} sx={{ padding: 3 }}>
                <Grid container spacing={3}>
                    {/* Product Images */}
                    <Grid item xs={12} md={6}>
                        <ProductGallery image={product.imgUrl} />
                    </Grid>

                    {/* Product Information */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="subtitle2">SKU: {product.id}</Typography>
                        <Typography variant="subtitle2">
                            <strong>BRAND:</strong> {product.brand} | More Laptop from {product.brand}
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
                            Brand: {product.brand}, Processor: {product.processor}, RAM: {product.ram}, Storage: {product.storage}, Display: {product.display}, Graphics: {product.graphics}, etc.
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

const ProductGallery = ({ image }) => {
    const [activeImage, setActiveImage] = useState(image);

    useEffect(() => {
        // Eğer image değişirse activeImage'i güncelliyoruz
        setActiveImage(image);
    }, [image]);

    const images = [
        image,
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
                    image={activeImage || "/assets/images/placeholder.png"} // Varsayılan bir placeholder resmi kullanabiliriz
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