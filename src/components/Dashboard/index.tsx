import { Box, Container } from '@mui/material'
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
