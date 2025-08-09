# 🌙 Dark Mode Implementation Guide

## 🎯 What is Dark Mode?

Dark mode is a user interface theme that uses dark colors (dark backgrounds, light text) instead of light colors (light backgrounds, dark text). It's popular because it:

- **Reduces eye strain** in low-light environments
- **Saves battery** on devices with OLED screens
- **Looks modern and sleek**
- **Improves accessibility** for some users

## 🏗️ How Our Dark Mode Works

### 1. **Theme State Management (Redux)**

We use Redux to manage the dark mode state across the entire app:

```javascript
// redux/reducers/Theme.js
const initialState = {
  isDarkMode: false, // false = light mode, true = dark mode
};

const Theme = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode; // Toggle between true/false
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload; // Set to specific value
    },
  },
});
```

**Explanation for Beginners:**
- Think of `isDarkMode` as a light switch in your house
- When it's `false` (off) = light mode
- When it's `true` (on) = dark mode
- The `toggleDarkMode` function flips the switch
- The `setDarkMode` function sets it to a specific position

### 2. **Theme Colors Configuration**

We define colors for both light and dark modes:

```javascript
// assets/styles/theme.js
export const lightTheme = {
  backgroundColor: '#FFFFFF',     // White background
  textPrimary: '#0A043C',        // Dark text
  primary: '#6930c3',            // Purple accent
  // ... more colors
};

export const darkTheme = {
  backgroundColor: '#1A1A1A',     // Dark background
  textPrimary: '#FFFFFF',        // White text
  primary: '#8B5CF6',            // Lighter purple accent
  // ... more colors
};

export const getTheme = (isDarkMode) => {
  return isDarkMode ? darkTheme : lightTheme;
};
```

**Explanation for Beginners:**
- `lightTheme` = colors for when the sun is up (normal mode)
- `darkTheme` = colors for when it's nighttime (dark mode)
- `getTheme()` = a function that gives us the right colors based on the switch position

### 3. **Toggle Switch Component**

We created a custom toggle switch that users can tap:

```javascript
// Components/ToggleSwitch/ToggleSwitch.js
const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode()); // Flip the switch!
  };

  return (
    <Pressable
      style={[
        styles.toggleContainer,
        {
          backgroundColor: isDarkMode ? theme.primary : theme.tabInactive,
        }
      ]}
      onPress={handleToggle}
    >
      <View
        style={[
          styles.toggleThumb,
          {
            backgroundColor: theme.backgroundColor,
            transform: [{ translateX: isDarkMode ? 20 : 0 }], // Move thumb left/right
          }
        ]}
      />
    </Pressable>
  );
};
```

**Explanation for Beginners:**
- The switch is like a light switch in your house
- When you tap it, it calls `handleToggle()` which "flips the switch"
- The thumb (circle) moves left or right based on the mode
- Colors change based on whether it's dark or light mode

### 4. **Using Theme in Components**

Components get the current theme and apply it:

```javascript
// In any component
const isDarkMode = useSelector((state) => state.theme.isDarkMode);
const theme = getTheme(isDarkMode);

// Use theme colors
<View style={{ backgroundColor: theme.backgroundColor }}>
  <Text style={{ color: theme.textPrimary }}>
    Hello World!
  </Text>
</View>
```

**Explanation for Beginners:**
1. `useSelector` = "check the current switch position"
2. `getTheme` = "get the right colors for this position"
3. Apply those colors to your component

## 🎨 How Colors Change

### Light Mode Colors:
- **Background**: White (`#FFFFFF`)
- **Text**: Dark (`#0A043C`)
- **Primary**: Purple (`#6930c3`)
- **Secondary**: Light gray (`#F3F5F9`)

### Dark Mode Colors:
- **Background**: Dark gray (`#1A1A1A`)
- **Text**: White (`#FFFFFF`)
- **Primary**: Light purple (`#8B5CF6`)
- **Secondary**: Dark gray (`#2D2D2D`)

## 🔄 How to Use Dark Mode

### For Users:
1. **Find the toggle switch** - It's in the top-right corner of the home screen
2. **Tap it** - The switch will flip and colors will change instantly
3. **Enjoy** - Your app now has a dark theme!

### For Developers:

#### Adding Dark Mode to New Components:

1. **Import the necessary hooks:**
```javascript
import { useSelector } from 'react-redux';
import { getTheme } from '../../assets/styles/theme';
```

2. **Get the current theme:**
```javascript
const isDarkMode = useSelector((state) => state.theme.isDarkMode);
const theme = getTheme(isDarkMode);
```

3. **Apply theme colors:**
```javascript
<View style={{ backgroundColor: theme.backgroundColor }}>
  <Text style={{ color: theme.textPrimary }}>
    Your content here
  </Text>
</View>
```

#### Example: Adding a Button with Dark Mode Support:

```javascript
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getTheme } from '../../assets/styles/theme';

const MyButton = ({ title, onPress }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.primary,
        padding: 15,
        borderRadius: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: theme.textPrimary, textAlign: 'center' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
```

## 🎯 Key Benefits

1. **User Experience**: Users can choose their preferred theme
2. **Accessibility**: Better for users with visual sensitivity
3. **Battery Life**: Saves battery on devices with OLED screens
4. **Modern Feel**: Dark mode looks contemporary and professional

## 🚀 Next Steps

1. **Test the toggle switch** - Tap it to see colors change
2. **Add dark mode** to any new components you create
3. **Customize colors** in `assets/styles/theme.js` if needed
4. **Consider user preferences** - you could save the user's choice

## 🐛 Troubleshooting

### Issue: Colors aren't changing
- Make sure you're using `useSelector` to get the theme state
- Check that you're applying theme colors correctly
- Verify the theme reducer is added to the Redux store

### Issue: Toggle switch not working
- Check that the `toggleDarkMode` action is being dispatched
- Verify the theme reducer is properly configured
- Make sure the toggle component is imported and used

### Issue: Some components not themed
- Add theme support to those components using the pattern above
- Check that you're using the correct theme property names

---

**Happy coding! 🌙✨**
