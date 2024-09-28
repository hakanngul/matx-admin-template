import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Checkbox,
    Avatar,
    IconButton,
    Box,
    Chip
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import CustomBreadcrumbs from "../commons/CustomBreadcrumbs";

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    // Fetch product list from the fake API on component mount
    useEffect(() => {
        axios.get("/api/ecommerce/get-product-list").then((response) => {
            setProductList(response.data);
        });
    }, []);

    return (
        <Box paddingX={3}>
            <div style={{ marginTop: "16px" }} />
            <CustomBreadcrumbs title="Product List" />
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" sx={{ width: '5%' }}>
                            <Checkbox />
                        </TableCell>
                        <TableCell sx={{ width: '25%' }}>Name</TableCell>
                        <TableCell sx={{ width: '35%' }}>Description</TableCell>
                        <TableCell sx={{ width: '10%' }}>Quantity</TableCell>
                        <TableCell sx={{ width: '10%' }}>Price</TableCell>
                        <TableCell sx={{ width: '15%' }}>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <Avatar
                                        src={product.imgUrl}
                                        variant="square"
                                        sx={{ width: 56, height: 56, marginRight: 2 }}
                                    />
                                    <span>{product.title}</span>
                                </Box>
                            </TableCell>
                            <TableCell>{product.description.substring(0, 40)}...</TableCell>
                            <TableCell>
                                <Chip
                                    label={product.totalUnit > 0 ? "Available" : "Out of Stock"}
                                    color={product.totalUnit > 0 ? "success" : "error"}
                                    size="small"
                                    sx={{ backgroundColor: product.totalUnit > 0 ? "#4CAF50" : "#F44336", color: "white" }}
                                />
                            </TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default ProductList;