import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('msgqueue') private queue: Queue ){

  }
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessage(msg: string){
    await this.queue.add('message-job' , {
        text: msg
    });
    console.log("I am inside the producer ")
}
}
