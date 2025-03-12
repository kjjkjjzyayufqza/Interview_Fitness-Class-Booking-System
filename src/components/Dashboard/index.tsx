import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import FitnessCategoryList from '../FitnessCategoryList'
import { Link } from 'react-router'
import FItnessClassAppointmentsList from '../FItnessClassAppointmentsList'

export default function Dashboard() {
    return (
        <Box sx={{ color: '#ffffff' }}>
            <Container maxWidth="xl" sx={{ py: { xs: 10, md: 20 }, textAlign: 'center' }}>
                <FItnessClassAppointmentsList />
            </Container>
        </Box>
    )
}
