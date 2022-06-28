import { Request, Response } from 'express';
import { projects } from '../../../../projects';

export default function worksList  (req: Request, res: Response){
  res.status(200).json({
    message: 'projects listed',
    works: projects
  })
}