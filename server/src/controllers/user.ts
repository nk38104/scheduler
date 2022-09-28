import { Request, Response } from "express";
import userService from "../services/user";

const get = async (req: Request, resp: Response) => {
  try {
    const id: number = req.body.id;

    if (id < 1 || !id) {
      throw Error("Invalid request.");
    }

    const user = await userService.get(id);

    if (!user) {
      throw Error("User not found.");
    }

    resp.status(200).json(user);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

export default {
  get,
};
