import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo({ sx }) {
  const fullLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      width="100%"
      height="100%"
    >
      <text
        x="0"
        y="75"
        fill="currentColor"
        fontFamily="Brush Script MT, cursive"
        fontSize="80"
      >
        SurfRabat
      </text>
    </svg>
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="#48cae4"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: 150,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  sx: PropTypes.object,
};

export default memo(Logo);
