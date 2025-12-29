# My Portfolio - Node.js/Express Version

A personal portfolio website converted from Laravel to Node.js/Express for Vercel deployment.

## Tech Stack

- **Backend**: Node.js with Express
- **Template Engine**: EJS with express-ejs-layouts
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features

- Responsive design with mobile navigation
- Interactive snow effect
- Project filtering functionality
- Skills progress bars
- Social media integration
- WhatsApp contact button

## Project Structure

```
myportfolio/
├── server.js          # Main Express server
├── package.json       # Project dependencies
├── vercel.json        # Vercel deployment configuration
├── views/             # EJS templates
│   ├── layout.ejs     # Main layout template
│   ├── home.ejs       # Home page
│   ├── about.ejs      # About page
│   ├── projects.ejs   # Projects page
│   ├── experience.ejs # Experience page
│   └── contact.ejs    # Contact page
└── public/            # Static assets
    └── assets/        # Images, CSS, JS files
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## Production Build

The project is ready for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Node.js framework and deploy using the `vercel.json` configuration

## Environment Variables

No environment variables are required for basic functionality. The application runs with default settings.

## Migration from Laravel

This project was successfully migrated from Laravel to Node.js/Express with the following changes:

- Blade templates converted to EJS
- Laravel routes converted to Express routes
- PHP controllers replaced with Express route handlers
- Laravel-specific dependencies removed
- Configured for serverless deployment on Vercel

## Contact

- Email: whaiqal7@gmail.com
- Phone: +60 13-628 1083
- WhatsApp: [Click to chat](https://wa.me/60136281083?text=Hello,%20i%20interested)
