import { FindAllUsersController } from '@controllers/User/FindUsersController';
import { CreateUserController } from '@controllers/User/CreateUserController';
import { UpdateUserController } from '@controllers/User/UpdateUserController';
import { Router } from 'express';
const router = Router();

/**
 * @route   GET /api/users
 * @desc    fetch all users
 * @acess   public
 */
const findAllUsersController = new FindAllUsersController();
router.get('/api/users', findAllUsersController.handle);

/**
 * @route   POST /api/users
 * @desc    create the user
 * @acess   public
 */
const createUserController = new CreateUserController();
router.post('/api/users', createUserController.handle);

/**
 * @route   Put /api/users/:id
 * @desc    update the user profile by id
 * @acess   public
 */

const updateUserController = new UpdateUserController();
router.put('/api/users/:id', updateUserController.handle);

export { router as userRouter };
