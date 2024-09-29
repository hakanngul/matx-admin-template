import React, { useState } from 'react';
import {
    Box, Grid, Paper, Button, Typography, InputLabel, TextField, Select, MenuItem,
    SvgIcon,
    FormControlLabel,
    Switch,
    styled

} from '@mui/material';
import FacebookIcon from 'app/components/icons/FacebookIcon';
import GoogleIcon from 'app/components/icons/GoogleIcon';
const StyledButton = styled(Button)(({ theme, active }) => ({
    margin: theme.spacing(1),
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderBottom: '1px solid #e0e0e0',
    padding: '10px 16px',
    width: '100%',

    color: active ? '#1976d2' : 'inherit',
    backgroundColor: active ? '#f0f0f0' : 'inherit',
    borderLeft: active ? '4px solid #1976d2' : '4px solid transparent',
}));

const AccountPage = () => {
    const [activeContent, setActiveContent] = useState('basic');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <Box p={3}>
            <Grid container spacing={3}>
                {/* Sidebar */}
                <Grid item>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <Box sx={{ width: '250px', bgcolor: 'background.paper' }}>
                            <StyledButton
                                startIcon={BasicIcon()}
                                active={activeContent === 'basic'}
                                onClick={() => handleContentChange('basic')}
                            >
                                Basic Information
                            </StyledButton>
                            <StyledButton
                                startIcon={PasswordIcon()}
                                active={activeContent === 'password'}
                                onClick={() => handleContentChange('password')}
                            >
                                Password
                            </StyledButton>
                            <StyledButton
                                startIcon={PreferencesIcon()}
                                active={activeContent === 'preferences'}
                                onClick={() => handleContentChange('preferences')}
                            >
                                Preferences
                            </StyledButton>
                            <StyledButton
                                startIcon={RecentDevicesIcon()}
                                active={activeContent === 'recent_devices'}
                                onClick={() => handleContentChange('recent_devices')}
                            >
                                Recent Devices
                            </StyledButton>
                            <StyledButton
                                startIcon={NotificationsIcon()}
                                active={activeContent === 'notifications'}
                                onClick={() => handleContentChange('notifications')}
                            >
                                Notifications
                            </StyledButton>
                            <StyledButton
                                startIcon={TwoStepVerificationIcon()}
                                active={activeContent === 'two_step_verification'}
                                onClick={() => handleContentChange('two_step_verification')}
                            >
                                Two-step verification
                            </StyledButton>
                            <StyledButton
                                startIcon={ConnectedAccountsIcon()}
                                active={activeContent === 'connected_accounts'}
                                onClick={() => handleContentChange('connected_accounts')}
                            >
                                Connected accounts
                            </StyledButton>
                            <StyledButton
                                startIcon={SocialAccountIcon()}
                                active={activeContent === 'social_account'}
                                onClick={() => handleContentChange('social_account')}
                            >
                                Social Account
                            </StyledButton>
                            <StyledButton
                                startIcon={BillingIcon()}
                                active={activeContent === 'billing'}
                                onClick={() => handleContentChange('billing')}
                            >
                                Billing
                            </StyledButton>
                            <StyledButton
                                startIcon={StatementsIcon()}
                                active={activeContent === 'statements'}
                                onClick={() => handleContentChange('statements')}
                            >
                                Statements
                            </StyledButton>
                            <StyledButton
                                startIcon={ReferralsIcon()}
                                active={activeContent === 'referrals'}
                                onClick={() => handleContentChange('referrals')}
                            >
                                Referrals
                            </StyledButton>
                            <StyledButton
                                startIcon={ApiKeysIcon()}
                                active={activeContent === 'api_keys'}
                                onClick={() => handleContentChange('api_keys')}
                            >
                                API Keys
                            </StyledButton>
                            <StyledButton
                                startIcon={DeleteAccountIcon()}
                                active={activeContent === 'delete_account'}
                                color="error"
                                onClick={() => handleContentChange('delete_account')}
                            >
                                Delete Account
                            </StyledButton>
                        </Box>
                    </Paper>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={9}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        {activeContent === 'basic' && BasicInformationForm()}
                        {activeContent === 'password' && PasswordForm()}
                        {activeContent === 'preferences' && PreferencesForm()}
                        {activeContent === 'recent_devices' && RecentDevicesForm()}
                        {activeContent === 'notifications' && NotificationsForm()}
                        {activeContent === 'two_step_verification' && TwoStepVerificationForm()}
                        {activeContent === 'connected_accounts' && ConnectedAccountsForm()}
                        {activeContent === 'social_account' && SocialAccountForm()}
                        {activeContent === 'billing' && BillingForm()}
                        {activeContent === 'statements' && StatementsForm()}
                        {activeContent === 'referrals' && ReferralsForm()}
                        {activeContent === 'api_keys' && ApiKeysForm()}
                        {activeContent === 'delete_account' && DeleteAccountForm()}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

const SocialAccountForm = () => {
    return (
        <SocialAccountForm>
            <Typography variant="h6">Social Account</Typography>
            <Typography variant="body2" gutterBottom>
                Manage your social account here:
            </Typography>
            <Button variant="contained" color="primary" startIcon={<FacebookIcon />}>
                Connect with Facebook
            </Button>
            <br />
            <Button variant="contained" color="primary" startIcon={<GoogleIcon />}>
                Connect with Google
            </Button>
        </SocialAccountForm>
    )
}


const BasicInformationForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" fullWidth size="small" defaultValue="Pixy" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" fullWidth size="small" defaultValue="Krovasky" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Email" fullWidth size="small" defaultValue="uilib@gmail.com" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Phone" fullWidth size="small" defaultValue="+443322221111" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Organization" fullWidth size="small" defaultValue="UiLib" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Department" fullWidth size="small" defaultValue="Develop" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select labelId="country-label" fullWidth size="small" defaultValue="usa">
                        <MenuItem value="usa">United States</MenuItem>
                        <MenuItem value="uk">United Kingdom</MenuItem>
                        <MenuItem value="uae">United Arab Emirates</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="State" fullWidth size="small" defaultValue="New York" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Address" fullWidth size="small" defaultValue="Corverview, Michigan" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Zip Code" fullWidth size="small" type="number" defaultValue="4336" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const PasswordForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Old Password" fullWidth size="small" type="password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="New Password" fullWidth size="small" type="password" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Confirm New Password" fullWidth size="small" type="password" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const PreferencesForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select labelId="language-label" fullWidth size="small" defaultValue="en">
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="timezone-label">Timezone</InputLabel>
                    <Select labelId="timezone-label" fullWidth size="small" defaultValue="gmt-5">
                        <MenuItem value="gmt-5">GMT -5</MenuItem>
                        <MenuItem value="gmt-4">GMT -4</MenuItem>
                        <MenuItem value="gmt+1">GMT +1</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};



const RecentDevicesForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Here you can manage devices connected to your account:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Device: MacBook Pro</Typography>
                    <Typography variant="body2">Last active: 2 hours ago</Typography>
                    <Button variant="outlined" color="secondary">Remove</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Device: iPhone 12</Typography>
                    <Typography variant="body2">Last active: 1 day ago</Typography>
                    <Button variant="outlined" color="secondary">Remove</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const NotificationsForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Email Notifications"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Switch />}
                        label="SMS Notifications"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Push Notifications"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const TwoStepVerificationForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Two-step verification adds an extra layer of security to your account.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Enable Two-step Verification"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const ConnectedAccountsForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Manage your connected accounts here:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Google Account</Typography>
                    <Button variant="outlined" color="secondary">Disconnect</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Facebook Account</Typography>
                    <Button variant="outlined" color="secondary">Disconnect</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const BillingForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Card Holder Name" fullWidth size="small" defaultValue="Pixy Krovasky" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Card Number" fullWidth size="small" defaultValue="1234 5678 9012 3456" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Expiry Date" fullWidth size="small" defaultValue="12/24" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="CVV" fullWidth size="small" defaultValue="123" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const StatementsForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Download your account statements:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary">Download Statement (PDF)</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary">Download Statement (CSV)</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
};

const ReferralsForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Refer your friends and earn rewards:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Friend's Email" fullWidth size="small" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Send Referral
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const ApiKeysForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Manage your API keys:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="API Key" fullWidth size="small" defaultValue="12345678-ABCD-1234-5678-ABCDEFGH" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Save Changes
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const DeleteAccountForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Are you sure you want to delete your account?</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
                        Delete Account
                    </Button>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};


// icons
const BasicIcon = () => (
    <SvgIcon>
        <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6Zm7.89,12.55L18,14.66A3,3,0,0,0,15.26,13H8.74a3,3,0,0,0-2.69,1.66L4.11,18.55A1,1,0,0,0,5,20H19A1,1,0,0,0,19.89,18.55ZM6.62,18l1.22-2.45a1,1,0,0,1,.9-.55h6.52a1,1,0,0,1,.9.55L17.38,18Z" />
    </SvgIcon>
);

const PasswordIcon = () => (
    <SvgIcon>
        <path d="M18,12m0,0v8H6V12ZM12,2A6,6,0,0,0,6,8v2a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2V8a6,6,0,0,0-6-6ZM8,10V8a4,4,0,0,1,8,0v2Z" />
    </SvgIcon>
);

const PreferencesIcon = () => (
    <SvgIcon>
        <path d="M20.21,14.07a2,2,0,0,1-.72-1.64c0-.14,0-.29,0-.43s0-.29,0-.43a2,2,0,0,1,.72-1.64l.8-.66A1,1,0,0,0,21.24,8L20.08,6a1,1,0,0,0-.86-.5.84.84,0,0,0-.35.07l-1,.36a1.89,1.89,0,0,1-.7.13,2,2,0,0,1-1.08-.32,5.48,5.48,0,0,0-.74-.43,2,2,0,0,1-1.06-1.45l-.17-1a1,1,0,0,0-1-.84h-2.3a1,1,0,0,0-1,.84l-.17,1A2,2,0,0,1,8.63,5.31a5.48,5.48,0,0,0-.74.43,2,2,0,0,1-1.08.32,1.89,1.89,0,0,1-.7-.13l-1-.36a.84.84,0,0,0-.35-.07,1,1,0,0,0-.86.5L2.76,8A1,1,0,0,0,3,9.27l.8.66a2,2,0,0,1,.72,1.64c0,.14,0,.29,0,.43s0,.29,0,.43a2,2,0,0,1-.72,1.64l-.8.66A1,1,0,0,0,2.76,16l1.16,2a1,1,0,0,0,.86.5.84.84,0,0,0,.35-.07l1-.36a1.89,1.89,0,0,1,.7-.13,2,2,0,0,1,1.08.32,5.48,5.48,0,0,0,.74.43,2,2,0,0,1,1.06,1.45l.17,1a1,1,0,0,0,1,.84h2.3a1,1,0,0,0,1-.84l.17-1a2,2,0,0,1,1.06-1.45,5.48,5.48,0,0,0,.74-.43,2,2,0,0,1,1.08-.32,1.89,1.89,0,0,1,.7.13l1,.36a.84.84,0,0,0,.35.07,1,1,0,0,0,.86-.5l1.16-2A1,1,0,0,0,21,14.73ZM12,17.5A5.5,5.5,0,1,1,17.5,12,5.5,5.5,0,0,1,12,17.5ZM12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
    </SvgIcon>
);

const RecentDevicesIcon = () => (
    <SvgIcon>
        <path d="M22,10H18a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V12A2,2,0,0,0,22,10Zm0,10H18V12h4Zm.5-18H1.5A1.5,1.5,0,0,0,0,3.5v13A1.5,1.5,0,0,0,1.5,18H10l-.45.89A2,2,0,0,1,7.74,20H7.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H14V14H2V4H22V8h2V3.5A1.5,1.5,0,0,0,22.5,2Z" />
    </SvgIcon>
);

