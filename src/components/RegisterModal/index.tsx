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

interface RegisterModalProps {
    onOpen?: () => void;
    onClose?: () => void;
}

export default function RegisterModal({ onClose = () => { }, onOpen = () => { }, }: RegisterModalProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(true)
        onOpen()
    };
    const handleClose = () => {
        setOpen(false)
        onClose()
    };
    const [registerInfo, setRegisterInfo] = useState<{
        username: string,
        password: string,
        confirmPassword: string
    }>({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const checkFields = () => {
        if (registerInfo.username === '' || registerInfo.password === '' || registerInfo.confirmPassword === '') {
            return false;
        }
        if (registerInfo.password !== registerInfo.confirmPassword) {
            return false;
        }
        if (registerInfo.password.length < 8) {
            return false;
        }
        return true;
    }

    const handleRegister = () => {
        if (checkFields()) {

            fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: 'Muhammad',
                    lastName: 'Ovi',
                    age: 250,
                    /* other user data */
                })
            })
                .then(res => res.json())
                .then(console.log);
        }
    }

    return (
        <div>
            <Button color="inherit" onClick={handleOpen}>Sign Up</Button>
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
                    >
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Email</InputLabel>
                            <Input value={registerInfo.username} onChange={(e) => {
                                setRegisterInfo({ ...registerInfo, username: e.target.value });
                            }} />
                            <FormHelperText id="component-helper-text">
                                Your email address
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <Input type="password" value={registerInfo.password} onChange={(e) => {
                                setRegisterInfo({ ...registerInfo, password: e.target.value });
                            }} />
                            <FormHelperText id="component-helper-text">
                                At least 8 characters
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel>Confirm Password</InputLabel>
                            <Input type="password" value={registerInfo.confirmPassword} onChange={(e) => {
                                setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value });
                            }} />
                            <FormHelperText id="component-helper-text">
                                Must match password
                            </FormHelperText>
                        </FormControl>
                        <Button variant="contained" sx={{ mt: 2, color: '#ffffff', bgcolor: '#000000' }} fullWidth onClick={handleRegister}>
                            Register
                        </Button>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Typography variant="body2" >
                                Already have an account?
                            </Typography>
                            <Button color="inherit" onClick={() => {
                                handleClose();
                            }}>Login</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}