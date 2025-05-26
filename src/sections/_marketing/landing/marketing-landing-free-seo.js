import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledInput = styled((props) => <TextField fullWidth {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.common.white, // background of the input box
  borderRadius: theme.shape.borderRadius, // optional: keeps it rounded

  [`& .${inputBaseClasses.input}`]: {
    color: theme.palette.text.primary, // black text inside
  },

  [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
    color: theme.palette.text.secondary,
    [`&.${inputLabelClasses.focused}`]: {
      color: theme.palette.text.secondary,
    },
  },
}));


StyledInput.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      common: PropTypes.shape({
        white: PropTypes.string,
      }),
      grey: PropTypes.string,
    }),
  }),
};

// ----------------------------------------------------------------------

export default function MarketingLandingFreeSEO() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',


      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        src="/assets/vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',



        }}
      />


      {/* Overlay content */}
      <Container sx={{ position: 'relative', zIndex: 1,  py: { xs: 10, md: 15 }, }}>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: 'primary.main',
                mb: { xs: 3, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Ready to start new hobby right now?


            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify icon="carbon:email" width={24} sx={{ mr: 2 }} />
              <Link color="inherit" href="mailto:contact@surfrabat.com">
                contact@surfrabat.com
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white' }}
            >
              <Iconify icon="carbon:location" width={24} sx={{ mr: 2 }} />
              Rabat Surf School, N5 Plage de Rabat, Rabat 10030
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <StyledInput label="Name" sx={{ mb: 2.5 }} />
              <StyledInput label="Email" sx={{ mb: 2.5 }} />
              <StyledInput label="Phone" sx={{ mb: 2.5 }} />


              <Button size="large" variant="contained" color="info">
                Send Request
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>



      <Box sx={{ position: 'relative', zIndex: 2,        mb:-1, }}>
        <svg viewBox="0 0 1440 125" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <g>
            <path
              fill="#ebfaff"
              d="M1256 11.76C1237.2 17.26 1209.4 27.56 1170 25.76C1127.2 23.86 1125.3 10.16 1087 7.75998C1026.9 3.95998 1015 36.56 959 29.76C920.1 25.06 921.3 8.85998 884 7.75998C841.3 6.55998 834.4 27.66 790 27.76C749.8 27.86 748.5 10.66 707 9.75998C662.5 8.75998 658.2 28.46 611 31.76C563.1 35.06 560 15.26 504 13.76C452.5 12.36 450 28.96 396 29.76C336.7 30.56 332.6 9.35998 279.1 10.76C216.3 12.36 202.3 40.36 146 43.76C112.8 45.76 63 41.96 0 10.76V124.6H1440V10.76C1353.8 -7.34002 1294.8 0.459979 1256 11.76Z"
            />
          </g>
        </svg>
      </Box>

    </Box>
  );
}
