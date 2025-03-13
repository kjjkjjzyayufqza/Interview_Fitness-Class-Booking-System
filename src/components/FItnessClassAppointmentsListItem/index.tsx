import { Card, CardHeader, Avatar, Box, Typography, CardContent, CardActions, Button } from '@mui/material';
import dayjs from 'dayjs';
import { FitnessClassDisplayAppointmentModel } from '../../Model';

export default function FItnessClassAppointmentsListItem({ fitnessAppointment,
    onSelectAppointmentId,
    handleClickOpenDialog
}: {
    fitnessAppointment: FitnessClassDisplayAppointmentModel,
    onSelectAppointmentId: (appointmentId: string) => void,
    handleClickOpenDialog: () => void
}) {
    return (
        <Card sx={{ width: '100%', bgcolor: '#a7a7a7' }}>
            <CardHeader
                sx={{
                    textAlign: 'left'
                }}
                avatar={
                    <Avatar src={fitnessAppointment.img} sx={{
                        width: 80,
                        height: 80,
                    }} />
                }
                title={<Box>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }} gutterBottom>
                        {fitnessAppointment.category}
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#000000', fontWeight: 'bold' }}>
                        {fitnessAppointment.instructor}
                    </Typography>
                </Box>}
                subheader={
                    <Box >
                        <Typography variant="h6" sx={{ color: '#000000' }}>
                            {dayjs(fitnessAppointment.date).format('DD MMM YYYY')}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#000000' }}>
                            {fitnessAppointment.time}
                        </Typography>
                    </Box>
                }
            />
            <CardContent>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    {fitnessAppointment.location}
                </Typography>
                <iframe width="80%" height="600" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Snap%20Fitness%2024/7%20%E7%81%A3%E4%BB%94%E5%BA%97+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="map">
                </iframe>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    variant='contained'
                    color='primary'
                    sx={{
                        bgcolor: '#000000',
                        color: '#ffffff'
                    }}
                    onClick={() => {
                        onSelectAppointmentId(fitnessAppointment.appointmentId);
                        handleClickOpenDialog();
                    }}
                >
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}
