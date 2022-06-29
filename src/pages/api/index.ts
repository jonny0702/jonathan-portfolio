import { HomeInfo } from '../../../HomeInfo';
import { Request, Response } from 'express';

export default function index (req: Request, res: Response){
  res.status(200).json({
    message: 'Home Info Listed',
    info: HomeInfo
  })
}