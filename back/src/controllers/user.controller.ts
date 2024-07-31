import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getUserByIdService,
  loginUserService,
  registerUserService,
} from "../services/user.service";

export const getUserById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = Number(id);
    const user = await getUserByIdService(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  }
);

export const registerUser = catchedController(
  async (req: Request, res: Response) => {
    const { email, password, name, address, phone } = req.body;
    const newUser = await registerUserService({
      email,
      password,
      name,
      address,
      phone,
    });
    res.status(201).send(newUser);
  }
);

export const login = catchedController(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginUserService({ email, password });
  res.status(200).send({
    login: true,
    user: user.user,
    token: user.token,
  });
});
