import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'calc(2500px + 100vh)',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, #002952, transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: 'block', sm: 'inline-flex' }, alignItems: 'center' }}
            >
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                C
              </Typography>
              olton&nbsp;
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: 'block', sm: 'inline-flex' }, alignItems: 'center' }}
            >
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                E
              </Typography>
              ric&nbsp;
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: 'block', sm: 'inline-flex' }, alignItems: 'center' }}
            >
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                O
              </Typography>
              sterlund
            </Box>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >

          </Typography>
        </Stack>
      </Container>
      <Box
          sx={{
            position: 'relative',
            flex: 1,
            width: '100%',
          }}
        >
          <Box id="developer"
            sx={{
              position: 'sticky',
              top: 0,
              alignSelf: 'center',
              width: '100%',
              height: '100vh',
              pointerEvents: 'none'
            }}
          >
            <Spline scene="https://prod.spline.design/IAyRHpV-sLLCNOt9/scene.splinecode" />
          </Box>
        </Box>
    </Box>
  );
}
