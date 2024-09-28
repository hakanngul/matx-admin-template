import React, { useState } from 'react';
import {
    Typography, Card, CardContent, Grid, TextField, Button,
    Divider, MenuItem, Box
} from '@mui/material';
import { Publish } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const NewProductPage = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        productCode: '',
        sku: '',
        price: '',
        salePrice: '',
        quantity: '',
        minOrderAmount: '',
    });
    const [files, setFiles] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
        console.log('Product added:', product, 'Images:', files);
    };

    return (
        <Box p={3}>
            <Card>
                <CardContent>
                    {/* Breadcrumbs */}
                    <CustomBreadcrumbs title="New Product" />

                    {/* Form */}
                    <Typography variant="h5" gutterBottom>
                        Add New Product
                    </Typography>
                    <Divider />

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Description"
                                    name="description"
                                    value={product.description}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    select
                                    label="Category"
                                    name="category"
                                    value={product.category}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                >
                                    <MenuItem value="electronics">Electronics</MenuItem>
                                    <MenuItem value="fashion">Fashion</MenuItem>
                                    <MenuItem value="home">Home</MenuItem>
                                </TextField>

                                {/* Drag and Drop Area */}
                                <div {...getRootProps()} style={{
                                    border: '2px dashed #ccc',
                                    padding: '20px',
                                    textAlign: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer'
                                }}>
                                    <input {...getInputProps()} />
                                    <Publish fontSize="large" />
                                    <Typography>Drop product images or click to upload</Typography>
                                </div>

                                <Box display="flex" flexWrap="wrap" mt={2}>
                                    {files.map((file, index) => (
                                        <Box key={index} p={1}>
                                            <img
                                                src={file.preview}
                                                alt={`Preview ${index}`}
                                                width={100}
                                                height={100}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </Box>
                                    ))}
                                </Box>

                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Product Code"
                                    name="productCode"
                                    value={product.productCode}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="SKU"
                                    name="sku"
                                    value={product.sku}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Price"
                                    name="price"
                                    type="number"
                                    value={product.price}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Sale Price"
                                    name="salePrice"
                                    type="number"
                                    value={product.salePrice}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Quantity"
                                    name="quantity"
                                    type="number"
                                    value={product.quantity}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Minimum Order Amount"
                                    name="minOrderAmount"
                                    type="number"
                                    value={product.minOrderAmount}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '20px' }}
                        >
                            Add Product
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default NewProductPage;