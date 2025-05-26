import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SERVICES = [
  {
    name: 'Beginners',
    icon: '/assets/icons/beginners.jpg',
  },
  {
    name: 'Intermediates',
    icon: '/assets/icons/intermediates.jpg',
  },
  {
    name: 'Advanced',
    icon: '/assets/icons/advanced.jpg',
  },
  {
    name: 'Yoga',
    icon: '/assets/icons/yoga.jpg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    <Container maxWidth={false}
      sx={{
        py: { xs: 5, md: 10 },
        width: {xs: '99%', lg: '90%' },
      }}
    >
      <Stack
        spacing={3}
        sx={{

          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'center' },
        }}
      >


        <Typography variant="h1">We teach surfers from any level</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Rabat is blessed with year round sunshine and amazing waves making it the perfect place for beginners learning to surf and experienced surfers hoping to score barrelling right hand point breaks.


        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'flex-end',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
function ServiceItem({ service, index }) {
  const { name, icon } = service;

  return (
    <Card
      sx={{
        position: 'relative',
        height: 240,
        overflow: 'hidden',
        p: 0,
        boxShadow: (theme) =>
          `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 1 && { mb: { md: 2.5 } }),
        ...(index === 2 && { mb: { md: 5 } }),
        ...(index === 3 && { mb: { md: 7.5 } }),
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${icon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Centered text */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'common.white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {name}
        </Typography>
      </Box>
    </Card>
  );
}


ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
