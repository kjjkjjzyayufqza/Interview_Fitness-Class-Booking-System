import { ListItem, Box, Typography, CardHeader, Avatar, CardActions, Button } from '@mui/material'
import React from 'react'
import { FitnessClassDetailModel } from '../../Model'

export default function FitnessClassListItem({ data }: {
    data: FitnessClassDetailModel,
}) {
    return (
        <ListItem alignItems='flex-start' sx={{ padding: 0 }}>
            <Box>
                <Typography variant="h6" gutterBottom>
                    {data.date.toDateString()}
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
                        <Button
                            size="small"
                            variant='contained'
                            sx={{ bgcolor: '#000000', color: '#ffffff' }}>
                            Book Now
                        </Button>
                    </CardActions>
                </Box>
            </Box>
        </ListItem>
    )
}
