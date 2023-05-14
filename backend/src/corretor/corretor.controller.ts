import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CorretorService } from './corretor.service';
import { CreateCorretorDTO } from './dtos/create-corretor.dto';
import { UpdateCorretorDTO } from './dtos/update-corretor.dto';

@Controller('corretor')
export class CorretorController {
    constructor(private readonly corretorService: CorretorService) {}

    @Get()
    async getAll() {
        return await this.corretorService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.corretorService.getById(id)
    }

    @Post()
    async create(@Body() data: CreateCorretorDTO) {
        return await this.corretorService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateCorretorDTO){
        return await this.corretorService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.corretorService.delete(id)
    }
}
