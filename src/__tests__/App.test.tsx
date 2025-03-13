import { cleanup, render, screen } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom'
import App from '../App';

// Mock axios
jest.mock("axios", () => ({
    get: jest.fn(() => {
        const expectedResponse = {};
        return Promise.resolve(expectedResponse);
    }),
}));

afterEach(cleanup);

describe('App component', () => {
    it('Mapping BARRE fitness category list', async () => {
        render(<App />);
        const barreCategory = await screen.findByText(/Barre is a dynamic fitness class that combines /i);
        expect(barreCategory).toBeInTheDocument();
    });
});