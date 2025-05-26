import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import TravelTourItem from '../list/travel-tour-item';

// ----------------------------------------------------------------------

export default function TravelLandingTourFeatured({ tours }) {
  return (
    <Container maxWidth={false}
      sx={{
        py: { xs: 5, md: 10 },
        width: {xs: '99%', lg: '90%' },
      }}
    >
      <Stack spacing={3} >



      </Stack>

      <Stack
        spacing={3}
        sx={{
           maxWidth: 780,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >


        <Typography variant="h2">Become a pro surfer</Typography>

        <Typography sx={{ color: 'text.secondary' }}>Ready to start new hobby right now?</Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          my: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {tours.map((tour) => (
          <TravelTourItem key={tour.id} tour={tour} />
        ))}
      </Box>


    </Container>
  );
}

TravelLandingTourFeatured.propTypes = {
  tours: PropTypes.array,
};
