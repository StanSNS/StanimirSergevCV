import { ViewModeProvider, useViewMode } from './contexts/ViewModeContext';
import ModeToggle from './components/common/ModeToggle';

// HR Mode Components
import HRHeader from './components/hr-mode/HRHeader';
import HRAbout from './components/hr-mode/HRAbout';
import HRExperience from './components/hr-mode/HRExperience';
import HRSkills from './components/hr-mode/HRSkills';
import HREducation from './components/hr-mode/HREducation';
import HRProjects from './components/hr-mode/HRProjects';
import HRFooter from './components/hr-mode/HRFooter';

// Dev Mode Components
import DevHeader from './components/dev-mode/DevHeader';
import DevAbout from './components/dev-mode/DevAbout';
import DevExperience from './components/dev-mode/DevExperience';
import DevSkills from './components/dev-mode/DevSkills';
import DevProjects from './components/dev-mode/DevProjects';
import DevFooter from './components/dev-mode/DevFooter';

function AppContent() {
  const { isDevMode } = useViewMode();

  return (
    <div className={`min-h-screen ${isDevMode ? 'bg-dev-background text-dev-text dev-scrollbar' : 'bg-hr-background text-hr-text'}`}>
      <ModeToggle />

      {isDevMode ? (
        <>
          <DevHeader />
          <DevAbout />
          <DevExperience />
          <DevSkills />
          <DevProjects />
          <DevFooter />
        </>
      ) : (
        <>
          <HRHeader />
          <HRAbout />
          <HRExperience />
          <HRSkills />
          <HREducation />
          <HRProjects />
          <HRFooter />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ViewModeProvider>
      <AppContent />
    </ViewModeProvider>
  );
}

export default App;
