import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
];

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');


  return (
    <>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          overflow: 'hidden',
          pt:10,
        }}
      >
        <Container maxWidth={false}
          sx={{
            py: 5,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
            width: {xs: '99%', lg: '90%' },

          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={6}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                }}
              >
                <Typography variant="h1">
                  Surf
                  <Box component="span" sx={{ color: '#48cae4', textDecoration: 'underline' }}>
                    {` Rabat `}
                  </Box>
                  <Typography></Typography>
                  <Box component="span" sx={{  }}>
                    {` Float `}
                  </Box>
                  in a weightless world
                </Typography>

                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
                  Experience incredible emotions discovering new amazing underwater worlds with our surfing school.

                </Typography>

                <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                  <Button color="info" size="large" variant="contained">
                    Ready to Start
                  </Button>


                </Stack>



              </Stack>
            </Grid>

            {mdUp && (
              <Grid xs={12} md={6} lg={6}>
                <ElearningHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

    </>
  );
}
