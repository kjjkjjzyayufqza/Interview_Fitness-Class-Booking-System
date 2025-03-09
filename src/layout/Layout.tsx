import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import HeaderBar from '../components/HeaderBar'

export default function Layout() {
    return (
        <div>
            <HeaderBar />
            <Outlet />
        </div>

    )
}
