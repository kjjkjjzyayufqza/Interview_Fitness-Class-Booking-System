import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function MOMXLogo() {
    return (
        <Box
            sx={{
                bgcolor: '#ffffff',
                px: 2,
                py: 1,
                borderRadius: 1,
            }}>
            <Box
                sx={{
                    fontSize: { xs: 20, md: 30 },
                }}>
                MOMX
            </Box>
        </Box>
    )
}
