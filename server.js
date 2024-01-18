const express = require('express');
const taskRoutes = require('./controllers/taskController');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', taskRoutes);
app.use('/index', taskRoutes);


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});