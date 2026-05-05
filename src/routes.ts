import { Router } from "express";
import { validateUserSchema } from "./middlewares/validateUserSchema";
import { LoginUserSchema, createUserSchema } from "./schemas/userSchema";
import { CreateUserController } from "@src/controllers/user/CreateUserController";
import { authUserController } from "@src/controllers/user/AuthUserController";

const router = Router();

router.post(
  "/users",
  validateUserSchema(createUserSchema),
  new CreateUserController().handle,
);

router.post(
  "/session",
  validateUserSchema(LoginUserSchema),
  authUserController.handle,
);

export { router };
