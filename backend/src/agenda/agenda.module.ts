import { Module, forwardRef } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AgendaController } from './agenda.controller';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaSchema } from '../../schemas/agenda/agenda.schema';
import { CorretorModule } from '../corretor/corretor.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CreateAgendaDTO', schema: AgendaSchema }]),
    forwardRef(() => AuthModule),
    forwardRef(() => CorretorModule),
  ],
  providers: [AgendaService],
  exports: [AgendaService],
  controllers: [AgendaController]
})
export class AgendaModule {}
