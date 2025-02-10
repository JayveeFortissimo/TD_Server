import express, {Router} from 'express';
import { Register, Login } from '../controller/Credentials.js';
import { verify } from '../middleware/Authorization.js';
import Profile from '../controller/Profile.js';
import { CreateTodo, getCreate } from '../controller/CreateRodo.js';

const Routers = express.Router();

Routers.post('/register', Register);
Routers.post('/login', Login);
Routers.get('/userProfile',verify, Profile);


Routers.post('/createTodo',verify, CreateTodo);
Routers.get('/createdTodos', verify, getCreate);



export default Routers;