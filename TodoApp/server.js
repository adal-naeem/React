const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
    user: 'sa',
    password: 'Admin@786', 
    server: 'localhost',
    database: 'TodoDB',
    options: { encrypt: false, trustServerCertificate: true }
};

app.get('/tasks', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query("SELECT * FROM TodoTasks");
        res.json(result.recordset);
    } catch (err) { res.status(500).send(err.message); }
});

app.post('/add-task', async (req, res) => {
    try {
        const { item, dueDate } = req.body;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('item', sql.NVarChar, item)
            .input('date', sql.Date, dueDate)
            .query("INSERT INTO TodoTasks (item, dueDate) VALUES (@item, @date)");
        res.sendStatus(200);
    } catch (err) { res.status(500).send(err.message); }
});


// Task delete karne ke liye (DELETE)
app.delete('/delete-task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM TodoTasks WHERE id = @id");
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
});



app.listen(3000, () => console.log("Zabardast! Server port 3000 par chal raha hai"));








//node -v
//npm init -y
//npm install express mssql cors

//node server.js
