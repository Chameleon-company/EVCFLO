import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, resetUserPassword, sendVerificationEmail, updateUserDisplayName } from '../firebase';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Box } from '@mui/material';

import Title from '../components/Title';

import EditIcon from '@mui/icons-material/Edit';
import KeyIcon from '@mui/icons-material/Key';
import ReplayIcon from '@mui/icons-material/Replay';

// Separate Dialog into its own component
const UsernameDialog = ({ open, onClose, newUsername, setNewUsername }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{'Change your username:'}</DialogTitle>
    <DialogContent>
      <TextField
        id="filled-basic"
        label="Username"
        variant="filled"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onClose(false)}>Cancel</Button>
      <Button onClick={() => onClose(true)} autoFocus>
        Save
      </Button>
    </DialogActions>
  </Dialog>
);

// Separate ListItems into their own components
const ListItemWithTooltip = ({ children, tooltipTitle, onClick }) => (
  <ListItem sx={{ '&:hover': { backgroundColor: 'grey.100' } }}>
    {children}
    <ListItemSecondaryAction onClick={onClick}>
      <Tooltip title={tooltipTitle}>
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </ListItem>
);

const User = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (save) => {
    if (save) {
      userProfile.displayName = newUsername;
      updateUserDisplayName(newUsername);
    }
    setOpen(false);
  };

  useEffect(() => {
    getUserProfile()
      .then((profile) => setUserProfile(profile))
      .catch((error) => navigate('/login'));
  }, [navigate]);

  const handleVerifyEmail = () => {
    sendVerificationEmail()
      .then((res) => alert(res))
      .catch((error) => alert(error));
    return;
  };

  const handlePasswordReset = () => {
    if (!userProfile || !userProfile.email) {
      console.error('User not logged in or email not available.');
      return;
    }
    resetUserPassword(userProfile.email)
      .then((message) => alert(message))
      .catch((error) => alert('Error sending password reset email. Please try again.'));
  };

  return userProfile ? (
    <>
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="User" />
      </Box>

      <Grid container spacing={2} justifyContent="center" sx={{ minHeight: '70vh' }}>
        <UsernameDialog open={open} onClose={handleClose} newUsername={newUsername} setNewUsername={setNewUsername} />
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Card
            variant="outlined"
            sx={{
              '&:hover': {
                boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                User Profile
              </Typography>
              <List>
                <ListItemWithTooltip tooltipTitle="Change username" onClick={() => setOpen(true)}>
                  <ListItemText primary="Username" secondary={userProfile.displayName} />
                </ListItemWithTooltip>
                <ListItem
                  sx={{
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  <ListItemText
                    primary="Email"
                    secondary={userProfile.emailVerified ? userProfile.email : userProfile.email + ' (unverified)'}
                    sx={{
                      color: userProfile.emailVerified ? 'green' : 'red',
                    }}
                  />
                  <ListItemSecondaryAction>
                    {!userProfile.emailVerified ? (
                      <Tooltip title="Resend email verification">
                        <IconButton edge="end" aria-label="edit" onClick={handleVerifyEmail}>
                          <ReplayIcon />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  sx={{
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  <ListItemText primary="Password" secondary="********" />
                  <ListItemSecondaryAction>
                    <Tooltip title="Change Password">
                      <IconButton edge="end" aria-label="edit" onClick={handlePasswordReset}>
                        <KeyIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  ) : (
    <div className="loader">
      <Typography variant="h6">Loading...</Typography>
    </div>
  );
};

export default User;
