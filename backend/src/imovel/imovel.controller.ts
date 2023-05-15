import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { CreateImovelDTO } from './dtos/create-imovel.dto';
import { UpdateImovelDTO } from './dtos/update-imovel.dto';

@Controller('imovel')
export class ImovelController {
    constructor(private readonly imovelService: ImovelService) {}

    @Get()
    async getAll() {
        return await this.imovelService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.imovelService.getById(id)
    }

    @Post()
    async create(@Body() data: CreateImovelDTO) {
        return await this.imovelService.create(data)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateImovelDTO) {
        return await this.imovelService.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.imovelService.delete(id)
    }
}
