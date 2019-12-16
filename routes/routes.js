// Load the MySQL pool connection
const pool = require('../data/config');

// Router
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

// Display all news
app.get('/news', (request, response) => {
    pool.query('SELECT * FROM news', (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

// Display all authors
    app.get('/authors', (request, response) => {
        pool.query('SELECT * FROM authors', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

// Display all blogs
    app.get('/blogs', (request, response) => {
        pool.query('SELECT * FROM blogs', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

// Display all followers
    app.get('/followers', (request, response) => {
        pool.query('SELECT * FROM followers', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

// Display all subs
    app.get('/subs', (request, response) => {
        pool.query('SELECT * FROM subs', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    // Display a single news by ID
    app.get('/news/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM news WHERE id = ?', id, (error,
result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    // Add a new news
    app.post('/news', (request, response) => {
        pool.query('INSERT INTO news SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });

    // Update an existing news
    app.put('/news/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE news SET ? WHERE id = ?', [request.body, id],
(error, result) => {
            if (error) throw error;

            response.send('News updated successfully.');
        });
    });

    // Delete a news
    app.delete('/news/:id', (request, response) => {
        const id = request.params.id;

        pool.query('DELETE FROM news WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send('News deleted.');
        });
    });
}

// Export the router
module.exports = router;
