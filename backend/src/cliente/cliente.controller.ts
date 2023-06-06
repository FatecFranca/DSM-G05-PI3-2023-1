import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { CreateClienteDTO } from "./dtos/create-cliente.dto";
import { UpdateClienteDTO } from "./dtos/update-cliente.dto";
import { ReturnClienteDTO } from "./dtos/return-cliente.dto";
import { QueryParamsDTO } from "./dtos/search-query.dto";
import { ParamId } from "../decorators/param-id.decorator";
import { Roles } from "../decorators/role.decorator";
import { Role } from "../enums/role.enum";
import { AuthCorretorGuard } from "../guards/auth-corretor.guard";
import { RoleGuard } from "../guards/role.guard";

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Roles(Role.Corretor, Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Get('/search')
    async getQuery(
        @Query() query: QueryParamsDTO
    ): Promise<ReturnClienteDTO[]> {
        return (
            await this.clienteService.getByQuery(query)
        ).map((cliente) => new ReturnClienteDTO(cliente))
    }

    @Roles(Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Get()
    async getAll(): Promise<ReturnClienteDTO[]> {
        return (
            await this.clienteService.getAll()
        ).map((cliente) => new ReturnClienteDTO(cliente))
    }

    @Roles(Role.Admin, Role.Corretor, Role.Cliente)
    @Get(':id')
    async getById(@ParamId() id: string): Promise<ReturnClienteDTO> {
        return new ReturnClienteDTO(
            await this.clienteService.getById(id)
        );
    }

    @Post()
    async create(@Body() data: CreateClienteDTO) {
        return await this.clienteService.create(data)
    }

    @Roles(Role.Cliente, Role.Admin)
    @UseGuards(RoleGuard)
    @Put(':id')
    async update(@ParamId() id: string, @Body() data: UpdateClienteDTO): Promise<ReturnClienteDTO> {
        return new ReturnClienteDTO(
            await this.clienteService.update(id, data)
        );
    }

    @Roles(Role.Admin)
    @UseGuards(AuthCorretorGuard, RoleGuard)
    @Delete(':id')
    async delete(@ParamId() id: string) {
        return await this.clienteService.delete(id)
    }
}