import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import LoginModal from './LoginModal'
import MOMXLogo from './MOMXLogo'
export default function HeaderBar() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
        }}>
            <MOMXLogo />
            <Box sx={{
                color: '#ffffff',
            }}>
                <LoginModal />
                <Button color="inherit">Sign Up</Button>
            </Box>
        </Box>
    )
}
