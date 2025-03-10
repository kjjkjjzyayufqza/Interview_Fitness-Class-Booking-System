import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import HeaderBar from '../components/HeaderBar'
import FooterBox from '../components/FooterBox'

export default function Layout() {
    return (
        <div>
            <HeaderBar />
            <Outlet />
            <FooterBox />
        </div>

    )
}
