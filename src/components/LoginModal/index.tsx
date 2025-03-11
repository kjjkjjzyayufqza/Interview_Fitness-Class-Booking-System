import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, SxProps } from '@mui/material';
import MOMXLogo from '../MOMXLogo';
import axios from 'axios';
import RegisterModal from '../RegisterModal';

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

interface LoginModalProps {
    onOpen?: () => void;
    onClose?: () => void;
}

export default function LoginModal({ onClose = () => { }, onOpen = () => { }, }: LoginModalProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const handleLogin = () => {
        axios.post('https://dummyjson.com/auth/login', {
            username: loginInfo.username,
            password: loginInfo.password
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

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
                            <Input value={loginInfo.username} onChange={(e) => {
                                setLoginInfo({ ...loginInfo, username: e.target.value });
                            }} />
                            <FormHelperText id="component-helper-text">
                                Your email address
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <Input type="password" value={loginInfo.password} onChange={(e) => {
                                setLoginInfo({ ...loginInfo, password: e.target.value });
                            }} />
                            <FormHelperText id="component-helper-text">
                                Your password
                            </FormHelperText>
                        </FormControl>
                        <Button variant="contained" sx={{ mt: 2, color: '#ffffff', bgcolor: '#000000' }} fullWidth onClick={handleLogin}>
                            Login
                        </Button>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Typography variant="body2" >
                                Don't have an account?
                            </Typography>
                            <RegisterModal />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}