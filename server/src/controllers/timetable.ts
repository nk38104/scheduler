import { Request, Response } from "express";
import timetableService from "../services/timetable";

const create = async (req: Request, resp: Response) => {
  try {
    const { id, timetable } = req.body;

    const newTimetable = await timetableService.create(id, timetable);

    resp.status(200).json(newTimetable);
  } catch (err: any) {
    resp.status(500).send(err);
  }
};

const get = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const timetable = await timetableService.get(id);

    resp.status(200).json(timetable);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

const update = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
    const { timetableData } = req.body;

    const timetable = await timetableService.update(id, timetableData);

    resp.status(200).send(timetable);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

const remove = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;

    const timetable = await timetableService.remove(id);

    resp.status(200).send(timetable);
  } catch (err: any) {
    resp.status(500).send(err.meta.cause);
  }
};

export default {
  create,
  get,
  update,
  remove,
};
