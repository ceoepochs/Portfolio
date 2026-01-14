import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const total = hero.offsetHeight - window.innerHeight;
      const p = Math.min(
        1,
        Math.max(0, (window.scrollY - hero.offsetTop) / total)
      );

      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textOpacity = (start: number, end: number) => {
    const mid = (start + end) / 2;
    const half = (end - start) / 2;

    // Distance from the center of the fade window
    const d = Math.abs(scrollProgress - mid);

    // Map distance → opacity
    return Math.max(0, 1 - d / half);
  };

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'calc(5000px + 100vh)',
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
            width: '100%',
            height: '100vh',
            pointerEvents: 'none'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                px: { xs: 3, md: 6 },
                textAlign: 'center',
                mx: 'auto',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: textOpacity(0.0, 0.25),
                    transition: 'opacity 0.2s linear',
                  }}
                >
                  Hi, my name is Colton.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: textOpacity(0.25, 0.5),
                    transition: 'opacity 0.2s linear',
                  }}
                >
                  I'm a Full-Stack Software Engineer who has written and deployed production level code for clients in 10+ different industries.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: textOpacity(0.5, 0.75),
                    transition: 'opacity 0.2s linear',
                  }}
                >
                  I'm passionate about the ongoing pursuit of knowledge, continually developing my skills and learning new technologies.
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: textOpacity(0.75, 1.0),
                    transition: 'opacity 0.2s linear',
                  }}
                >
                  Continue scrolling to see my work.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Spline scene="https://prod.spline.design/IAyRHpV-sLLCNOt9/scene.splinecode" />
        </Box>
      </Box>
    </Box>
  );
}
