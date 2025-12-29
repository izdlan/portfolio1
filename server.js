import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import nodemailer from 'nodemailer';

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

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    try {
        // Create a test account for development (replace with real SMTP in production)
        const testAccount = await nodemailer.createTestAccount();
        
        // Create transporter with Gmail (for production, use App Password)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'whaiqal7@gmail.com',
                pass: process.env.EMAIL_PASSWORD || 'nvrc xsxs wlcs aoxz' // Use environment variable in production
            }
        });
        
        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'whaiqal7@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };
        
        // Send email
        await transporter.sendMail(mailOptions);
        
        // Show success message to user
        res.render('contact', { 
            title: 'Contact - Izdlan',
            currentPath: '/contact',
            message: 'Thank you for your message! I will get back to you soon.'
        });
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.render('contact', { 
            title: 'Contact - Izdlan',
            currentPath: '/contact',
            error: 'Sorry, there was an error sending your message. Please try again later.'
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;
