import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { CreateClienteDTO } from "./dtos/create-cliente.dto";
import { UpdateClienteDTO } from "./dtos/update-cliente.dto";
import { ReturnClienteDTO } from "./dtos/return-cliente.dto";
import { QueryParamsDTO } from "./dtos/search-query.dto";
import { ParamId } from "../decorators/param-id.decorator";

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
    @Get('/search')
    async getQuery (
        @Query() query: QueryParamsDTO
    ): Promise<ReturnClienteDTO[]> {
        return (
           await this.clienteService.getByQuery(query)
        ).map((cliente) => new ReturnClienteDTO(cliente))
    }

    @Get()
    async getAll(): Promise<ReturnClienteDTO[]> {
        return (
           await this.clienteService.getAll()
        ).map((cliente) => new ReturnClienteDTO(cliente))
    }

    @Get(':id')
    async getById (@ParamId() id: string): Promise<ReturnClienteDTO> {
        return new ReturnClienteDTO(
            await this.clienteService.getById(id)
        );
    }


    @Post()
    async create (@Body() data: CreateClienteDTO) {
        return await this.clienteService.create(data)
    }

    @Put(':id')
    async update(@ParamId() id: string, @Body() data: UpdateClienteDTO): Promise<ReturnClienteDTO>  {
        return new ReturnClienteDTO(
            await this.clienteService.update(id, data)
        );
    }


    @Delete(':id')
    async delete(@ParamId() id: string) {
        return await this.clienteService.delete(id)
    }
}