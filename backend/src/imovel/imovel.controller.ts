import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { CreateImovelDTO } from './dtos/create-imovel.dto';
import { UpdateImovelDTO } from './dtos/update-imovel.dto';
import { ReturnImovelDTO } from './dtos/return-imovol.dto';

@Controller('imovel')
export class ImovelController {
    constructor(private readonly imovelService: ImovelService) {}

    @Get()
    async getAll(): Promise<ReturnImovelDTO[]> {
        return (
            await this.imovelService.getAll()
        ).map((imovel) => new ReturnImovelDTO(imovel))
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<ReturnImovelDTO> {
        return new ReturnImovelDTO(
            await this.imovelService.getById(id)
        )
    }

    @Post()
    async create(@Body() data: CreateImovelDTO) {
        return await this.imovelService.create(data)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateImovelDTO): Promise<ReturnImovelDTO> {
        return new ReturnImovelDTO(
            await this.imovelService.update(id, data)
        )
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.imovelService.delete(id)
    }
}
