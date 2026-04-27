import { Router } from "express";
import { validateUserSchema } from "./middlewares/validateUserSchema";
import { createUserSchema } from "./schemas/userSchema";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

router.post(
  "/users",
  validateUserSchema(createUserSchema),
  new CreateUserController().handle,
);

export { router };
