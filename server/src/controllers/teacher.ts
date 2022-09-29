import { Request, Response } from "express";
import teacherService from "../services/teacher";

const create = async (req: Request, resp: Response) => {
  try {
    const { userId, teacherCode, firstName, lastName } = req.body;

    const teacher = await teacherService.create(userId, teacherCode, firstName, lastName);

    resp.status(200).json(teacher);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

const get = async (req: Request, resp: Response) => {
  try {
    const id: number = req.body.id;

    const teacher = await teacherService.getById(id);

    resp.status(200).json(teacher);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const getAll = async (req: Request, resp: Response) => {
  try {
    const userId: number = req.body.id;

    const teachers = await teacherService.getAll(userId);

    resp.status(200).json(teachers);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    const { teacherCode, firstName, lastName } = req.body;

    const teacher = await teacherService.update(id, teacherCode, firstName, lastName);

    resp.status(200).send(teacher);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const teacher = await teacherService.remove(id);

    resp.status(200).send(teacher);
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
