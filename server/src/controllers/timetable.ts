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
    const userId: number = req.body.id;

    const timetable = await timetableService.get(userId);

    resp.status(200).json(timetable);
  } catch (err: any) {
    resp.status(500).send(err.name);
  }
};

export default {
  create,
  get,
};
