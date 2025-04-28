import express from 'express';
import { json } from 'body-parser';
import  connectDB  from './config/db';
import setRoutes  from './routes/index';
import  errorHandler  from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(json());
setRoutes(app);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});