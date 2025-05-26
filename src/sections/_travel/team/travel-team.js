import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TravelTeamItem from './travel-team-item';

// ----------------------------------------------------------------------

export default function TravelTeam({ members }) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Meet our trainers</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Get on Rabat Beach waters! Enjoy a place with perfect surfing conditions and our professional trainers.

        </Typography>
      </Stack>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <TravelTeamItem key={member.id} member={member} />
        ))}
      </Box>
    </Container>
  );
}

TravelTeam.propTypes = {
  members: PropTypes.array,
};
