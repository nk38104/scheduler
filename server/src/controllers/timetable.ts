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

export default {
  create,
};
