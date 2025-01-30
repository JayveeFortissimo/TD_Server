import express, {Router} from 'express';
import { Register, Login } from '../controller/Credentials.js';
import { verify } from '../middleware/Authorization.js';

const Routers = express.Router();

Routers.post('/register', Register);
Routers.post('/login',verify, Login);

export default Routers;