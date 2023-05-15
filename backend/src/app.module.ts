import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './cliente/cliente.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { CorretorModule } from './corretor/corretor.module';
import { ImovelModule } from './imovel/imovel.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CorretorModule,
    ClienteModule,
    AuthModule,
    JwtModule,
    ImovelModule,
  ]
})
export class AppModule {}
