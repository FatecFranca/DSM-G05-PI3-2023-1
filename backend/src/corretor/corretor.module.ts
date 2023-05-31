import { Module, forwardRef } from '@nestjs/common';
import { CorretorService } from './corretor.service';
import { CorretorController } from './corretor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { CorretorSchema } from '../../schemas/corretor/corretor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CreateCorretorDTO', schema: CorretorSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [CorretorService],
  controllers: [CorretorController],
  exports: [CorretorService]
})
export class CorretorModule { }
