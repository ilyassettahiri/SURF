import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MarketingLandingCaseStudies({ caseStudies }) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container maxWidth={false}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
        width: {xs: '99%', lg: '90%' },
      }}
    >
      <Stack
        spacing={3}
        sx={{

          textAlign: { xs: 'center', md: 'center' },
        }}
      >


        <Typography variant="h1">Experience the best water surfing</Typography>

        <Typography sx={{ color: 'text.secondary' }}>Welcome to our surf school. Our team of professional surf trainers are ready to help you learn to enjoy the waves right from the start</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          <SmallItem caseStudy={caseStudies[0]} />
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[1]} />
            ) : (
              <SmallItem caseStudy={caseStudies[1]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem caseStudy={caseStudies[2]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem caseStudy={caseStudies[3]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[4]} />
            ) : (
              <SmallItem caseStudy={caseStudies[4]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} />
          </Grid>
        )}
      </Grid>


    </Container>
  );
}

MarketingLandingCaseStudies.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function LargeItem({ caseStudy }) {
  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',

        },
         bgcolor: 'white'
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src="/assets/icons/beginners.jpg" ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>


          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            surfing school
          </Typography>

          <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
            Having a bad day? Catch some waves! Enjoy a place with perfect surfing conditions and our professional trainers.

          </TextMaxLine>
        </div>


      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({ caseStudy, square }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link component={RouterLink} href={paths.marketing.caseStudy}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
           bgcolor: 'white'
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {caseStudy.category}
          </Typography>
          <Typography variant="h6">{caseStudy.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src="/assets/icons/beginners.jpg"
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  square: PropTypes.bool,
};
