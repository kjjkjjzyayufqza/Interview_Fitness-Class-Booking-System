import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, SxProps } from '@mui/material';
import MOMXLogo from '../MOMXLogo';

const style: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: 400, xs: '70%' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

export default function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button color="inherit" onClick={handleOpen}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box pb={2}>
                        <center>
                            <MOMXLogo />
                        </center>
                    </Box>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Email</InputLabel>
                            <Input />
                            <FormHelperText id="component-helper-text">
                                Your email address
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <Input type="password" />
                            <FormHelperText id="component-helper-text">
                                Your password
                            </FormHelperText>
                        </FormControl>
                        <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                            Login
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Don't have an account? <a href="#">Sign Up</a>
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}