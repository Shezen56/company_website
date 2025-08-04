# Shezen Consultants & Construction LLP - Static Website

This is the converted static HTML, CSS, and JavaScript version of the Django website for Shezen Consultants & Construction LLP.

## 📁 Project Structure

```
static_website/
├── index.html              # Homepage
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── logo.png           # Company logo
│   ├── slide1.jpeg        # Carousel images
│   ├── slide2.jpeg
│   ├── slide3.jpeg
│   └── service*.jpg       # Service images
└── pages/
    ├── about.html         # About page
    ├── contact.html       # Contact page
    ├── careers.html       # Careers page
    ├── locations.html     # Locations page
    ├── ourwork.html       # Our Work page
    └── success.html       # Success page (after form submission)
```

## 🚀 How to Use

### Option 1: Direct File Access
1. Download all files to your local machine
2. Open `index.html` in any modern web browser
3. Navigate through the website using the menu

### Option 2: Local Web Server (Recommended)
For better functionality, especially with forms, run a local web server:

#### Using Python (if installed):
```bash
# Navigate to the website directory
cd static_website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
# Install a simple server globally
npm install -g http-server

# Navigate to website directory and start server
cd static_website
http-server
```

#### Using PHP (if installed):
```bash
cd static_website
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📋 Features Converted

### ✅ Completed Features:
- **Homepage** with carousel, services overview, and company stats
- **About page** with company information
- **Contact form** with JavaScript validation and localStorage storage
- **Career application form** with file upload support
- **Success page** for form submissions
- **Responsive design** using Bootstrap 4
- **Interactive elements** like counter animations
- **Newsletter subscription** functionality
- **Navigation** with active page highlighting

### 🔄 Form Handling:
Since this is now a static website, forms use JavaScript and localStorage for demo purposes:
- Contact form data is stored in browser's localStorage
- Career applications are stored in browser's localStorage
- Success page shows after form submission
- Newsletter subscription shows confirmation alert

### 🎨 Styling:
- Bootstrap 4 for responsive layout
- Font Awesome icons
- Google Fonts (Poppins)
- Custom CSS for company branding

## 🌐 Deployment Options

### 1. Static Hosting Services (Free):
- **Netlify**: Drag and drop the `static_website` folder
- **Vercel**: Connect to a Git repository
- **GitHub Pages**: Push to a GitHub repository
- **Firebase Hosting**: Use Firebase CLI

### 2. Traditional Web Hosting:
- Upload all files to your web hosting provider's public_html folder
- Ensure `index.html` is in the root directory

### 3. CDN/Cloud Storage:
- AWS S3 with CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## 🔧 Customization

### To modify content:
1. Edit the HTML files directly
2. Update text, images, and links as needed
3. Modify contact information in all files

### To change styling:
1. Edit `css/styles.css` for custom styles
2. Bootstrap classes can be modified or extended

### To add functionality:
1. Edit `js/main.js` for custom JavaScript
2. Add new form handlers or interactive features

## 📞 Contact Information

- **Phone**: +91 7007755637 / +91 8726763779
- **Email**: Shezenconsultantconstruction@gmail.com
- **Address**: 305 Masiha Ganj Sipri Bazar Jhansi(UP)
- **YouTube**: [@shezenconsultantconstruction](https://youtube.com/@shezenconsultantconstruction?si=XZ1Oo7Y_hrFJjZv7)
- **Instagram**: [@shezenconstruction](https://www.instagram.com/shezenconstruction?igsh=MXh1cWJ4OHRkMzg3dg==)

## 📝 Notes

- All Django-specific functionality has been converted to JavaScript
- Forms now use client-side validation and localStorage
- Images paths have been updated for static file serving
- Navigation uses relative links between HTML files
- The website is fully responsive and mobile-friendly

## 🔄 Migration from Django

This static version maintains all the visual design and functionality of the original Django website while removing server-side dependencies. The conversion includes:

- Template inheritance → Individual HTML files
- Django forms → JavaScript form handling
- URL routing → Direct HTML links
- Static file handling → Relative file paths
- Database storage → localStorage (for demo)

For production use with real form submissions, consider integrating with:
- Formspree.io
- Netlify Forms
- EmailJS
- Custom API endpoints