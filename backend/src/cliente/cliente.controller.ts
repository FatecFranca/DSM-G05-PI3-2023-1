import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { CreateClienteDTO } from "./dtos/create-cliente.dto";
import { UpdateClienteDTO } from "./dtos/update-cliente.dto";

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAll() {
        return this.clienteService.getAll();
    }

    @Get(':id')
    async getById (@Param('id') id: string) {
        return await this.clienteService.getById(id);
    }

    @Post()
    async create (@Body() data: CreateClienteDTO) {
        return await this.clienteService.create(data)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateClienteDTO) {
        return await this.clienteService.update(id, data);
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.clienteService.delete(id)
    }
}