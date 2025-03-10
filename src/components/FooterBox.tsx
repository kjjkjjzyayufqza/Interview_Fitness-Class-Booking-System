import { Container, Typography, Link, Box } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function FooterBox() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ py: 4, textAlign: 'center', color: '#ffffff' }}>
                <Typography variant="h6" gutterBottom>
                    MOMX
                </Typography>
                <Typography variant="body2" >
                    © {new Date().getFullYear()} MOMX. All rights reserved.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        About Us
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Services
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        Contact
                    </Link>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Facebook />
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Instagram />
                    </Link>
                    <Link href="#" color="inherit" sx={{ mx: 1 }}>
                        <Twitter />
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}
