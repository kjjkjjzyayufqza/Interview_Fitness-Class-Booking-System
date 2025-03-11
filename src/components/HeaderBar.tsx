import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginModal from './LoginModal'
import MOMXLogo from './MOMXLogo'
import { Link } from 'react-router'
export default function HeaderBar() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
        }}>
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
            </Box>
            <Box sx={{
                color: '#ffffff',
                display: { xs: undefined, md: 'flex' },
                alignItems: 'center',
            }}>
                <LoginModal />
            </Box>
        </Box>
    )
}
