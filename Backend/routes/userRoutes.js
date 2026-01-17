import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData, updateUserStatus, updateLastSeen, deleteUser } from '../controllers/UsersController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);
userRouter.put('/status/:userId', userAuth, updateUserStatus);
userRouter.put('/lastseen/:userId', userAuth, updateLastSeen);
userRouter.delete('/delete/:userId', userAuth, deleteUser);


export default userRouter;