import { Controller, Get, Post, Body,Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDTO } from './dtos/create-agenda.dto';
import { UpdateAgendaDTO } from './dtos/update-agenda.dto';
import { ReturnAgendaDTO } from './dtos/return-agenda.dto';
import { Roles } from '../decorators/role.decorator';
import { Role } from '../enums/role.enum';
import { AuthCorretorGuard } from '../guards/auth-corretor.guard';
import { RoleGuard } from '../guards/role.guard';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agendaService: AgendaService) {}

    @Roles(Role.Admin, Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Get()
    async getAll(): Promise<ReturnAgendaDTO[]> {
        return (
            await this.agendaService.getAll()
        ).map((agenda) => new ReturnAgendaDTO(agenda))
    }

    @Roles(Role.Admin, Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
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

    @Roles(Role.Admin, Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateAgendaDTO): Promise<ReturnAgendaDTO> {
        return new ReturnAgendaDTO(
            await this.agendaService.update(id, data)
        )
    }

    @Roles(Role.Admin, Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.agendaService.delete(id)
    }
}
