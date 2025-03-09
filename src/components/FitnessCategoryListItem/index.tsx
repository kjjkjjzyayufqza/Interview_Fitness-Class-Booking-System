import { Grid2, Box, Typography, Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FitnessClassListItem from '../FitnessClassListItem';
import { FitnessClassDetailModel } from '../../Model';

export interface FitnessCategoryListItemProps {
    title: string;
    description: string;
    img: string;
    data: FitnessClassDetailModel[];
    bgColor?: string;
}

export default function FitnessCategoryListItem({
    title, description, img, data, bgColor
}: FitnessCategoryListItemProps) {
    return (
        <Grid2 container sx={{ width: '100%', bgcolor: bgColor ?? '#323232' }} spacing={1}>
            <Grid2 container size={{ sm: 12, md: 6 }} sx={{ display: 'flex' }}>
                <Grid2 size={{ sm: 12, md: 6 }}>
                    <Box
                        component="img"
                        src={img}
                        sx={{
                            objectFit: 'cover',
                            width: '100%',
                            height: { sm: 300, md: '100%' },
                            maskImage: { sm: undefined, md: 'linear-gradient(to right, black 60%, transparent 100%)' },
                            WebkitMaskImage: { sm: undefined, md: 'linear-gradient(to right, black 60%, transparent 100%)' },
                        }}
                    />
                </Grid2>
                <Grid2 size={{ sm: 12, md: 6 }}>
                    <Box p={3}>
                        <Typography variant="h4" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {description}
                        </Typography>
                        <Button variant="text" color="inherit" sx={{
                            color: '#8a8a8a',
                            px: 0
                        }}
                            endIcon={<ArrowRightAltIcon />}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 6 }} p={3}>
                <Typography variant="h4" gutterBottom>
                    CLASSES TIMETABLE
                </Typography>
                <Box sx={{
                    flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', padding: 0,
                    width: '100%',
                    overflowX: 'scroll',
                }}>
                    {data.map((fitnessClassDetail, i) => {
                        return <Box key={i} minWidth={345}>
                            <FitnessClassListItem
                                data={fitnessClassDetail}
                            />
                        </Box>
                    })}
                </Box>
            </Grid2>
        </Grid2>
    )
}
