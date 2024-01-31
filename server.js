const express = require('express');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');


const app = express();

// Body Parser Middleware
app.use(express.json());

// users API Routes
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/tours', require('./routes/toursRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Init middleware
// app.use(notFoundMiddleware);
// app.use(errorMiddleware);