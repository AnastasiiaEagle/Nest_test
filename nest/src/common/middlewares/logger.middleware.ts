import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

// @Injectable()
// export class LoggingModdleware implements NestMiddleware{
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log(`Request...  ${req.method} ${req.url}`);
//         next();
//     }
// }


export function logger (req: Request, res: Response, next: NextFunction){
    console.log(`Request...  ${req.method} ${req.url}`);
    next();
}