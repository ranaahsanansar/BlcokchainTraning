import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(req: Request): {
        url: string;
        statusCode: number;
    };
    redirest(): string;
    redirectFalse(): string;
}
