import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import References from './components/References';
import Resume from './components/Resume';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <Divider />
        <Resume />
        <Divider />
        <Projects />
        <Divider />
        <References />
        <Divider />
        <Contact />

      </div>
    </AppTheme >
  );
}
