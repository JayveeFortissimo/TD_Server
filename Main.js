import express from 'express';
import dovenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MainRoutes from './src/routes/main_Routes.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

dovenv.config();

const PORT = process.env.PORT || 8000;

const App = express();
const server = createServer(App);


App.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));



App.use(cookieParser());
App.use(express.json());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    },
});

App.use((req, res, next) => {
    req.io = io;
    next();
});


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

App.use(MainRoutes);

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));