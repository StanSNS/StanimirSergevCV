import { createContext, useContext, useState, useEffect } from 'react';

const ViewModeContext = createContext();

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Load from localStorage or default to 'hr'
    const savedMode = localStorage.getItem('viewMode');
    return savedMode || 'hr';
  });

  useEffect(() => {
    // Save to localStorage whenever mode changes
    localStorage.setItem('viewMode', mode);

    // Update body class for global styling
    document.body.classList.remove('hr-mode', 'dev-mode');
    document.body.classList.add(`${mode}-mode`);
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'hr' ? 'dev' : 'hr');
  };

  const value = {
    mode,
    isDevMode: mode === 'dev',
    isHRMode: mode === 'hr',
    toggleMode,
    setMode
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};
