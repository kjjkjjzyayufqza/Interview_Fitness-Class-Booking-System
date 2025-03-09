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
        'description': '',
        'img': '/images/category_CYCSYNC.png'
    },
    'BODYJAM': {
        'title': 'BODYJAM',
        'description': '',
        'img': '/images/category_BODYJAM.png'
    },
    'BODYATTACK': {
        'title': 'BODYATTACK',
        'description': '',
        'img': '/images/category_BODYATTACK.png'
    },
    'GRIT + CORE': {
        'title': 'GRIT + CORE',
        'description': '',
        'img': '/images/category_GRITCORE.png'
    },
    'BODYBALANCE': {
        'title': 'BODYBALANCE',
        'description': '',
        'img': '/images/category_BODYBALANCE.png'
    },
    'FULL-BODY WORKOUT': {
        'title': 'FULL-BODY WORKOUT',
        'description': '',
        'img': '/images/category_FULLBODYWORKOUT.png'
    }
}


const fakeData: FitnessClassDetailModel[] = [{
    'id': 'BARRE1',
    'category': 'BARRE',
    'date': new Date(),
    'time': '10:00(45min)',
    'remaining': 10,
    'location': 'Kwun Tong APM Studio',
    'instructor': 'John Doe',
    'img': '/images/ft_1_.png'
}]

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
