import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor("msgqueue")
export class MesConsumer {
  private readonly logger = new Logger(MesConsumer.name);

  @Process('message-job')
  async transcode(job: Job<unknown>) {
   console.log("I am insdie consumer")
  }
}
