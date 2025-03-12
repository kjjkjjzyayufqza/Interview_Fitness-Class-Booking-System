import { Box, Typography, Button, Avatar, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FitnessClassAppointmentModel, FitnessClassDetailModel, FitnessClassDisplayAppointmentModel } from '../../Model'
import axios from 'axios'
import useUserIsLogin from '../../hook/getUserIsLogin'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

export default function FItnessClassAppointmentsList() {

    const [appointments, setAppointments] = useState<FitnessClassAppointmentModel[]>([])
    const [displayFitnessAppointment, setDisplayFitnessAppointment] = useState<FitnessClassDisplayAppointmentModel[]>([])
    const { userData } = useUserIsLogin();
    const [openCancelConfirmDialog, setOpenCancelConfirmDialog] = useState<boolean>(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>();

    const handleCancelDialog = () => {
        setOpenCancelConfirmDialog(false);
    }

    const handleClickOpenDialog = () => {
        setOpenCancelConfirmDialog(true);
    }

    const handleGetAppointments = async () => {
        // get appointments
        if (!userData?.id) return;
        let appointments: FitnessClassAppointmentModel[] = [];
        axios.get('http://localhost:3001/appointments', {
            params: {
                userId: userData?.id
            }
        })
            .then(res => {
                setAppointments(res.data);
                appointments = res.data;
            })
            .catch(err => {
                console.error(err);
            })
        const fitnessClass: FitnessClassDetailModel[] = await axios.get('http://localhost:3001/fitnessClass').then(res => res.data);

        // mapping appointments with fitness class
        let displayAppointments: FitnessClassDisplayAppointmentModel[] = [];
        appointments.forEach(appointment => {
            const fitnessClassData = fitnessClass.find(fitnessClass => fitnessClass.id === appointment.fitnessClassId);
            if (fitnessClassData) {
                const data = {
                    appointmentId: appointment.id,
                    ...fitnessClassData
                }
                displayAppointments.push(data);
            }
        })

        // sort by date
        displayAppointments.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        })
        setDisplayFitnessAppointment(displayAppointments);
    }

    const handleCancelAppointment = async () => {
        const appointmentId = selectedAppointmentId;
        try {
            // get appointment
            const appointment = appointments.find(appointment => appointment.id == appointmentId);
            if (!appointment) return;
            // get fitness class
            const fitnessClass = await axios.get(`http://localhost:3001/fitnessClass/${appointment.fitnessClassId}`).then(res => res.data);
            // update remaining number
            const remaining = fitnessClass.remaining + 1;
            await axios.patch(`http://localhost:3001/fitnessClass/${appointment.fitnessClassId}`, { remaining: remaining });
            // delete appointment
            await axios.delete(`http://localhost:3001/appointments/${appointmentId}`);
            handleGetAppointments();
            toast.success('Cancel appointment successfully', {
                autoClose: 1000
            })
            setOpenCancelConfirmDialog(false);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGetAppointments();
    }, [userData])

    return (
        <Box sx={{ color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            {displayFitnessAppointment.length == 0 &&
                <>
                    <Typography variant="h3" gutterBottom>
                        You don't have any class yet!
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
                        <Typography variant="body1">
                            Please book your class first
                        </Typography>
                        <Button
                            color='inherit'
                            component={Link}
                            to='/'
                            size='large'
                            sx={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
                            Book Now
                        </Button>
                    </Box>
                </>
            }
            <Dialog
                open={openCancelConfirmDialog}
                onClose={handleCancelDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Cancel Appointment
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to cancel this appointment?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDialog}>Cancel</Button>
                    <Button onClick={() => {
                        handleCancelAppointment();
                    }} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <Typography variant="h3" gutterBottom>
                Upcoming Classes
            </Typography>
            {displayFitnessAppointment.map((fitnessAppointment, i) => {
                return (
                    <Card sx={{ width: '100%', bgcolor: '#a7a7a7' }} key={i}>
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
                                onClick={() => {
                                    setSelectedAppointmentId(fitnessAppointment.appointmentId);
                                    handleClickOpenDialog();
                                }}
                            >
                                Cancel
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </Box>
    )
}
