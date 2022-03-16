import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './database/chat_app.db',
        autoLoadEntities: true,
        synchronize: true,
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
