import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { CorretorService } from './corretor.service';
import { CreateCorretorDTO } from './dtos/create-corretor.dto';
import { UpdateCorretorDTO } from './dtos/update-corretor.dto';
import { ReturnCorretorDTO } from './dtos/return-corretor.dto';
import { ParamId } from '../decorators/param-id.decorator';
import { Roles } from '../decorators/role.decorator';
import { Role } from '../enums/role.enum';
import { AuthCorretorGuard } from '../guards/auth-corretor.guard';
import { RoleGuard } from '../guards/role.guard';

@Controller('corretor')
export class CorretorController {
    constructor(private readonly corretorService: CorretorService) {}

    @Roles(Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Get()
    async getAll(): Promise<ReturnCorretorDTO[]> {
        return (
            await this.corretorService.getAll()
        ).map((corretor) => new ReturnCorretorDTO(corretor))
    }

    @Roles(Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Get(':id')
    async getById(@ParamId() id: string): Promise<ReturnCorretorDTO>  {
        return new ReturnCorretorDTO(
            await this.corretorService.getById(id)
        );
    }

    @Roles(Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Post()
    async create(@Body() data: CreateCorretorDTO) {
        return await this.corretorService.create(data);
    }

    @Roles(Role.Corretor)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Put(':id')
    async update(@ParamId() id: string, @Body() data: UpdateCorretorDTO): Promise<ReturnCorretorDTO>  {
        return new ReturnCorretorDTO(
            await this.corretorService.update(id, data)
        );
    }

    @Roles(Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Delete(':id')
    async delete(@ParamId() id: string) {
        return await this.corretorService.delete(id)
    }
}
