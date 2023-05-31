import { Module, forwardRef } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ImovelSchema } from '../../schemas/imovel/imovel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CreateImovelDTO', schema: ImovelSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [ImovelService],
  exports: [ImovelService],
  controllers: [ImovelController]
})
export class ImovelModule {}
