import React, { useState, useEffect } from 'react';
import {
  Avatar, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Checkbox, IconButton,
  Card, CardContent, Typography, TablePagination
} from '@mui/material';
import { Edit, ArrowForward } from '@mui/icons-material';
import axios from 'axios';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const CustomerListPage = () => {
  const [customers, setCustomers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get('/api/ecommerce/get-customer-list')
      .then(response => setCustomers(response.data || []))
      .catch(error => console.error('Error fetching customer list:', error));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardContent>
        {/* Breadcrumbs */}
        <CustomBreadcrumbs title="Customer List" />

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Company</TableCell>
                <TableCell align="center">Balance</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={`/assets/images/faces/${customer.avatar}`} alt={customer.name} style={{ marginRight: '8px' }} />
                        <Typography>{customer.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell align="center">{customer.address}</TableCell>
                    <TableCell align="center">{customer.company}</TableCell>
                    <TableCell align="center">{customer.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <Edit />
                      </IconButton>
                      <IconButton>
                        <ArrowForward />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={customers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]}
        />
      </CardContent>
    </Card>
  );
};

export default CustomerListPage;