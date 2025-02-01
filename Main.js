import express from 'express';
import dovenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MainRoutes from './src/routes/main_Routes.js';
dovenv.config();

const PORT = process.env.PORT || 8000;

const App = express();


App.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
App.use(cookieParser());
App.use(express.json());


App.use(MainRoutes);

App.listen(PORT, () => console.log(`PORT ${PORT} is working`));
