// Theme configuration for light and dark modes
export const lightTheme = {
  // Background colors
  backgroundColor: '#FFFFFF',
  secondaryBackground: '#F3F5F9',
  
  // Text colors
  textPrimary: '#0A043C',
  textSecondary: '#636776',
  textTertiary: '#79869F',
  
  // Component colors
  primary: '#6930c3',
  secondary: '#30c3b5',
  accent: '#6930c3ff',
  
  // Card and container colors
  cardBackground: '#FFFFFF',
  borderColor: '#E5E5E5',
  
  // Status colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  
  // Tab colors
  tabActive: '#6930c3',
  tabInactive: '#F3F5F9',
  tabTextActive: '#FFFFFF',
  tabTextInactive: '#79869F',
};

export const darkTheme = {
  // Background colors
  backgroundColor: '#1A1A1A',
  secondaryBackground: '#2D2D2D',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textTertiary: '#999999',
  
  // Component colors
  primary: '#8B5CF6',
  secondary: '#34D399',
  accent: '#8B5CF6',
  
  // Card and container colors
  cardBackground: '#2D2D2D',
  borderColor: '#404040',
  
  // Status colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  
  // Tab colors
  tabActive: '#8B5CF6',
  tabInactive: '#404040',
  tabTextActive: '#FFFFFF',
  tabTextInactive: '#CCCCCC',
};

// Function to get current theme based on isDarkMode
export const getTheme = (isDarkMode) => {
  return isDarkMode ? darkTheme : lightTheme;
};
