import express, {Router} from 'express';
import { Register, Login } from '../controller/Credentials.js'

const Routers = express.Router();

Routers.post('/register', Register);
Routers.post('/login', Login);

export default Routers;