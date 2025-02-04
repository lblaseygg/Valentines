# Will You Go Out With Me? 💌

A cute and interactive way to ask someone out! This web application presents a playful interface where clicking "No" leads to increasingly persistent messages, while the "Yes" button grows larger with each rejection.

## Features 🌟

- Interactive buttons with dynamic responses
- Growing "Yes" button that becomes unavoidable
- Responsive design for both desktop and mobile devices
- Fun animations and transitions
- Special video message on desktop devices
- Celebratory page upon acceptance
- Response tracking through Google Forms integration 📊

## Technical Details 🛠️

### Files Structure
- `index.html` - Main page with the question and buttons
- `yes.html` - Celebration page that appears after clicking "Yes"
- `script.js` - Handles all interactive elements and animations
- `styles.css` - Contains all styling with a romantic theme

### Key Components

#### Main Page
- Romantic paper-like design with a letter envelope theme
- Two buttons: "Yes" and "No"
- Dynamic text changes on the "No" button
- Growing animation for the "Yes" button
- Video message feature (desktop only)

#### Celebration Page
- Pink background
- Celebratory GIF
- Background music
- Responsive text and images

### Mobile vs Desktop

#### Desktop Version
- Full feature set including video messages
- Fullscreen "Yes" button at maximum size
- Hover effects on buttons

#### Mobile Version
- Optimized layout for smaller screens
- No video playback to ensure smooth performance
- Responsive text and button sizing

## Setup 📱

1. Clone the repository
2. Ensure all media files are in the correct location:
   - `cat.gif` for the celebration page
   - `Don't be rash.mp4` for the video message
   - Audio file for the celebration page
3. Set up Google Form:
   - Create a new Google Form
   - Add response and timestamp fields
   - Replace form URL and entry IDs in script.js

## Dependencies 🔧

- No external libraries required
- Uses modern CSS features
- Requires a modern web browser

## Browser Support 🌐

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Notes 📝

- The video message only plays on desktop devices
- Audio autoplay may be blocked by some browsers
- Designed to be both fun and responsive
- Uses CSS animations for smooth transitions

## Credits 💝

- Fonts from Google Fonts
- Custom animations and interactions
- Responsive design implementation 