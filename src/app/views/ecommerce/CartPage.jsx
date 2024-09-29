import React, { useEffect, useState } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
    TextField,
    IconButton,
    Paper,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';


const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get("/api/ecommerce/get-cart-list").then((response) => {
            setCartItems(response.data);
            setTotal(response.data.reduce((acc, item) => acc + item.price * item.quantity, 0));
        });
    }, []);

    const handleQuantityChange = (id, value) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: value } : item
        );
        setCartItems(updatedItems);
        updateTotal(updatedItems);
    };

    const handleRemove = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        updateTotal(updatedItems);
    };

    const updateTotal = (items) => {
        const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    };

    return (
        <Box padding={3}>
            <TableContainer component={Paper} sx={{ marginBottom: '24px', borderRadius: '8px', padding: '12px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={3}>Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell colSpan={3}>
                                    <Box display="flex" alignItems="center">
                                        <Box
                                            paddingLeft={1}
                                            component="img"
                                            src={product.imgUrl}
                                            alt={product.title}
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                borderRadius: '8px',
                                                marginRight: '16px',
                                                objectFit: 'cover',
                                            }} />                                        <Box>
                                            <Typography variant="h6">{product.title}</Typography>
                                            <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h6">${product.price}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        type="number"
                                        value={product.quantity}
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        inputProps={{ min: 1 }}
                                        sx={{ width: '60px' }}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h6">${product.price * product.quantity}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleRemove(product.id)}>
                                        <ClearIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <Box display="flex">
                    <TextField placeholder="Discount Coupon" variant="outlined" size="small" />
                    <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>
                        Apply
                    </Button>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={{ marginRight: '16px' }}>Total: ${total}</Typography>
                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CartPage;