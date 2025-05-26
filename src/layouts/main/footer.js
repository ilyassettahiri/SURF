import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const pathname = usePathname();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = mdUp ? desktopList : mobileList;



  const mainFooter = (
    <>


      <Container
        maxWidth={false}
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 5 },
          width: {xs: '99%', lg: '90%' },

        }}
      >
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid container spacing={3}>
            {/* 1. About / Social */}
            <Grid xs={12} md={4}>
              <Stack spacing={{ xs: 3, md: 5 }}>
                <Stack alignItems="flex-start" spacing={3}>
                  <Logo />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Private coach/Surf School/surf lesson Coaching in Rabat and throughout Morocco guided by national champion @chadi_lahrioui
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Typography variant="h6">Social</Typography>
                  <Stack direction="row" alignItems="center">
                    {_socials.map((social) => (
                      <IconButton key={social.value} color="info">
                        <Iconify icon={social.icon} width='80'  />
                      </IconButton>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            {/* 2. Contact Information */}
            <Grid xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Address: Rabat Surf School, N5 Plage de Rabat, Rabat 10030
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Phone: +212 6 19 19 68 19
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Email: contact@surfrabat.com<Link href="mailto:hello@example.com">contact@surfrabat.com</Link>
                </Typography>
              </Stack>
            </Grid>

            {/* 3. Important Links */}
            <Grid xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6">Important Links</Typography>
                <Link href="#" variant="body2" sx={{ color: 'text.primary' }}>About Us</Link>
                <Link href="#" variant="body2" sx={{ color: 'text.primary' }}>Our Team</Link>
                <Link href="#" variant="body2" sx={{ color: 'text.primary' }}>Shop</Link>
                <Link href="#" variant="body2" sx={{ color: 'text.primary' }}>Blog</Link>
                <Link href="#" variant="body2" sx={{ color: 'text.primary' }}>Contact Us</Link>
              </Stack>
            </Grid>
          </Grid>



        </Grid>
      </Container>


      <Container maxWidth={false}
        sx={{

          width: {xs: '99%', lg: '90%' },

        }}>
        <Stack
          spacing={2.5}

          justifyContent="center"
          sx={{ py: 2, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2025. Surf Rabat - All rights reserved
          </Typography>


        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

