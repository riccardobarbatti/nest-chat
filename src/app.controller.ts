import { Body, Controller, Get, Post } from "@nestjs/common";
import { PusherService } from "./pusher/pusher.service";

@Controller("api/v1")
export class AppController {
  constructor(private pusherService: PusherService){}

  //message chat
  @Post("messages")
  async messages(
    @Body('username') username:string,
    @Body('message') message:string

    ){
      await this.pusherService.trigger("chat", "message", {
        username,
        message
      });

      return [];

    }

  @Get("hello")
    getMessage(){
    console.log("Hello NestJS!!");
  }


  }




