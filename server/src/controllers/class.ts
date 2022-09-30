import { Request, Response } from "express";
import classService from "../services/class";

const create = async (req: Request, resp: Response) => {
  try {
    const { userId, name, studentCount } = req.body;

    const schoolClass = await classService.create(userId, name, studentCount);

    resp.status(200).json(schoolClass);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

const get = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const schoolClass = await classService.get(id);

    resp.status(200).json(schoolClass);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const getAll = async (_req: Request, resp: Response) => {
  try {
    const schoolClasses = await classService.getAll();

    resp.status(200).json(schoolClasses);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    const { name, studentCount } = req.body;

    const schoolClass = await classService.update(id, name, studentCount);

    resp.status(200).send(schoolClass);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const schoolClass = await classService.remove(id);

    resp.status(200).send(schoolClass);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

export default {
  create,
  get,
  getAll,
  update,
  remove,
};
