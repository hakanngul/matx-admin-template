import React from 'react';
import { Breadcrumbs, Link, Typography, IconButton } from '@mui/material';
import { Home, NavigateNext, FilterList } from '@mui/icons-material';

const CustomBreadcrumbs = ({ title }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
            <Typography sx={{ marginBottom: 2 }} variant="h4">{title}</Typography>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    <Home fontSize="medium" color='primary' />
                </Link>
                <Link underline="hover" color="inherit" href="/dashboard/default">
                    Pages
                </Link>
                <Typography color="textPrimary">{title}</Typography>
            </Breadcrumbs>
        </div>
        <IconButton aria-label="Filter list">
            <FilterList />
        </IconButton>
    </div>
);

export default CustomBreadcrumbs;

