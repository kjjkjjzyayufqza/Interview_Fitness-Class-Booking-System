import { cleanup, render, screen } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom'
import React from 'react';
import HeaderBar from '../components/HeaderBar';
import { BrowserRouter } from 'react-router';
const mockUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockUsedNavigate,
}));
// Mock axios
jest.mock("axios", () => ({
    get: jest.fn(() => {
        const expectedResponse = {};
        return Promise.resolve(expectedResponse);
    }),
}));

afterEach(cleanup);

describe('HeaderBar component', () => {
    it('Show login button when not login', async () => {
        render(<BrowserRouter><HeaderBar /></BrowserRouter>);
        const loginButton = await screen.findByRole('button', { name: /Login/i });
        expect(loginButton).toBeInTheDocument
    });
});