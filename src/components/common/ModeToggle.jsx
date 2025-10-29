import { useViewMode } from '../../contexts/ViewModeContext';
import { Monitor, Code2 } from 'lucide-react';

const ModeToggle = () => {
  const { mode, toggleMode } = useViewMode();

  return (
    <div className="fixed top-6 right-6 z-50 no-print">
      <button
        onClick={toggleMode}
        className={`
          flex items-center gap-3 px-6 py-3 rounded-full font-medium
          shadow-lg hover:shadow-xl transform hover:scale-105
          transition-all duration-300 backdrop-blur-sm
          ${mode === 'hr'
            ? 'bg-hr-primary text-white hover:bg-blue-700'
            : 'bg-dev-primary text-dev-background hover:bg-cyan-400'
          }
        `}
        aria-label={`Switch to ${mode === 'hr' ? 'Developer' : 'HR'} mode`}
      >
        {mode === 'hr' ? (
          <>
            <Code2 size={20} />
            <span>Dev Mode</span>
          </>
        ) : (
          <>
            <Monitor size={20} />
            <span>HR Mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ModeToggle;
