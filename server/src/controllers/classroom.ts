import { Request, Response } from "express";
import classroomService from "../services/classroom";

const create = async (req: Request, resp: Response) => {
  try {
    const { id, name, capacity } = req.body;

    const classroom = await classroomService.create(id, name, capacity);

    resp.status(200).json(classroom);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

const get = async (req: Request, resp: Response) => {
  try {
    const userId: number = req.body.id;

    const classroom = await classroomService.getById(userId);

    resp.status(200).json(classroom);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const getAll = async (_req: Request, resp: Response) => {
  try {
    const classrooms = await classroomService.getAll();

    resp.status(200).json(classrooms);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id, name, capacity } = req.body;

    const classroom = await classroomService.update(id, name, capacity);

    resp.status(200).send(classroom);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const id: number = req.body.id;

    const classroom = await classroomService.remove(id);

    resp.status(200).send(classroom);
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
