import React, { useEffect, useState } from 'react'
import { FitnessCategoryModel, FitnessClassDetailModel } from '../../Model'
import { Box, Grid2 } from '@mui/material'
import FitnessCategoryListItem from '../FitnessCategoryListItem'
import axios from 'axios'

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


export default function FitnessCategoryList() {

    const [fitnessClassListData, setFitnessClassListData] = useState<FitnessClassDetailModel[]>([]);
    const handleGetFitnessClassList = () => {
        axios.get('http://localhost:3001/fitnessClass')
            .then(res => {
                setFitnessClassListData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        handleGetFitnessClassList();
    }, [])

    return (
        <Grid2 container spacing={5}>
            {Object.keys(fakeCategory).map((category, i) => {
                return <Grid2 size={12} key={i}>
                    <FitnessCategoryListItem
                        title={fakeCategory[category].title}
                        description={fakeCategory[category].description}
                        img={fakeCategory[category].img}
                        data={fitnessClassListData}
                        bgColor={i % 2 === 0 ? '#323232' : '#505050'}
                    />
                </Grid2>
            })}
        </Grid2>
    )
}
