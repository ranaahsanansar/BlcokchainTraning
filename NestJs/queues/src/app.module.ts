import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MesConsumer } from './msg.consumer';

@Module({
  imports: [ BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379
    }
  }),
  BullModule.registerQueue({
    name: 'msgqueue',
  }),
],
  controllers: [AppController],
  providers: [AppService , MesConsumer ],
})
export class AppModule {}