import React, { useState, Fragment } from 'react';
import {
    Typography, TextField, Button,
    Accordion, AccordionSummary, AccordionDetails, Box, Grid, Paper
} from '@mui/material';
import { Search, ExpandMore, Layers, ContactSupport, HomeOutlined, Settings, Home } from '@mui/icons-material';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const HelpCenterPage = () => {
    const [expanded, setExpanded] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setExpanded(null);
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const renderAccordionContent = () => {
        const categories = {
            'Getting Started': [
                { title: 'How to install?', content: 'npm install' },
                { title: 'How to use?', content: 'Follow the instructions in the README file.' },
            ],
            'Plans & Pricing': [
                { title: 'What are the different pricing plans?', content: 'We offer several pricing plans based on your needs. You can find more details on the pricing page.' },
            ],
            'Sales Questions': [
                { title: 'Can I get a refund?', content: 'Yes, you can request a refund within 30 days of your purchase, following our refund policy.' },
            ],
            'Usage Guide': [
                { title: 'How to use the feature X?', content: 'Feature X can be used by following these steps...' },
            ],
        };

        const renderAccordions = (category) => categories[category].map(({ title, content }, index) => (
            <Accordion expanded={expanded === `panel-${index + 1}`} onChange={handleAccordionChange(`panel-${index + 1}`)} key={index}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`panel-${index + 1}-content`} id={`panel-${index + 1}-header`}>
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{content}</Typography>
                </AccordionDetails>
            </Accordion>
        ));

        return selectedCategory ? renderAccordions(selectedCategory) : <Typography variant="body1" textAlign="center">Please select a category to see the related FAQs.</Typography>;
    };

    return (
        <Fragment>
            {/* Breadcrumbs */}
            <CustomBreadcrumbs title="Help Center" />
            <Box sx={{ marginRight: '50px', marginLeft: '50px' }}>
                {/* Title */}
                <Box mt={3} mb={2} textAlign="center">
                    <Typography variant="h4">Hi, How can we help you?</Typography>
                </Box>

                {/* Search Box */}
                <Box mb={4} display="flex" justifyContent="center">
                    <TextField
                        placeholder="Search knowledge base"
                        InputProps={{
                            startAdornment: <Search fontSize="small" style={{ marginLeft: '10px' }} />,
                            endAdornment: (
                                <Button variant="contained" color="primary" style={{ borderRadius: '300px', marginRight: '0px' }}>
                                    Search
                                </Button>
                            ),
                            style: { borderRadius: '300px', paddingRight: '0' },
                        }}
                        variant="outlined"
                        size="small"
                        style={{ width: '50%' }}
                    />
                </Box>

                {/* Browse by Category */}
                <Typography paddingTop={10} paddingBottom={0} variant="body1" textAlign="center" gutterBottom>
                    Or Browse by category
                </Typography>
                <Box paddingX={20} paddingTop={10} paddingBottom={5} display={'flex'} justifyContent={'center'} margin={'auto'}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                elevation={1}
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    border: '1px solid #1976d2',
                                    borderRadius: '8px',
                                }}
                                onClick={() => handleCategoryClick('Getting Started')}
                            >
                                <Home fontSize="large" color="primary" />
                                <Typography variant="h6" color="primary" mt={1}>
                                    Getting Started
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                elevation={1}
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                }}
                                onClick={() => handleCategoryClick('Plans & Pricing')}
                            >
                                <Layers fontSize="large" />
                                <Typography variant="h6" mt={1}>
                                    Plans & Pricing
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                elevation={1}
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                }}
                                onClick={() => handleCategoryClick('Sales Questions')}
                            >
                                <ContactSupport fontSize="large" />
                                <Typography variant="h6" mt={1}>
                                    Sales Questions
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper
                                elevation={1}
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                }}
                                onClick={() => handleCategoryClick('Usage Guide')}
                            >
                                <Settings fontSize="large" />
                                <Typography variant="h6" mt={1}>
                                    Usage Guide
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Render Accordion based on selected category */}
                {renderAccordionContent()}
            </Box>
        </Fragment>
    );
};

export default HelpCenterPage;