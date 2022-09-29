import { Request, Response } from "express";
import subjectService from "../services/subject";

const create = async (req: Request, resp: Response) => {
  try {
    const { userId, subjectCode, name, hoursPerWeek, maxHoursPerDay } = req.body;

    const subject = await subjectService.create(
      userId,
      subjectCode,
      name,
      hoursPerWeek,
      maxHoursPerDay,
    );

    resp.status(200).json(subject);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

const get = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const subject = await subjectService.get(id);

    resp.status(200).json(subject);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const getAll = async (req: Request, resp: Response) => {
  try {
    const userId: number = req.body.id;

    const subjects = await subjectService.getAll(userId);

    resp.status(200).json(subjects);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    const { subjectCode, name, hoursPerWeek, maxHoursPerDay } = req.body;

    const subject = await subjectService.update(
      id,
      subjectCode,
      name,
      hoursPerWeek,
      maxHoursPerDay,
    );

    resp.status(200).send(subject);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const subject = await subjectService.remove(id);

    resp.status(200).send(subject);
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
