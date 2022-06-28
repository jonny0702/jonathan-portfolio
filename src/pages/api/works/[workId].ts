import { Request, Response } from 'express';
import { projects } from '../../../../projects';

export default function works(req: Request, res: Response) {
  const { workId } = req.query;

  const work = projects.find((project) => workId === project.id) || {};

  res.status(200).json({
    message: 'projects listed',
    work,
  });
}
