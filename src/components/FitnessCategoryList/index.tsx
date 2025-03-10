import React from 'react'
import { FitnessCategoryModel, FitnessClassDetailModel } from '../../Model'
import { Box, Grid2 } from '@mui/material'
import FitnessCategoryListItem from '../FitnessCategoryListItem'

const fakeCategory: FitnessCategoryModel = {
    'BARRE': {
        'title': 'BARRE',
        'description': 'Barre is a dynamic fitness class that combines ballet-inspired movements with strength training for a full-body workout. Join us to sculpt your body, improve flexibility, and boost your confidence in a fun, supportive environment!',
        'img': '/images/category_BARRE.png'
    },
    'CYCSYNC': {
        'title': 'CYCSYNC',
        'description': 'CYCSYNC is an energetic cycling class that syncs music with rhythm-based movements. Pedal your way to fitness while enjoying an immersive experience that elevates your mood and endurance!',
        'img': '/images/category_CYCSYNC.png'
    },
    'BODYJAM': {
        'title': 'BODYJAM',
        'description': 'BODYJAM is a high-energy dance workout that combines the latest music with easy-to-follow choreography. Let loose, have fun, and burn calories while dancing your heart out!',
        'img': '/images/category_BODYJAM.png'
    },
    'BODYATTACK': {
        'title': 'BODYATTACK',
        'description': 'BODYATTACK is a high-intensity interval training class that combines cardio and strength exercises. Get ready to boost your fitness level and unleash your inner athlete in a motivating group environment!',
        'img': '/images/category_BODYATTACK.png'
    },
    'GRIT + CORE': {
        'title': 'GRIT + CORE',
        'description': 'GRIT + CORE is a powerful workout that focuses on building strength and core stability through intense intervals. Challenge yourself and achieve your fitness goals in a supportive atmosphere!',
        'img': '/images/category_GRITCORE.png'
    },
    'BODYBALANCE': {
        'title': 'BODYBALANCE',
        'description': 'BODYBALANCE is a harmonious blend of yoga, tai chi, and Pilates that enhances flexibility and mindfulness. Find your balance, relieve stress, and improve your overall well-being in a calming setting!',
        'img': '/images/category_BODYBALANCE.png'
    },
    'FULL-BODY WORKOUT': {
        'title': 'FULL-BODY WORKOUT',
        'description': 'Experience a comprehensive workout that targets every major muscle group! Our FULL-BODY WORKOUT combines strength, cardio, and flexibility for maximum results in a single session!',
        'img': '/images/category_FULLBODYWORKOUT.png'
    }
}


const fakeData: FitnessClassDetailModel[] = [
    {
        'id': 'BARRE1',
        'category': 'BARRE',
        'date': new Date('2025-03-15T10:00:00Z'),
        'time': '10:00(45min)',
        'remaining': 10,
        'location': 'Kwun Tong APM Studio',
        'instructor': 'James Smith',
        'img': '/images/ft_JamesSmith.png'
    },
    {
        'id': 'BARRE2',
        'category': 'BARRE',
        'date': new Date('2025-03-15T12:00:00Z'),
        'time': '12:00(45min)',
        'remaining': 5,
        'location': 'Central Fitness Studio',
        'instructor': 'Alex Rodriguez',
        'img': '/images/ft_AlexRodriguez.png'
    },
    {
        'id': 'BARRE2',
        'category': 'BARRE',
        'date': new Date('2025-03-16T12:00:00Z'),
        'time': '11:00(45min)',
        'remaining': 20,
        'location': 'Central Fitness Studio',
        'instructor': 'Alex Rodriguez',
        'img': '/images/ft_AlexRodriguez.png'
    },
    {
        'id': 'CYCSYNC1',
        'category': 'CYCSYNC',
        'date': new Date('2025-03-16T09:00:00Z'),
        'time': '09:00(60min)',
        'remaining': 8,
        'location': 'Tsim Sha Tsui Cycle Studio',
        'instructor': 'Michael Johnson',
        'img': '/images/ft_MichaelJohnson.png'
    },
    {
        'id': 'BODYATTACK1',
        'category': 'BODYATTACK',
        'date': new Date('2025-03-17T18:00:00Z'),
        'time': '18:00(45min)',
        'remaining': 15,
        'location': 'Causeway Bay Fitness Center',
        'instructor': 'Chris Brown',
        'img': '/images/ft_ChrisBrown.png'
    },
    {
        'id': 'GRITCORE1',
        'category': 'GRIT + CORE',
        'date': new Date('2025-03-18T16:00:00Z'),
        'time': '16:00(30min)',
        'remaining': 5,
        'location': 'Sheung Wan Training Hub',
        'instructor': 'Joshua Jones',
        'img': '/images/ft_JoshuaJones.png'
    },
    {
        'id': 'BODYBALANCE1',
        'category': 'BODYBALANCE',
        'date': new Date('2025-03-19T14:00:00Z'),
        'time': '14:00(60min)',
        'remaining': 10,
        'location': 'Sai Ying Pun Wellness Studio',
        'instructor': 'Matthew Garcia',
        'img': '/images/ft_MatthewGarcia.png'
    },
    {
        'id': 'FULLBODY1',
        'category': 'FULL-BODY WORKOUT',
        'date': new Date('2025-03-20T13:00:00Z'),
        'time': '13:00(60min)',
        'remaining': 20,
        'location': 'Happy Valley Fitness Club',
        'instructor': 'Ethan Martinez',
        'img': '/images/ft_EthanMartinez.png'
    },
    {
        'id': 'CYCSYNC2',
        'category': 'CYCSYNC',
        'date': new Date('2025-03-21T17:00:00Z'),
        'time': '17:00(60min)',
        'remaining': 6,
        'location': 'Wan Chai Cycling Studio',
        'instructor': 'Benjamin Hernandez',
        'img': '/images/ft_BenjaminHernandez.png'
    },
    {
        'id': 'BODYATTACK2',
        'category': 'BODYATTACK',
        'date': new Date('2025-03-23T19:00:00Z'),
        'time': '19:00(45min)',
        'remaining': 12,
        'location': 'Tung Chung Fitness Arena',
        'instructor': 'Samuel Gonzalez',
        'img': '/images/ft_SamuelGonzalez.png'
    }
];


export default function FitnessCategoryList() {
    return (
        <Grid2 container spacing={5}>
            {Object.keys(fakeCategory).map((category, i) => {
                return <Grid2 size={12} key={i}>
                    <FitnessCategoryListItem
                        title={fakeCategory[category].title}
                        description={fakeCategory[category].description}
                        img={fakeCategory[category].img}
                        data={fakeData}
                        bgColor={i % 2 === 0 ? '#323232' : '#505050'}
                    />
                </Grid2>
            })}
        </Grid2>
    )
}
