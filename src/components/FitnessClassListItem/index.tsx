import { ListItem, Box, Typography, CardHeader, Avatar, CardActions, Button, Tooltip } from '@mui/material'
import React from 'react'
import { FitnessClassAppointmentModel, FitnessClassDetailModel } from '../../Model'
import dayjs from 'dayjs'
import useUserIsLogin from '../../hook/getUserIsLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function FitnessClassListItem({ data }: {
    data: FitnessClassDetailModel,
}) {
    let navigate = useNavigate();
    const { isLoggedIn, userData } = useUserIsLogin();
    const handleBookingFitnessClass = async () => {
        const newData: FitnessClassAppointmentModel = {
            id: Math.random().toString(36).substring(7),
            userId: userData.id,
            fitnessClassId: data.id,
            date: data.date,
            createDate: new Date()
        }

        try {
            // get latest remaining number
            const fitnessClassResponse = await axios.get(`http://localhost:3001/fitnessClass/${data.id}`);
            if (fitnessClassResponse.data.remaining > 0) {
                //check user already book this class
                const appointmentsResponse = await axios.get(`http://localhost:3001/appointments?userId=${userData.id}&fitnessClassId=${data.id}`);
                if (appointmentsResponse.data.length > 0) {
                    toast.error('You already book this class', {
                        autoClose: 1000,
                    })
                    return;
                }
                let remaining = fitnessClassResponse.data.remaining - 1;
                // update remaining number
                await axios.patch(`http://localhost:3001/fitnessClass/${data.id}`, { remaining: remaining });
                // create new appointment
                await axios.post('http://localhost:3001/appointments', newData);
                navigate('/Dashboard');
            } else {
                toast.error('This class is full', {
                    autoClose: 1000, onClose: () => {
                        // refresh page
                        window.location.reload();
                    }
                })
            }

        } catch (err) {
            console.error(err);
        }


    }
    return (
        <ListItem alignItems='flex-start' sx={{ padding: 0 }}>
            <Box>
                <Typography variant="h6" gutterBottom>
                    {dayjs(data.date).format('DD MMM YYYY')}
                </Typography>
                <Box sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar src={data.img} sx={{
                                width: 80,
                                height: 80,
                            }} />
                        }
                        title={
                            <Box>
                                <Typography variant="body2" sx={{ color: '#8a8a8a' }} gutterBottom>
                                    {data.category}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    {data.instructor}
                                </Typography>
                            </Box>
                        }
                        subheader={
                            <Box >
                                <Typography variant="body2" sx={{ color: '#e2e2e2' }}>
                                    {data.time}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#e2e2e2' }} gutterBottom>
                                    Remaining: {data.remaining}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#e2e2e2' }}>
                                    {data.location}
                                </Typography>
                            </Box>
                        }
                    />
                    <CardActions>
                        <Tooltip title={isLoggedIn ? "" : "You need login before booking"} placement="top">
                            <Button
                                size="small"
                                variant='contained'
                                sx={{ bgcolor: '#000000', color: '#ffffff' }}
                                disabled={data.remaining === 0}
                                onClick={handleBookingFitnessClass}
                            >
                                Book Now
                            </Button>
                        </Tooltip>
                    </CardActions>
                </Box>
            </Box>
        </ListItem>
    )
}
