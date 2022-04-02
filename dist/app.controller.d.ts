import { PusherService } from "./pusher/pusher.service";
export declare class AppController {
    private pusherService;
    constructor(pusherService: PusherService);
    messages(username: string, message: string): Promise<any[]>;
    getMessage(): void;
}
