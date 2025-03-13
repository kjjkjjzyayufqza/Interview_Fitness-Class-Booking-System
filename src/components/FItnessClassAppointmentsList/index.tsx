import { Box, Typography, Button, Avatar, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FitnessClassAppointmentModel, FitnessClassDetailModel, FitnessClassDisplayAppointmentModel } from '../../Model'
import axios from 'axios'
import useUserIsLogin from '../../hook/getUserIsLogin'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import FItnessClassAppointmentsListItem from '../FItnessClassAppointmentsListItem'

export default function FItnessClassAppointmentsList() {

    const [appointments, setAppointments] = useState<FitnessClassAppointmentModel[]>([])
    const [displayFitnessAppointment, setDisplayFitnessAppointment] = useState<FitnessClassDisplayAppointmentModel[]>([])
    const { userData } = useUserIsLogin();
    const [openCancelConfirmDialog, setOpenCancelConfirmDialog] = useState<boolean>(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>();
    const [isCancelingAppointment, setIsCancelingAppointment] = useState<boolean>(false);

    const handleCancelDialog = () => {
        setOpenCancelConfirmDialog(false);
    }

    const handleClickOpenDialog = () => {
        setOpenCancelConfirmDialog(true);
    }

    const handleGetAppointments = async () => {
        // get appointments
        try {
            if (!userData?.id) return;
            let appointments: FitnessClassAppointmentModel[] = [];
            appointments = await axios.get('http://localhost:3001/appointments', {
                params: {
                    userId: userData?.id
                }
            }).then(res => res.data);
            if (appointments.length == 0 || !appointments) {
                setDisplayFitnessAppointment([]);
                return;
            }
            setAppointments(appointments);
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
        } catch (err) {
            console.log(err);
        }
    }

    const handleCancelAppointment = async () => {
        const appointmentId = selectedAppointmentId;
        try {
            // get appointment
            const appointment = appointments.find(appointment => appointment.id == appointmentId);
            if (!appointment) return;
            setIsCancelingAppointment(true);
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
            setIsCancelingAppointment(false);
        } catch (err) {
            console.log(err);
            setIsCancelingAppointment(false);
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
                    <Button onClick={handleCancelDialog}
                        disabled={isCancelingAppointment}
                    >Cancel</Button>
                    <Button onClick={() => {
                        handleCancelAppointment();
                    }}
                        autoFocus
                        loading={isCancelingAppointment}
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            {displayFitnessAppointment.length > 0 && <Typography variant="h3" gutterBottom>
                Upcoming Classes
            </Typography>}
            {displayFitnessAppointment.map((fitnessAppointment, i) => {
                return (
                    <Box key={i} width={'100%'}>
                        <FItnessClassAppointmentsListItem
                            fitnessAppointment={fitnessAppointment}
                            onSelectAppointmentId={setSelectedAppointmentId}
                            handleClickOpenDialog={handleClickOpenDialog}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}