const NotificationsIcon = () => (
    <SvgIcon>
        <path d="M10,20h4a2,2,0,0,1-4,0Zm9.71-4.29-.83-.83A3,3,0,0,1,18,12.76V10a6,6,0,0,0-1.2-3.6l-.9-1.2A3,3,0,0,0,13.5,4H13V2.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V4h-.5A3,3,0,0,0,8.1,5.2L7.2,6.4A6,6,0,0,0,6,10v2.76a3,3,0,0,1-.88,2.12l-.83.83a1,1,0,0,0-.29.7V17a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1v-.59A1,1,0,0,0,19.71,15.71Z" />
    </SvgIcon>
);

const TwoStepVerificationIcon = () => (
    <SvgIcon>
        <path d="M5.75,11.75C5.75,16.58,8,19.15,8,19.6A.49.49,0,0,1,7.8,20l-.42.28a.47.47,0,0,1-.28.09c-.38,0-1.08-1.08-1.7-2.68a17.32,17.32,0,0,1-1.15-5.84V10A7.87,7.87,0,0,1,12,2a8.11,8.11,0,0,1,1.21.09.49.49,0,0,1,.35.24.5.5,0,0,1,0,.43l-.18.48a.49.49,0,0,1-.54.33A5.14,5.14,0,0,0,12,3.5c-4.91,0-6.21,4.7-6.21,6.43ZM15.7,3a.51.51,0,0,0-.42,0,.51.51,0,0,0-.29.3l-.18.49a.5.5,0,0,0,.22.6,6.19,6.19,0,0,1,3.15,5.39v1.65a.5.5,0,0,0,.5.5h.5a.51.51,0,0,0,.5-.5V9.71A7.74,7.74,0,0,0,15.7,3ZM12.25,9.75h-.5a.5.5,0,0,0-.5.5v1.5a8.48,8.48,0,0,0,.57,3.06.49.49,0,0,0,.29.29.51.51,0,0,0,.42,0l.43-.24a.49.49,0,0,0,.23-.61,7.06,7.06,0,0,1-.44-2.47v-1.5A.5.5,0,0,0,12.25,9.75Z" />
    </SvgIcon>
);

const ConnectedAccountsIcon = () => (
    <SvgIcon>
        <path d="M8.65,13.94l5.29-5.29a.5.5,0,0,1,.71,0l.7.7a.5.5,0,0,1,0,.71l-5.29,5.29a.5.5,0,0,1-.71,0l-.7-.7A.5.5,0,0,1,8.65,13.94ZM21,7.66V8a4,4,0,0,1-1.18,2.84L17,13.67a1.35,1.35,0,0,1-1.9,0L15,13.56a.5.5,0,0,1,0-.7l3.44-3.44A2,2,0,0,0,19,8V7.66a2,2,0,0,0-.59-1.42l-.65-.65A2,2,0,0,0,16.34,5H16a2,2,0,0,0-1.42.59L11.14,9a.5.5,0,0,1-.7,0l-.11-.11a1.35,1.35,0,0,1,0-1.9l2.83-2.84A4,4,0,0,1,16,3h.34a4,4,0,0,1,2.83,1.17l.66.66A4,4,0,0,1,21,7.66ZM12.86,15a.5.5,0,0,1,.7,0l.11.11a1.35,1.35,0,0,1,0,1.9l-2.85,2.85A4,4,0,0,1,8,21H7.66a4,4,0,0,1-2.83-1.17l-.66-.66A4,4,0,0,1,3,16.35V16a4,4,0,0,1,1.18-2.84L7,10.33a1.35,1.35,0,0,1,1.9,0l.11.11a.5.5,0,0,1,0,.7L5.59,14.58A2,2,0,0,0,5,16v.34a2,2,0,0,0,.59,1.42l.65.65A2,2,0,0,0,7.66,19H8a2,2,0,0,0,1.43-.59Z" />
    </SvgIcon>
);

