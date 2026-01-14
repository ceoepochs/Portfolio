import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import Spline from '@splinetool/react-spline';
import { Download } from '@mui/icons-material';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Blender',
    description:
      'Blender VST project description.',
    imageLight: `url(https://mui.com/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url(https://mui.com/static/images/templates/templates-images/dash-dark.png")`,
    splineScene: 'https://prod.spline.design/e2jcR3HAeuCfIGXB/scene.splinecode',
    github: 'https://github.com/ColtonOsterlund/blender',
    downloadWindows: "/Blender V4 Installer.exe",
    downloadMac: "/Blender V4 Installer.dmg",
    downloadDemo: "/Blender Demo.mp4",
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'MIDI Generator',
    description:
      'MIDI generator project description.',
    imageLight: `url(https://mui.com/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url(https://mui.com/static/images/templates/templates-images/mobile-dark.png")`,
    github: 'https://github.com/ColtonOsterlund/music_generator',
    splineScene: 'https://prod.spline.design/oSTnDOiZoW3vu0K8/scene.splinecode',
    chordProgressionModelNotebook: 'https://colab.research.google.com/drive/1CQsvg08MM_coit_HexZp16pUtdV6s02y?usp=sharing',
    guitarModelNotebook: 'https://colab.research.google.com/drive/1vCSat7rJofHz91fqaxI6vxDLysD9S6-N?usp=sharing',
    downloadDemo: "AI Generated MIDI.mid",
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
        <Box
            sx={{
              width: '100%',
              height: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 1,
            }}
          >
            {items[selectedItemIndex].splineScene && (
              <Spline
                scene={items[selectedItemIndex].splineScene}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mt: 1,
            }}
          >
            {items[selectedItemIndex].github && (
            <Button
              variant="contained"
              color="primary"
              href={items[selectedItemIndex].github}
              target="_blank"
            >
              GitHub
            </Button>
          )}
          {items[selectedItemIndex].title === "Blender" && (
            <>
              {items[selectedItemIndex].downloadDemo && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadDemo}
                  download
                  startIcon={<Download />}
                >
                  Demo (v4.0)
                </Button>
              )}
              {items[selectedItemIndex].downloadWindows && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadWindows}
                  download
                  startIcon={<Download />}
                >
                  Windows (v4.0)
                </Button>
              )}
              {items[selectedItemIndex].downloadMac && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadMac}
                  download
                  startIcon={<Download />}
                >
                  Mac (v4.0)
                </Button>
              )}
            </>
          )}
          {items[selectedItemIndex].title === "MIDI Generator" && (
            <>
              {items[selectedItemIndex].downloadDemo && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadDemo}
                  download
                  startIcon={<Download />}
                >
                  Demo (.mid)
                </Button>
              )}
              {items[selectedItemIndex].chordProgressionModelNotebook && (
                <Button
                  variant="contained"
                  color="primary"
                  href={items[selectedItemIndex].chordProgressionModelNotebook}
                  target="_blank"
                >
                  Chord Progression Model (v3.0)
                </Button>
              )}
              {items[selectedItemIndex].guitarModelNotebook && (
                <Button
                  variant="contained"
                  color="primary"
                  href={items[selectedItemIndex].guitarModelNotebook!}
                  target="_blank"
                >
                  Guitar Model (v3.0)
                </Button>
              )}
            </>
          )}
          </Box>
      </Card>
    </Box>
  );
}

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="projects" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Personal Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          My personal projects are a reflection of my passions outside of programming, focusing on software for music production.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Card
          variant="outlined"
          sx={{
            height: '100%',
            width: '100%',
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            p: 2,
            gap: 2,
          }}
        >

          <Box
            sx={{
              width: '100%',
              height: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >

            {items[selectedItemIndex].splineScene && (
              <Spline
                scene={items[selectedItemIndex].splineScene}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mt: 1,
            }}
          >
            {items[selectedItemIndex].github && (
            <Button
              variant="contained"
              color="primary"
              href={items[selectedItemIndex].github}
              target="_blank"
            >
              GitHub
            </Button>
          )}
          {items[selectedItemIndex].title === "Blender" && (
            <>
              {items[selectedItemIndex].downloadDemo && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadDemo}
                  download
                  startIcon={<Download />}
                >
                  Demo (v4.0)
                </Button>
              )}
              {items[selectedItemIndex].downloadWindows && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadWindows}
                  download
                  startIcon={<Download />}
                >
                  Windows (v4.0)
                </Button>
              )}
              {items[selectedItemIndex].downloadMac && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadMac}
                  download
                  startIcon={<Download />}
                >
                  Mac (v4.0)
                </Button>
              )}
            </>
          )}
          {items[selectedItemIndex].title === "MIDI Generator" && (
            <>
              {items[selectedItemIndex].chordProgressionModelNotebook && (
                <Button
                  variant="contained"
                  color="primary"
                  href={items[selectedItemIndex].chordProgressionModelNotebook}
                  target="_blank"
                >
                  Chord Progression Model (v3.0)
                </Button>
              )}
              {items[selectedItemIndex].guitarModelNotebook && (
                <Button
                  variant="contained"
                  color="primary"
                  href={items[selectedItemIndex].guitarModelNotebook!}
                  target="_blank"
                >
                  Guitar Model (v3.0)
                </Button>
              )}
              {items[selectedItemIndex].downloadDemo && (
                <Button
                  variant="outlined"
                  component="a"
                  href={items[selectedItemIndex].downloadDemo}
                  download
                  startIcon={<Download />}
                >
                  Demo (.mid)
                </Button>
              )}
            </>
          )}
          </Box>
        </Card>
      </Box>
    </Container>
  );
}