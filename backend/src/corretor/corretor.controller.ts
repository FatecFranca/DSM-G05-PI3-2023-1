import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CorretorService } from './corretor.service';
import { CreateCorretorDTO } from './dtos/create-corretor.dto';
import { UpdateCorretorDTO } from './dtos/update-corretor.dto';
import { ReturnCorretorDTO } from './dtos/return-corretor.dto';
import { ParamId } from '../decorators/param-id.decorator';

@Controller('corretor')
export class CorretorController {
    constructor(private readonly corretorService: CorretorService) {}

    @Get()
    async getAll(): Promise<ReturnCorretorDTO[]> {
        return (
            await this.corretorService.getAll()
        ).map((corretor) => new ReturnCorretorDTO(corretor))
    }

    @Get(':id')
    async getById(@ParamId() id: string): Promise<ReturnCorretorDTO>  {
        return new ReturnCorretorDTO(
            await this.corretorService.getById(id)
        );
    }

    @Post()
    async create(@Body() data: CreateCorretorDTO) {
        return await this.corretorService.create(data);
    }

    @Put(':id')
    async update(@ParamId() id: string, @Body() data: UpdateCorretorDTO): Promise<ReturnCorretorDTO>  {
        return new ReturnCorretorDTO(
            await this.corretorService.update(id, data)
        );
    }

    @Delete(':id')
    async delete(@ParamId() id: string) {
        return await this.corretorService.delete(id)
    }
}