const SocialAccountIcon = () => (
    <SvgIcon>
        <path d="M16,3H8A5,5,0,0,0,3,8v8a5,5,0,0,0,5,5h8a5,5,0,0,0,5-5V8A5,5,0,0,0,16,3Zm3.25,13A3.26,3.26,0,0,1,16,19.25H8A3.26,3.26,0,0,1,4.75,16V8A3.26,3.26,0,0,1,8,4.75h8A3.26,3.26,0,0,1,19.25,8Zm-1.5-8.75a1,1,0,1,1-1-1A1,1,0,0,1,17.75,7.25ZM12,7.5A4.5,4.5,0,1,0,16.5,12,4.49,4.49,0,0,0,12,7.5Zm0,7.25A2.75,2.75,0,1,1,14.75,12,2.75,2.75,0,0,1,12,14.75Z" />
    </SvgIcon>
);

const BillingIcon = () => (
    <SvgIcon>
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM13,7V6.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V7A2,2,0,0,0,9,9v.81a2,2,0,0,0,.73,1.54l3.43,2.83a.22.22,0,0,1,.09.19v.88h-2.5v-1a.5.5,0,0,0-.5-.5H9.5a.5.5,0,0,0-.5.5V15a2,2,0,0,0,2,2v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V17a2,2,0,0,0,2-2v-.81a2,2,0,0,0-.73-1.54L10.84,9.82a.22.22,0,0,1-.09-.19V8.75h2.5v1a.5.5,0,0,0,.5.5h.75a.5.5,0,0,0,.5-.5V9A2,2,0,0,0,13,7Z" />
    </SvgIcon>
);

const StatementsIcon = () => (
    <SvgIcon>
        <path d="M6,22H18a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H11.24a3,3,0,0,0-2.12.88L4.88,7.12A3,3,0,0,0,4,9.24V20A2,2,0,0,0,6,22Zm12-2H6V10h5a1,1,0,0,0,1-1V4h6Z" />
    </SvgIcon>
);

const ReferralsIcon = () => (
    <SvgIcon>
        <path d="M16.12,5h0l3.69,4L12,18.46,4.19,9,7.88,5h8.24m0-2H7.88a2,2,0,0,0-1.47.65L2.26,8.16A1,1,0,0,0,2,8.84v.3a1,1,0,0,0,.23.64l9,10.86A1,1,0,0,0,12,21H12a1,1,0,0,0,.77-.36l9-10.86A1,1,0,0,0,22,9.14v-.3a1,1,0,0,0-.26-.68L17.59,3.65A2,2,0,0,0,16.12,3Z" />
    </SvgIcon>
);

const ApiKeysIcon = () => (
    <SvgIcon>
        <path d="M20,3H18.59a1,1,0,0,0-.7.29l-7.18,7.18A5.4,5.4,0,0,0,8.5,10,5.5,5.5,0,1,0,14,15.5a5.55,5.55,0,0,0-.46-2.2l.88-.88a1,1,0,0,0,.29-.7V11a.75.75,0,0,1,.22-.53l.26-.26a.75.75,0,0,1,.53-.22H17.5a.5.5,0,0,0,.5-.5V7.73a.75.75,0,0,1,.22-.53l.05,0A.49.49,0,0,1,18.63,7H20.5a.5.5,0,0,0,.5-.5V4A1,1,0,0,0,20,3ZM7.44,18.56a2,2,0,1,1,2-2A2,2,0,0,1,7.44,18.56Z" />
    </SvgIcon>
);

const DeleteAccountIcon = () => (
    <SvgIcon>
        <path d="M20,4.5v1a.5.5,0,0,1-.5.5H4.5A.5.5,0,0,1,4,5.5v-1A.5.5,0,0,1,4.5,4H9V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V4h4.5A.5.5,0,0,1,20,4.5ZM16.28,18H7.72L7,8H5l.87,12.14a2,2,0,0,0,2,1.86h8.28a2,2,0,0,0,2-1.86L19,8H17Z" />
    </SvgIcon>
);

export default AccountPage;