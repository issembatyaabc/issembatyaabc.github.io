# Ssembatya Isaac's Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Project showcase with filtering capability
- Functional contact form (using EmailJS)
- Timeline-based experience section
- Skills showcase
- CV download option

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (Vanilla)
- Font Awesome for icons
- Google Fonts

## Deployment on GitHub Pages

To deploy this portfolio on GitHub Pages:

1. Create a new repository on GitHub named `username.github.io` (replace `username` with your GitHub username)
2. Initialize Git in this directory:
   ```
   git init
   ```
3. Add all files to Git:
   ```
   git add .
   ```
4. Commit the changes:
   ```
   git commit -m "Initial portfolio website"
   ```
5. Add your GitHub repository as remote:
   ```
   git remote add origin https://github.com/username/username.github.io.git
   ```
6. Push to GitHub:
   ```
   git push -u origin main
   ```
7. Go to your repository settings on GitHub, navigate to "Pages" section
8. Ensure the source is set to deploy from the main branch
9. Your site will be published at `https://username.github.io`

## Local Development

To run this website locally:

1. Clone the repository
2. Open the index.html file in your browser
3. For live reloading, you can use an extension like Live Server in VS Code

## Customization

- Replace placeholder images in the `images` folder with your own
- Update project information in the HTML
- Modify color scheme in the CSS variables (in `:root`)
- Update contact information and social links

## Setting Up the Contact Form with EmailJS

The contact form is configured to work with EmailJS, a service that allows sending emails directly from JavaScript without a server. Follow these steps to set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)

2. Create a new email service in your EmailJS dashboard:
   - Go to "Email Services" and click "Add New Service"
   - Select your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. Create an email template:
   - Go to "Email Templates" and click "Create New Template"
   - Design your email template with variables: {{from_name}}, {{from_email}}, {{subject}}, and {{message}}
   - Save the template

4. Update the EmailJS configuration in the code:
   - In `index.html`, replace "YOUR_USER_ID" with your actual EmailJS user ID (found in Account > API Keys)
   - In `js/main.js`, update these values:
     - Replace 'service_id' with your EmailJS service ID
     - Replace 'template_id' with your email template ID
     - Replace 'user_id' with your EmailJS user ID (same as in index.html)

5. Test the contact form to ensure emails are being sent correctly

## License

MIT
