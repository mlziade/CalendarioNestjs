import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    EventsModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
