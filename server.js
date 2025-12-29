import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Portfolio - Izdlan',
        currentPath: '/'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About - Izdlan',
        currentPath: '/about'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', { 
        title: 'Projects - Izdlan',
        currentPath: '/projects'
    });
});

app.get('/experience', (req, res) => {
    res.render('experience', { 
        title: 'Experience - Izdlan',
        currentPath: '/experience'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - Izdlan',
        currentPath: '/contact'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;
