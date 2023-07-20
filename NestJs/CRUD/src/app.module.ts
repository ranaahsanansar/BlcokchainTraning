import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule.forRoot({
//         isGlobal: true,
//         envFilePath: '.local.env',
//         // envFilePath: '.prod.env',
//       })  ],
//       useFactory: (configService: ConfigService) => (
//         {
//         type: 'postgres',
//         host: configService.get('DB_HOST'),
//         port: +configService.get('DB_PORT'),
//         username: configService.get('DB_USERNAME'),
//         password: configService.get('DB_PASSWORD'),
//         database: configService.get('DB_DATABASE'),
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     })
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ahsan##786',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), UserModule ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}