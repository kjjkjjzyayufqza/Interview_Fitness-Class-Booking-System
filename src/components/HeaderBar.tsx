import { Box, Button, Grid, Grid2, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LoginModal from './LoginModal'
import MOMXLogo from './MOMXLogo'
import { Link, redirect, useNavigate } from 'react-router'
import { isExpired } from 'react-jwt'
import { toast } from 'react-toastify'

export default function HeaderBar() {
    const [isShowLoginButton, setIsShowLoginButton] = useState<boolean>(true);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const tokenExp = isExpired(accessToken ? accessToken : '');
        if (accessToken && !tokenExp) {
            setIsShowLoginButton(false);
            setIsLogin(true);
        }
    }, [])
    let navigate = useNavigate();

    return (
        <Grid2 container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
        }}>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <MOMXLogo />
                    <Button
                        color="inherit"
                        component={Link}
                        sx={{ color: '#ffffff' }}
                        to="/">Fitness Class</Button>
                    {isLogin &&
                        <Button
                            color="inherit"
                            component={Link}
                            sx={{ color: '#ffffff' }}
                            to="/Dashboard">Dashboard</Button>
                    }
                </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }} sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
            }}>
                <Box sx={{
                    color: '#ffffff',
                    display: { xs: undefined, md: 'flex' },
                    alignItems: 'center',
                    mt: { xs: 2, md: 0 },
                }}>
                    {isShowLoginButton ? <LoginModal onSuccessLogin={() => {
                        toast.success("Login Success", {
                            autoClose: 2000
                        })
                        setIsShowLoginButton(false);
                        setIsLogin(true);
                        navigate('/Dashboard');
                    }} /> : <Button color="inherit"
                        onClick={() => {
                            toast.success("Logout Success", {
                                autoClose: 2000
                            })
                            localStorage.removeItem('accessToken');
                            localStorage.removeItem('refreshToken');
                            setIsShowLoginButton(true);
                            setIsLogin(false);
                            navigate('/');
                        }}
                    >Logout</Button>}
                </Box>
            </Grid2>
        </Grid2>
    )
}
