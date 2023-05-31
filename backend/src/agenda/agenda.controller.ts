import { Controller, Get, Post, Body,Param, Put, Delete } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDTO } from './dtos/create-agenda.dto';
import { UpdateAgendaDTO } from './dtos/update-agenda.dto';
import { ReturnAgendaDTO } from './dtos/return-agenda.dto';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agendaService: AgendaService) {}

    @Get()
    async getAll(): Promise<ReturnAgendaDTO[]> {
        return (
            await this.agendaService.getAll()
        ).map((agenda) => new ReturnAgendaDTO(agenda))
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<ReturnAgendaDTO> {
        return new ReturnAgendaDTO(
            await this.agendaService.getById(id)
        )
    }

    @Post()
    async create(@Body() data: CreateAgendaDTO){
        return await this.agendaService.create(data)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateAgendaDTO): Promise<ReturnAgendaDTO> {
        return new ReturnAgendaDTO(
            await this.agendaService.update(id, data)
        )
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.agendaService.delete(id)
    }
}
