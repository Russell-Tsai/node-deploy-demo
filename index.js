const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ping endpoint
app.get('/ping', (req, res) => {
    res.json({
        ok: true,
        message: 'pong',
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
