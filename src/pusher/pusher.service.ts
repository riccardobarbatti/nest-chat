import { Injectable } from '@nestjs/common';
import * as Pusher from "pusher";

@Injectable()
export class PusherService {
  pusher: Pusher;
  constructor() {
    this.pusher = new Pusher({
      appId: process.env.APP_ID,
      key: process.env.KEY,
      secret: process.env.SECRET,
      cluster: "eu",
      useTLS: true
    });
  }

  async trigger(channel: string, event: string, data: any){
        await this.pusher.trigger(channel, event, data);
  }
}

