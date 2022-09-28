import { Request, Response } from "express";
import userService from "../services/user";

const get = async (req: Request, resp: Response) => {
  try {
    const id: number = req.body.id;

    const user = await userService.get(id);

    resp.status(200).json(user);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id, email } = req.body;

    const user = await userService.update(id, email);

    resp.status(200).send(user);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const id: number = req.body.id;

    const user = await userService.remove(id);

    resp.status(200).send(user);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

export default {
  get,
  update,
  remove,
};
