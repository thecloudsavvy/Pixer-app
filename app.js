
import express from 'express';
import { dirname } from 'path'; // To handle file paths
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware to serve static files
app.use(express.static('public')); // Assuming 'public' is your directory for static files

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // Adjust the path as needed
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

