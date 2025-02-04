# Will You Go Out With Me? 💌

A cute and interactive way to ask someone out! This web application presents a playful interface where clicking "No" leads to increasingly persistent messages, while the "Yes" button grows larger with each rejection.

## Features 🌟

- Interactive buttons with dynamic responses
- Growing "Yes" button that becomes unavoidable
- Responsive design for both desktop and mobile devices
- Fun animations and transitions
- Special video message on desktop devices
- Celebratory page upon acceptance
- Form submission using Formspree to handle user responses

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

## Setup Instructions

### Prerequisites

- A web browser to view the application.
- Internet connection to access Formspree services.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Open the Application**

   Open `index.html` in your preferred web browser to view the application.

### Formspree Integration

1. **Sign Up for Formspree**

   Go to [Formspree](https://formspree.io/) and sign up for an account.

2. **Create a New Form**

   - Create a new form in your Formspree dashboard.
   - Copy the form endpoint URL provided by Formspree.

3. **Update the JavaScript Code**

   In `script.js`, replace the placeholder `{your_form_id}` with your actual Formspree form ID in the fetch request URL:

   ```javascript
   fetch('https://formspree.io/f/{your_form_id}', {
       method: 'POST',
       body: formData,
       headers: {
           'Accept': 'application/json'
       }
   })
   ```

4. **Test the Form Submission**

   - Click the "Yes" button to trigger the form submission.
   - Check your Formspree dashboard to verify that the submission is recorded.

## Usage

- Click the "No" button multiple times to see dynamic text changes.
- Click the "Yes" button to submit the form and be redirected to a confirmation page.

## Troubleshooting

- Ensure the Formspree endpoint URL is correct.
- Check the browser console for any errors during form submission.
- Verify that your Formspree account is configured to accept submissions from your domain.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 