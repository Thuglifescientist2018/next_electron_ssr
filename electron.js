const next = require('next');
const http = require('http');
const { exec } = require('child_process');

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = http.createServer((req, res) => {
            handle(req, res);
        });

        server.listen(3000, () => {
            console.log('Server running on http://localhost:3000');

            // Open the browser natively
            const url = 'http://localhost:3000';
            const platform = process.platform;

            if (platform === 'win32') {
                exec(`start ${url}`);
            } else if (platform === 'darwin') {
                exec(`open ${url}`);
            } else if (platform === 'linux') {
                exec(`xdg-open ${url}`);
            } else {
                console.log(`Please open your browser and navigate to ${url}`);
            }
        });
    })
    .catch((err) => {
        console.error('Error preparing Next.js:', err);
    });
