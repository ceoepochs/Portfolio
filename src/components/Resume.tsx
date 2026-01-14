import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Spline from '@splinetool/react-spline';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';

export default function Resume() {
  return (
    <Container
      id="resume"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Resume
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          width: '100%',
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '100vh'
          }}
        >
            <Spline scene="https://prod.spline.design/PQNkpOVTiiBehOAz/scene.splinecode" />
        </Box>
        <Box
          sx={{
            flex: 1,
            height: '100vh'
          }}
        >
            <Spline scene="https://prod.spline.design/qWc2OYsIAA4MkK8G/scene.splinecode" />
        </Box>
      </Box>
      <Button variant="outlined" component="a" href="/Colton Osterlund Resume.pdf" download startIcon={<Download />} sx={{ mt: 4 }}>
        Download PDF
      </Button>
    </Container>
  );
}
