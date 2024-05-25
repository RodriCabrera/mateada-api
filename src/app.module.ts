import { Module } from '@nestjs/common';
import { MeetupsModule } from './meetups/meetups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MeetupsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
