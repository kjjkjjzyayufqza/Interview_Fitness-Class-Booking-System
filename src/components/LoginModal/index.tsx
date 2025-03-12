import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, SxProps } from '@mui/material';
import MOMXLogo from '../MOMXLogo';
import axios from 'axios';

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
    onSuccessLogin?: () => void;
}

export default function LoginModal({ onSuccessLogin = () => { }, onOpen = () => { }, }: LoginModalProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginInfo, setLoginInfo] = useState({
        username: 'emilys',
        password: 'emilyspass'
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [callingLogin, setCallingLogin] = useState(false);

    const handleLogin = () => {
        setErrorMsg('')
        setCallingLogin(true);
        axios.post('https://dummyjson.com/auth/login', {
            username: loginInfo.username,
            password: loginInfo.password
        }).then((response) => {
            handleClose();
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            onSuccessLogin()
            setCallingLogin(false);
        }).catch((error) => {
            setErrorMsg('Invalid username or password');
            setCallingLogin(false);
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
                        <Button variant="contained" sx={{ mt: 2, color: '#ffffff', bgcolor: '#000000' }} fullWidth onClick={handleLogin} loading={callingLogin}>
                            Login
                        </Button>
                        <Typography color="error" variant="caption" sx={{ mt: 2 }}>
                            {errorMsg}
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}