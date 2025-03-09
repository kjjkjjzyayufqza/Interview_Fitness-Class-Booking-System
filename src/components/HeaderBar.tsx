import { Box, Button, Typography } from '@mui/material'
import React from 'react'
export default function HeaderBar() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
        }}>
            <Box sx={{
                bgcolor: '#ffffff',
                px: 2,
                py: 1,
                borderRadius: 1
            }}>
                <Typography variant="h2">
                    MOMX
                </Typography>
            </Box>
            <Box sx={{
                color: '#ffffff',
            }}>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
            </Box>
        </Box>
    )
}
